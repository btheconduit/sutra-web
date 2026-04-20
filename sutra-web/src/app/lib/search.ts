import { glossary, glossaryById, type GlossaryEntry } from "../data/glossary";
import cooccurrence from "../data/sources/cooccurrence.json";

export function normalize(s: string): string {
  return (
    s
      .toLowerCase()
      // Strip IAST diacritics
      .replace(/[āà]/g, "a")
      .replace(/[īì]/g, "i")
      .replace(/[ūù]/g, "u")
      .replace(/[ṛṝ]/g, "r")
      .replace(/[ṣś]/g, "s")
      .replace(/[ṇṅñ]/g, "n")
      .replace(/[ṭ]/g, "t")
      .replace(/[ḍ]/g, "d")
      .replace(/[ṃ]/g, "m")
      .replace(/[ḥ]/g, "h")
      // Collapse common English transliteration variants
      .replace(/sh/g, "s")
      .replace(/ch/g, "c")
      .replace(/aa/g, "a")
      .replace(/ee/g, "i")
      .replace(/oo/g, "u")
      .replace(/w/g, "v")
      .replace(/ri/g, "r")
      .replace(/gy/g, "jn")
      .replace(/gn/g, "jn")
  );
}

export function findByTerm(term: string): GlossaryEntry | undefined {
  const n = normalize(term);
  return glossary.find(
    (e) =>
      normalize(e.term) === n ||
      (e.aliases?.some((a) => normalize(a) === n) ?? false),
  );
}

// Build a normalized-term → entry lookup for fast matching
const normalizedTermMap = new Map<string, GlossaryEntry>();
for (const entry of glossary) {
  const n = normalize(entry.term);
  if (n.length >= 3 && !normalizedTermMap.has(n)) normalizedTermMap.set(n, entry);
  if (entry.aliases) {
    for (const alias of entry.aliases) {
      const na = normalize(alias);
      if (na.length >= 3 && !normalizedTermMap.has(na)) normalizedTermMap.set(na, entry);
    }
  }
}

/** Merge manually curated relatedTerms with terms found in definition/vedantaMeaning text */
export function getRelatedTerms(entry: GlossaryEntry): string[] {
  const manual = entry.relatedTerms ?? [];
  const seen = new Set(manual.map(normalize));
  seen.add(normalize(entry.term));

  const textToScan = [entry.vedantaMeaning, entry.definition]
    .filter(Boolean)
    .join(" ");

  const words = textToScan
    .replace(/[—–\-().,;:!?'"]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const discovered: string[] = [];

  for (const word of words) {
    const n = normalize(word);
    if (n.length < 3 || seen.has(n)) continue;
    const match = normalizedTermMap.get(n);
    if (match && match.id !== entry.id) {
      discovered.push(match.term);
      seen.add(n);
    }
  }

  // Third tier: co-occurrence from source texts
  const coTerms = (cooccurrence as Record<string, string[]>)[entry.id] ?? [];
  for (const coId of coTerms) {
    const coEntry = glossaryById.get(coId);
    if (!coEntry) continue;
    const n = normalize(coEntry.term);
    if (seen.has(n)) continue;
    discovered.push(coEntry.term);
    seen.add(n);
  }

  return [...manual, ...discovered];
}

export function searchGlossary(query: string): GlossaryEntry[] {
  if (!query.trim()) return [];
  const q = normalize(query.trim());
  const words = q.split(/\s+/).filter(Boolean);

  const scored: { entry: GlossaryEntry; score: number }[] = [];

  for (const entry of glossary) {
    const term = normalize(entry.term);
    const aliases = entry.aliases ? entry.aliases.map(normalize) : [];
    const def = normalize(entry.definition);
    const vedanta = entry.vedantaMeaning ? normalize(entry.vedantaMeaning) : "";
    const tags = entry.tags ? entry.tags.map(normalize) : [];

    let score = 0;

    // Term matching (highest priority)
    if (term === q) {
      score = 100;
    } else if (term.startsWith(q)) {
      score = 80;
    } else if (term.includes(q)) {
      score = 60;
    }

    // Alias matching (just below term matching)
    if (score === 0 && aliases.length > 0) {
      for (const alias of aliases) {
        if (alias === q) {
          score = 95;
          break;
        } else if (alias.startsWith(q)) {
          score = Math.max(score, 75);
        } else if (alias.includes(q)) {
          score = Math.max(score, 55);
        }
      }
    }

    // Tag matching — exact word match against curated keywords
    if (score === 0 && tags.length > 0) {
      for (const word of words) {
        if (tags.some((t) => t === word || t.includes(word))) {
          score = Math.max(score, 40);
        }
      }
    }

    // Definition matching — search words in definition text
    if (score === 0) {
      const allWords = words.every((w) => def.includes(w));
      const someWords = words.some((w) => def.includes(w));
      if (allWords && words.length > 0) {
        score = 30;
      } else if (someWords) {
        score = 20;
      }
    }

    // Vedanta meaning matching
    if (score === 0 && vedanta) {
      const allWords = words.every((w) => vedanta.includes(w));
      const someWords = words.some((w) => vedanta.includes(w));
      if (allWords && words.length > 0) {
        score = 15;
      } else if (someWords) {
        score = 10;
      }
    }

    if (score > 0) {
      scored.push({ entry, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.entry);
}
