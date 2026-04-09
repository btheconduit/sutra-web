/**
 * Converts IAST (International Alphabet of Sanskrit Transliteration) to Devanagari.
 * Handles vowels, consonants, conjuncts, anusvara, visarga, and virama.
 */

const VOWELS: Record<string, string> = {
  ai: "\u0910",
  au: "\u0914",
  "\u0101": "\u0906", // ā
  "\u012B": "\u0908", // ī
  "\u016B": "\u090A", // ū
  "\u1E5B": "\u090B", // ṛ
  "\u1E5D": "\u0960", // ṝ
  a: "\u0905",
  i: "\u0907",
  u: "\u0909",
  e: "\u090F",
  o: "\u0913",
};

const VOWEL_MARKS: Record<string, string> = {
  ai: "\u0948",
  au: "\u094C",
  "\u0101": "\u093E", // ā
  "\u012B": "\u0940", // ī
  "\u016B": "\u0942", // ū
  "\u1E5B": "\u0943", // ṛ
  "\u1E5D": "\u0944", // ṝ
  a: "",               // inherent vowel — no mark
  i: "\u093F",
  u: "\u0941",
  e: "\u0947",
  o: "\u094B",
};

const CONSONANTS: Record<string, string> = {
  kh: "\u0916",
  gh: "\u0918",
  ch: "\u091B",
  jh: "\u091D",
  "\u1E6Dh": "\u0920", // ṭh
  "\u1E0Dh": "\u0922", // ḍh
  th: "\u0925",
  dh: "\u0927",
  ph: "\u092B",
  bh: "\u092D",
  "\u015B": "\u0936",  // ś
  "\u1E63": "\u0937",  // ṣ
  "\u1E45": "\u0919",  // ṅ
  "\u00F1": "\u091E",  // ñ
  "\u1E6D": "\u091F",  // ṭ
  "\u1E0D": "\u0921",  // ḍ
  "\u1E47": "\u0923",  // ṇ
  k: "\u0915",
  g: "\u0917",
  c: "\u091A",
  j: "\u091C",
  t: "\u0924",
  d: "\u0926",
  n: "\u0928",
  p: "\u092A",
  b: "\u092C",
  m: "\u092E",
  y: "\u092F",
  r: "\u0930",
  l: "\u0932",
  v: "\u0935",
  s: "\u0938",
  h: "\u0939",
};

const VIRAMA = "\u094D";

// Sorted by length descending so longer sequences match first
const CONSONANT_KEYS = Object.keys(CONSONANTS).sort((a, b) => b.length - a.length);
const VOWEL_KEYS = Object.keys(VOWELS).sort((a, b) => b.length - a.length);

function isVowelStart(text: string): string | null {
  for (const key of VOWEL_KEYS) {
    if (text.startsWith(key)) return key;
  }
  return null;
}

function isConsonantStart(text: string): string | null {
  for (const key of CONSONANT_KEYS) {
    if (text.startsWith(key)) return key;
  }
  return null;
}

export function toDevanagari(iast: string): string {
  let result = "";
  let i = 0;
  const input = iast.toLowerCase();

  while (i < input.length) {
    const ch = input[i];

    // Anusvara
    if (ch === "\u1E43") { // ṃ
      result += "\u0902";
      i++;
      continue;
    }

    // Visarga
    if (ch === "\u1E25") { // ḥ
      result += "\u0903";
      i++;
      continue;
    }

    // Avagraha
    if (ch === "'") {
      result += "\u093D";
      i++;
      continue;
    }

    // Try consonant
    const cons = isConsonantStart(input.slice(i));
    if (cons) {
      result += CONSONANTS[cons];
      i += cons.length;

      // Check for following vowel
      const vowel = isVowelStart(input.slice(i));
      if (vowel) {
        result += VOWEL_MARKS[vowel];
        i += vowel.length;
      } else {
        // Check if next char is a consonant or end — add virama
        const nextCons = isConsonantStart(input.slice(i));
        const nextIsSpecial = i < input.length && (input[i] === "\u1E43" || input[i] === "\u1E25");
        if (i >= input.length || (!nextCons && !nextIsSpecial && !isVowelStart(input.slice(i)))) {
          // End of word or non-Sanskrit char follows — add virama
          result += VIRAMA;
        } else if (nextCons) {
          // Consonant cluster — add virama
          result += VIRAMA;
        }
      }
      continue;
    }

    // Try vowel (word-initial or after non-consonant)
    const vowel = isVowelStart(input.slice(i));
    if (vowel) {
      result += VOWELS[vowel];
      i += vowel.length;
      continue;
    }

    // Space, punctuation, or unknown — pass through
    result += input[i];
    i++;
  }

  return result;
}
