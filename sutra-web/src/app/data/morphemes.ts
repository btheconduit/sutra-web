export interface Morpheme {
  gloss: string;
}

// Common word-building pieces used in Sanskrit composition.
// Keyed by transliteration. Upasargas (verbal prefixes) + negation.
export const morphemes: Record<string, Morpheme> = {
  a: { gloss: "not" },
  an: { gloss: "not" },
  pra: { gloss: "forth, forward" },
  parā: { gloss: "back, away, opposite" },
  apa: { gloss: "away, off" },
  sam: { gloss: "together, fully" },
  anu: { gloss: "after, along, following" },
  ava: { gloss: "down, off" },
  nir: { gloss: "out, away, without" },
  nis: { gloss: "out, away, without" },
  dur: { gloss: "bad, difficult, ill" },
  dus: { gloss: "bad, difficult, ill" },
  vi: { gloss: "apart, distinct" },
  ā: { gloss: "towards, near" },
  ni: { gloss: "down, into" },
  adhi: { gloss: "above, upon, over" },
  api: { gloss: "also, even" },
  ati: { gloss: "beyond, across" },
  su: { gloss: "good, well" },
  ud: { gloss: "up, out" },
  abhi: { gloss: "towards, over" },
  prati: { gloss: "against, towards" },
  pari: { gloss: "around, about" },
  upa: { gloss: "near, towards" },
};
