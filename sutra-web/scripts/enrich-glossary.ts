/**
 * Enrich glossary.ts by baking discovered relatedTerms into entries
 * that currently have none.
 *
 * Two sources of discovery:
 * 1. Text scanning — find glossary terms mentioned in definition/vedantaMeaning
 *    (high confidence: the term literally appears in the text)
 * 2. Co-occurrence — terms that share a morphological root
 *    (e.g. advaita↔dvaitam, abhinna↔bhinna — negation pairs and derivations)
 *
 * Usage: npx tsx scripts/enrich-glossary.ts [--dry-run]
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { glossary, glossaryById } from "../src/app/data/glossary";
import { normalize } from "../src/app/lib/search";

const dryRun = process.argv.includes("--dry-run");

// --- Build normalized term lookup ---
const normalizedTermMap = new Map<string, { id: string; term: string }>();
for (const entry of glossary) {
  const n = normalize(entry.term);
  if (n.length >= 3) normalizedTermMap.set(n, { id: entry.id, term: entry.term });
  if (entry.aliases) {
    for (const alias of entry.aliases) {
      const na = normalize(alias);
      if (na.length >= 3 && !normalizedTermMap.has(na)) {
        normalizedTermMap.set(na, { id: entry.id, term: entry.term });
      }
    }
  }
}

// --- Load co-occurrence data ---
const coData: Record<string, string[]> = JSON.parse(
  readFileSync(
    resolve(__dirname, "../src/app/data/sources/cooccurrence.json"),
    "utf-8"
  )
);

// --- Check if two terms share a morphological root ---
// Catches: a-dvaita/dvaita, a-bhinna/bhinna, moksa/moksa-h, etc.
function sharesRoot(normA: string, normB: string): boolean {
  // One contains the other (derivations like kārya/akārya)
  if (normA.length >= 4 && normB.includes(normA)) return true;
  if (normB.length >= 4 && normA.includes(normB)) return true;

  // 'a-' prefix negation (very common in Sanskrit)
  if (normA.startsWith("a") && normA.slice(1) === normB) return true;
  if (normB.startsWith("a") && normB.slice(1) === normA) return true;

  // Differ only by a visarga/case ending (within 2 chars)
  const shorter = normA.length <= normB.length ? normA : normB;
  const longer = normA.length <= normB.length ? normB : normA;
  if (longer.startsWith(shorter) && longer.length - shorter.length <= 2) return true;

  return false;
}

// --- Discover related terms for each entry ---
type Enrichment = { id: string; term: string; relatedTerms: string[] };
const enrichments: Enrichment[] = [];

for (const entry of glossary) {
  // Skip entries that already have manually curated relatedTerms
  if (entry.relatedTerms && entry.relatedTerms.length > 0) continue;

  const entryNorm = normalize(entry.term);
  const seen = new Set<string>();
  seen.add(entryNorm);
  const discovered: string[] = [];

  // Layer 1: Scan definition + vedantaMeaning for glossary term mentions
  const textToScan = [entry.vedantaMeaning, entry.definition]
    .filter(Boolean)
    .join(" ");

  const words = textToScan
    .replace(/[^a-zA-ZāàīìūùṛṝṣśṇṅñṭḍṃḥĀÀĪÌŪÙṚṜṢŚṆṄÑṬḌṂḤ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  for (const word of words) {
    const n = normalize(word);
    if (n.length < 3 || seen.has(n)) continue;
    const match = normalizedTermMap.get(n);
    if (match && match.id !== entry.id) {
      discovered.push(match.term);
      seen.add(n);
    }
  }

  // Layer 2: Co-occurrence — only morphologically related terms
  const coTerms = coData[entry.id] ?? [];
  for (const coId of coTerms) {
    const coEntry = glossaryById.get(coId);
    if (!coEntry) continue;
    const n = normalize(coEntry.term);
    if (n.length < 4 || seen.has(n)) continue;
    if (sharesRoot(entryNorm, n)) {
      discovered.push(coEntry.term);
      seen.add(n);
    }
  }

  if (discovered.length > 0) {
    enrichments.push({
      id: entry.id,
      term: entry.term,
      relatedTerms: discovered,
    });
  }
}

console.log(`Found ${enrichments.length} entries to enrich`);

if (dryRun) {
  console.log("\nEnrichments:");
  enrichments.forEach((e) => {
    console.log(`  ${e.term} → ${e.relatedTerms.join(", ")}`);
  });
  console.log(
    `\n${enrichments.length} entries would be enriched. Run without --dry-run to apply.`
  );
  process.exit(0);
}

// --- Patch glossary.ts ---
const glossaryPath = resolve(__dirname, "../src/app/data/glossary.ts");
let source = readFileSync(glossaryPath, "utf-8");

let patchCount = 0;

for (const enrichment of enrichments) {
  const idPattern = `id: "${enrichment.id}"`;
  const idIndex = source.indexOf(idPattern);
  if (idIndex === -1) {
    console.warn(`Could not find entry: ${enrichment.id}`);
    continue;
  }

  // Check this entry doesn't already have relatedTerms in the source
  const nextEntryIndex = source.indexOf("\n  {", idIndex + 1);
  const entryBlock =
    nextEntryIndex !== -1
      ? source.slice(idIndex, nextEntryIndex)
      : source.slice(idIndex, idIndex + 500);

  if (entryBlock.includes("relatedTerms")) {
    continue;
  }

  // Find the closing brace of this entry
  const closingBraceIndex = source.indexOf("\n  },", idIndex);
  const closingBraceAlt = source.indexOf("\n  }\n", idIndex);
  const closingIndex =
    closingBraceIndex !== -1
      ? closingBraceAlt !== -1
        ? Math.min(closingBraceIndex, closingBraceAlt)
        : closingBraceIndex
      : closingBraceAlt;

  if (closingIndex === -1 || closingIndex < idIndex) {
    console.warn(`Could not find closing brace for: ${enrichment.id}`);
    continue;
  }

  const termsStr = enrichment.relatedTerms.map((t) => `"${t}"`).join(", ");
  const insertion = `\n    relatedTerms: [${termsStr}],`;

  source =
    source.slice(0, closingIndex) + insertion + source.slice(closingIndex);
  patchCount++;
}

writeFileSync(glossaryPath, source);
console.log(`Patched ${patchCount} entries in glossary.ts`);
