/**
 * Build a co-occurrence map from source data.
 * For each glossary entry, find other entries that appear in the same
 * verses/passages, ranked by how often they co-occur.
 *
 * Usage: npx tsx scripts/build-cooccurrence.ts
 *
 * Output: src/app/data/sources/cooccurrence.json
 */

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const generatedDir = resolve(
  __dirname,
  "../src/app/data/sources/generated"
);
const outPath = resolve(
  __dirname,
  "../src/app/data/sources/cooccurrence.json"
);

type SourceRef = { text: string; ref: string };
type SourceData = Record<string, SourceRef[]>;

// Load all source files
const sourceFiles = readdirSync(generatedDir).filter((f) => f.endsWith(".json"));
console.log(`Loading ${sourceFiles.length} source files...`);

// Build a reverse index: ref string → set of entry IDs that appear in it
const refToEntries = new Map<string, Set<string>>();

for (const file of sourceFiles) {
  const data: SourceData = JSON.parse(
    readFileSync(resolve(generatedDir, file), "utf-8")
  );
  for (const [entryId, refs] of Object.entries(data)) {
    for (const r of refs) {
      if (!refToEntries.has(r.ref)) refToEntries.set(r.ref, new Set());
      refToEntries.get(r.ref)!.add(entryId);
    }
  }
}

console.log(`${refToEntries.size} unique verse/passage references`);

// Build co-occurrence counts: for each pair of entries in the same ref, increment
const cooccurrence = new Map<string, Map<string, number>>();

for (const entries of refToEntries.values()) {
  const ids = Array.from(entries);
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const a = ids[i], b = ids[j];

      if (!cooccurrence.has(a)) cooccurrence.set(a, new Map());
      if (!cooccurrence.has(b)) cooccurrence.set(b, new Map());

      cooccurrence.get(a)!.set(b, (cooccurrence.get(a)!.get(b) ?? 0) + 1);
      cooccurrence.get(b)!.set(a, (cooccurrence.get(b)!.get(a) ?? 0) + 1);
    }
  }
}

// For each entry, take the top N co-occurring terms (by count), min 2 co-occurrences
const MAX_RELATED = 8;
const MIN_COUNT = 3;

const result: Record<string, string[]> = {};

for (const [entryId, neighbors] of cooccurrence.entries()) {
  const sorted = Array.from(neighbors.entries())
    .filter(([, count]) => count >= MIN_COUNT)
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_RELATED)
    .map(([id]) => id);

  if (sorted.length > 0) {
    result[entryId] = sorted;
  }
}

writeFileSync(outPath, JSON.stringify(result, null, 2));

const entryCount = Object.keys(result).length;
const totalLinks = Object.values(result).reduce((s, a) => s + a.length, 0);
console.log(
  `Done: ${entryCount} entries with co-occurrence links (${totalLinks} total links) → ${outPath}`
);
