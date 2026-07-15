import { glossary, glossaryById, type GlossaryEntry } from "../data/glossary";
import cooccurrence from "../data/cooccurrence.json";

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

// Precompute normalized entry fields once — normalize() chains ~20 regex
// passes, far too costly to re-run across all entries on every keystroke.
const searchIndex = glossary.map((entry) => ({
  entry,
  term: normalize(entry.term),
  aliases: entry.aliases ? entry.aliases.map(normalize) : [],
  def: normalize(entry.definition),
  vedanta: entry.vedantaMeaning ? normalize(entry.vedantaMeaning) : "",
  tags: entry.tags ? entry.tags.map(normalize) : [],
}));

// First-writer-wins in glossary order (term before aliases) matches the
// first-match semantics of the linear scan this replaces.
const normalizedTermMap = new Map<string, GlossaryEntry>();
for (const { entry, term, aliases } of searchIndex) {
  if (!normalizedTermMap.has(term)) normalizedTermMap.set(term, entry);
  for (const alias of aliases) {
    if (!normalizedTermMap.has(alias)) normalizedTermMap.set(alias, entry);
  }
}

export function findByTerm(term: string): GlossaryEntry | undefined {
  return normalizedTermMap.get(normalize(term));
}

// Build a lowercase-term → entry lookup for definition text scanning.
// Uses toLowerCase (not normalize) so English words like "wet" don't
// collide with Sanskrit terms like "vet" via transliteration rules.
const lowerTermMap = new Map<string, GlossaryEntry>();
for (const entry of glossary) {
  const low = entry.term.toLowerCase();
  if (low.length >= 3 && !lowerTermMap.has(low)) lowerTermMap.set(low, entry);
  if (entry.aliases) {
    for (const alias of entry.aliases) {
      const la = alias.toLowerCase();
      if (la.length >= 3 && !lowerTermMap.has(la)) lowerTermMap.set(la, entry);
    }
  }
}

// Output is static per entry, so results are cached across renders.
const relatedTermsCache = new Map<string, string[]>();

/** Merge manually curated relatedTerms with terms found in definition/vedantaMeaning text */
export function getRelatedTerms(entry: GlossaryEntry): string[] {
  const cached = relatedTermsCache.get(entry.id);
  if (cached) return cached;

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
    const low = word.toLowerCase();
    if (low.length < 3) continue;
    const n = normalize(low);
    if (seen.has(n)) continue;
    const match = lowerTermMap.get(low);
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

  const result = [...manual, ...discovered];
  relatedTermsCache.set(entry.id, result);
  return result;
}

export function searchGlossary(query: string): GlossaryEntry[] {
  if (!query.trim()) return [];
  const q = normalize(query.trim());
  const words = q.split(/\s+/).filter(Boolean);

  const scored: { entry: GlossaryEntry; score: number }[] = [];

  for (const { entry, term, aliases, def, vedanta, tags } of searchIndex) {
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
