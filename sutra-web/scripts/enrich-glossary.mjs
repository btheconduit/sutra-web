/**
 * Enriches glossary entries with:
 * 1. relatedTerms — other glossary terms mentioned in the definition
 * 2. root — extracted from definition text where etymology is mentioned
 *
 * Preserves any existing hand-curated values.
 * Run: node scripts/enrich-glossary.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const GLOSSARY_PATH = join(__dirname, "../src/app/data/glossary.ts");

// --- Parse the TS file to extract entries ---

const src = readFileSync(GLOSSARY_PATH, "utf-8");
const arrayStart = src.indexOf("= [") + 2;
const arrayEnd = src.lastIndexOf("];") + 1;
const entries = new Function(`return ${src.slice(arrayStart, arrayEnd)}`)();

console.log(`Loaded ${entries.length} entries`);

// --- Build lookup structures ---

function normalize(s) {
  return s
    .toLowerCase()
    .replace(/[āà]/g, "a")
    .replace(/[īì]/g, "i")
    .replace(/[ūù]/g, "u")
    .replace(/[ṛ]/g, "r")
    .replace(/[ṣś]/g, "s")
    .replace(/[ṇṅñ]/g, "n")
    .replace(/[ṭ]/g, "t")
    .replace(/[ḍ]/g, "d")
    .replace(/[ṃ]/g, "m")
    .replace(/[ḥ]/g, "h");
}

// Map from normalized term → original term
const termByNormalized = new Map();
const entryByNormalized = new Map();
const allNormalized = new Set();

for (const entry of entries) {
  const n = normalize(entry.term);
  termByNormalized.set(n, entry.term);
  entryByNormalized.set(n, entry);
  allNormalized.add(n);
}

// --- Root extraction ---

const rootPatterns = [
  // "from from root īkṣ" (double from typo in source)
  /from\s+from\s+root\s+([^\s;,.]+(?:\s*[-–—]\s*[^;,.]+)?)/i,
  // "from root √vid" or "from root vid"
  /from\s+root\s+([√]?[\w\u0100-\u1EFF]+(?:\s*[-–—]\s*[^;,.]+)?)/i,
  // "from √vid — to know"
  /(√[\w\u0100-\u1EFF]+(?:\s*[-–—]\s*[^;,.]+)?)/,
  // "lit. the egg of brahman"
  /[Ll]it\.\s+['"]?([^;,.'"]+)/,
  // "from adī to study" — verb root reference after "from"
  /;\s*from\s+([\w\u0100-\u1EFF]+\s+to\s+[\w\u0100-\u1EFF]+)/i,
  // "derived from sattvam"
  /derived\s+from\s+([\w\u0100-\u1EFF]+)/i,
];

function extractRoot(definition) {
  for (const pattern of rootPatterns) {
    const match = definition.match(pattern);
    if (match) {
      let root = match[1].trim();
      // Clean up trailing punctuation
      root = root.replace(/[.;,]+$/, "").trim();
      if (root.length >= 2) return root;
    }
  }
  return null;
}

// --- Find related terms ---

// Only terms with 4+ chars to reduce noise from short common words
const searchableTerms = [...allNormalized].filter((n) => n.length >= 4);
searchableTerms.sort((a, b) => b.length - a.length);

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Common English words that happen to normalize to Sanskrit terms — skip these
const NOISE_WORDS = new Set([
  "that", "this", "with", "from", "have", "what", "when", "were",
  "which", "their", "there", "been", "more", "most", "such", "same",
  "than", "them", "they", "will", "would", "also", "into", "like",
  "make", "made", "many", "much", "only", "over", "very", "each",
  "does", "done", "used", "form", "self", "mind", "body", "word",
  "part", "name", "kind", "real", "true", "good", "evil", "pure",
  "fire", "five", "four", "nine", "born", "free", "full", "half",
]);

function findRelatedTerms(entry) {
  const normalizedDef = normalize(entry.definition);
  const selfNorm = normalize(entry.term);
  const found = new Set();

  for (const normTerm of searchableTerms) {
    if (normTerm === selfNorm) continue;
    if (NOISE_WORDS.has(normTerm)) continue;

    // Skip if a longer already-found term contains this one
    let isSubstring = false;
    for (const existing of found) {
      if (existing.includes(normTerm)) {
        isSubstring = true;
        break;
      }
    }
    if (isSubstring) continue;

    // Word boundary match in definition
    const regex = new RegExp(`(?:^|[\\s;,.(])${escapeRegex(normTerm)}(?=[\\s;,.):]|$)`);
    if (regex.test(normalizedDef)) {
      found.add(normTerm);
    }
  }

  // Also check for shared prefix/root relationships (compound terms)
  // e.g. "adhyāsa" and "adhyāsika" should be related
  for (const normTerm of allNormalized) {
    if (normTerm === selfNorm) continue;
    if (normTerm.length < 4) continue;
    if (found.has(normTerm)) continue;

    // If one term is a clear prefix of the other (with at least 5 shared chars)
    const shorter = selfNorm.length <= normTerm.length ? selfNorm : normTerm;
    const longer = selfNorm.length <= normTerm.length ? normTerm : selfNorm;
    if (shorter.length >= 5 && longer.startsWith(shorter) && longer.length - shorter.length <= 4) {
      found.add(normTerm);
    }
  }

  const result = [...found]
    .map((n) => termByNormalized.get(n))
    .filter(Boolean)
    .sort()
    .slice(0, 8);

  return result.length > 0 ? result : null;
}

// --- Enrich ---

let rootsAdded = 0;
let relatedAdded = 0;
let relatedTotal = 0;

for (const entry of entries) {
  // Root: only add if not already present
  if (!entry.root) {
    const extracted = extractRoot(entry.definition);
    if (extracted) {
      entry.root = extracted;
      rootsAdded++;
    }
  }

  // Related terms: only add if not already present (preserve hand-curated)
  if (!entry.relatedTerms || entry.relatedTerms.length === 0) {
    const related = findRelatedTerms(entry);
    if (related) {
      entry.relatedTerms = related;
      relatedAdded++;
    }
  }
  if (entry.relatedTerms && entry.relatedTerms.length > 0) relatedTotal++;
}

console.log(`Roots extracted: ${rootsAdded}`);
console.log(`Entries with related terms: ${relatedTotal} (${relatedAdded} newly added)`);

// --- Write back ---

function escapeStr(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

let output = `export interface GlossaryEntry {
  id: string;
  term: string;
  devanagari?: string;
  transliteration: string;
  definition: string;
  root?: string;
  vedantaMeaning?: string;
  relatedTerms?: string[];
}

export const glossary: GlossaryEntry[] = [\n`;

for (const e of entries) {
  output += "  {\n";
  output += `    id: "${escapeStr(e.id)}",\n`;
  output += `    term: "${escapeStr(e.term)}",\n`;
  if (e.devanagari) {
    output += `    devanagari: "${escapeStr(e.devanagari)}",\n`;
  }
  output += `    transliteration: "${escapeStr(e.transliteration)}",\n`;
  output += `    definition:\n      "${escapeStr(e.definition)}",\n`;
  if (e.root) {
    output += `    root: "${escapeStr(e.root)}",\n`;
  }
  if (e.vedantaMeaning) {
    output += `    vedantaMeaning:\n      "${escapeStr(e.vedantaMeaning)}",\n`;
  }
  if (e.relatedTerms && e.relatedTerms.length > 0) {
    output += `    relatedTerms: [${e.relatedTerms.map((t) => `"${escapeStr(t)}"`).join(", ")}],\n`;
  }
  output += "  },\n";
}

output += "];\n";

writeFileSync(GLOSSARY_PATH, output, "utf-8");
console.log(`Written ${entries.length} entries to glossary.ts`);
