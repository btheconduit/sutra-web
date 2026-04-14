#!/usr/bin/env node
/**
 * Parse Monier-Williams Sanskrit-English Dictionary XML (mw-v1.xml)
 * and match entries against our glossary terms.
 *
 * Usage: node scripts/parse-mw.mjs
 *
 * Outputs: sutra-web/src/app/data/mw-enrichment.json
 */

import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MW_XML = join(__dirname, "../.context/attachments/mw-v2.xml");
const GLOSSARY = join(__dirname, "../sutra-web/src/app/data/glossary.ts");
const OUTPUT = join(__dirname, "../sutra-web/src/app/data/mw-enrichment.json");

// --- SLP1 to IAST transliteration ---
// SLP1 is the encoding used in the Cologne MW digitization.
const SLP1_TO_IAST = {
  // Vowels
  A: "ā", I: "ī", U: "ū",
  f: "ṛ", F: "ṝ", x: "ḷ", X: "ḹ",
  e: "e", E: "ai", o: "o", O: "au",
  // Consonants
  K: "kh", g: "g", G: "gh", N: "ṅ",
  C: "ch", c: "c",
  j: "j", J: "jh", Y: "ñ",
  w: "ṭ", W: "ṭh", q: "ḍ", Q: "ḍh", R: "ṇ",
  t: "t", T: "th", d: "d", D: "dh", n: "n",
  p: "p", P: "ph", b: "b", B: "bh", m: "m",
  y: "y", r: "r", l: "l", v: "v",
  S: "ś", z: "ṣ", s: "s", h: "h",
  M: "ṃ", H: "ḥ",
  // Special
  "~": "̃", // nasalization
  "/": "", // accent mark, skip
};

function slp1ToIast(slp1) {
  let result = "";
  for (let i = 0; i < slp1.length; i++) {
    const ch = slp1[i];
    // Two-char lookups not needed — SLP1 is single-char per phoneme
    if (SLP1_TO_IAST[ch] !== undefined) {
      result += SLP1_TO_IAST[ch];
    } else if (ch === "a" || ch === "i" || ch === "u" || ch === "k") {
      result += ch;
    } else {
      result += ch; // pass through
    }
  }
  return result;
}

// --- Strip XML tags from body text, preserving readable content ---
function stripXml(text) {
  return (
    text
      // Replace <s>X</s> (Sanskrit in SLP1) with IAST
      .replace(/<s>(.*?)<\/s>/g, (_, slp1) => slp1ToIast(slp1.replace(/<[^>]+>/g, "")))
      // Replace <s1 ...>X</s1> with X (proper names in IAST already)
      .replace(/<s1[^>]*>(.*?)<\/s1>/g, "$1")
      // Replace <ab>X</ab> with X
      .replace(/<ab[^>]*>(.*?)<\/ab>/g, "$1")
      // Replace <ls>X</ls> with [X] (source refs)
      .replace(/<ls[^>]*>(.*?)<\/ls>/g, "[$1]")
      // Replace <lex>X</lex> with (X)
      .replace(/<lex[^>]*>(.*?)<\/lex>/g, "($1)")
      // Replace <bot>X</bot> with X
      .replace(/<bot>(.*?)<\/bot>/g, "$1")
      // Replace <etym>X</etym> with X
      .replace(/<etym>(.*?)<\/etym>/g, "$1")
      // Replace <ns>X</ns> with X
      .replace(/<ns>(.*?)<\/ns>/g, "$1")
      // Replace <hom>X</hom> with X
      .replace(/<hom>(.*?)<\/hom>/g, "$1")
      // Replace <lang ...>X</lang> with X
      .replace(/<lang[^>]*>(.*?)<\/lang>/g, "$1")
      // Strip remaining self-closing tags
      .replace(/<[^>]+\/>/g, "")
      // Strip remaining tags
      .replace(/<[^>]+>/g, "")
      // Clean up entities
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      // Clean up whitespace
      .replace(/\s+/g, " ")
      .replace(/¦/g, "")
      .trim()
  );
}

// --- Extract source references from body ---
function extractSources(text) {
  const refs = [];
  const re = /<ls[^>]*>(.*?)<\/ls>/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const ref = m[1].replace(/<[^>]+>/g, "").trim();
    if (ref) refs.push(ref);
  }
  return refs;
}

// --- Extract lexical/grammar info ---
function extractLex(text) {
  const m = text.match(/<lex>([^<]+)<\/lex>/);
  return m ? m[1].trim() : null;
}

// --- Parse all MW entries ---
function parseMw(xml) {
  const entries = new Map(); // key1 -> { iast, lex, senses[], etymology[] }

  // Match each H* element
  const re = /<(H[1-4][A-E]?)><h><key1>([^<]+)<\/key1><key2>([^<]+)<\/key2>(?:<hom>([^<]*)<\/hom>)?<\/h><body>(.*?)<\/body><tail>(.*?)<\/tail><\/\1>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const tag = m[1];
    const key1 = m[2];
    const key2 = m[3];
    const body = m[5];
    const tail = m[6];

    const iast = slp1ToIast(key1);
    const isEtymology = tag.endsWith("E");
    const isSubentry = /[ABC]$/.test(tag);
    const bodyText = stripXml(body);
    const sources = extractSources(body);
    const lex = extractLex(body);

    if (!entries.has(key1)) {
      entries.set(key1, {
        key1,
        iast,
        lex: null,
        senses: [],
        etymology: [],
      });
    }

    const entry = entries.get(key1);

    if (lex && !entry.lex) {
      entry.lex = lex;
    }

    if (isEtymology) {
      if (bodyText) entry.etymology.push(bodyText);
    } else {
      // Skip "See below" / "See s.v." cross-references
      if (/^See (below|s\.v\.|above)/.test(bodyText.replace(/^\([^)]+\)\s*/, ""))) continue;
      if (bodyText && bodyText.length > 1) {
        entry.senses.push({
          text: bodyText,
          sources,
        });
      }
    }
  }

  return entries;
}

// --- Extract glossary term IDs ---
function extractGlossaryTerms(src) {
  const terms = [];
  const re = /{\s*id:\s*"([^"]+)",\s*term:\s*"([^"]+)",\s*(?:devanagari:\s*"[^"]*",\s*)?transliteration:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    terms.push({ id: m[1], term: m[2], transliteration: m[3] });
  }
  return terms;
}

// --- Normalize for matching ---
function normalize(s) {
  return s
    .toLowerCase()
    .replace(/[āàáâ]/g, "a")
    .replace(/[īìíî]/g, "i")
    .replace(/[ūùúû]/g, "u")
    .replace(/[ṛṝ]/g, "r")
    .replace(/[ḷḹ]/g, "l")
    .replace(/[ṅṇñ]/g, "n")
    .replace(/[ṭ]/g, "t")
    .replace(/[ḍ]/g, "d")
    .replace(/[śṣ]/g, "s")
    .replace(/[ṃṁ]/g, "m")
    .replace(/[ḥ]/g, "h")
    .replace(/[^a-z]/g, "");
}

// --- Main ---
console.log("Reading MW XML...");
const xml = readFileSync(MW_XML, "utf8");

console.log("Parsing entries...");
const mwEntries = parseMw(xml);
console.log(`Parsed ${mwEntries.size} MW headwords`);

console.log("Reading glossary...");
const glossarySrc = readFileSync(GLOSSARY, "utf8");
const glossaryTerms = extractGlossaryTerms(glossarySrc);
console.log(`Found ${glossaryTerms.length} glossary terms`);

// Build MW lookups: exact IAST and normalized
const mwByIast = new Map();
const mwByNormalized = new Map();
for (const [key1, entry] of mwEntries) {
  const iast = entry.iast.toLowerCase();
  const norm = normalize(iast);
  if (!mwByIast.has(iast)) mwByIast.set(iast, []);
  mwByIast.get(iast).push(entry);
  if (!mwByNormalized.has(norm)) mwByNormalized.set(norm, []);
  mwByNormalized.get(norm).push(entry);
}

// Match glossary terms to MW entries
const enrichment = {};
let matched = 0;
let unmatched = 0;

for (const term of glossaryTerms) {
  // Skip suffix entries (e.g. "-maya")
  if (term.term.startsWith("-")) { unmatched++; continue; }
  const iast = term.term.toLowerCase();
  const norm = normalize(term.term);

  // 1. Try exact IAST match first (preserves vowel length)
  let candidates = mwByIast.get(iast);
  if (!candidates) candidates = mwByIast.get(iast.replace(/[ḥṃ]$/, ""));
  if (!candidates) candidates = mwByIast.get(iast.replace(/aḥ$/, "a"));
  if (!candidates) candidates = mwByIast.get(iast.replace(/am$/, "a"));

  // 2. Fall back to normalized matching (strips diacritics)
  if (!candidates) candidates = mwByNormalized.get(norm);
  if (!candidates) candidates = mwByNormalized.get(norm.replace(/[hm]$/, ""));
  if (!candidates) candidates = mwByNormalized.get(norm.replace(/ah$/, "a"));
  if (!candidates) candidates = mwByNormalized.get(norm.replace(/am$/, "a"));
  if (!candidates) candidates = mwByNormalized.get(norm.replace(/ih$/, "i"));
  if (!candidates) candidates = mwByNormalized.get(norm.replace(/tvam$/, "tva"));
  if (!candidates) candidates = mwByNormalized.get(norm.replace(/nam$/, "na"));
  if (!candidates) candidates = mwByNormalized.get(norm.replace(/i$/, "in"));
  // Also gather "stem + n/an" variants (atma->atman, karma->karman)
  const withN = mwByNormalized.get(norm + "n");
  const withAn = mwByNormalized.get(norm + "an");
  if (withN) candidates = candidates ? [...candidates, ...withN] : withN;
  if (withAn) candidates = candidates ? [...candidates, ...withAn] : withAn;

  if (candidates && candidates.length > 0) {
    // Pick the candidate with the most senses (richest entry)
    const best = candidates.reduce((a, b) =>
      b.senses.length > a.senses.length ? b : a
    );

    if (best.senses.length > 0) {
      enrichment[term.id] = {
        lex: best.lex,
        senses: best.senses.map((s, i) => ({
          number: i + 1,
          text: s.text,
          sources: s.sources.length > 0 ? s.sources : undefined,
        })),
        etymology:
          best.etymology.length > 0 ? best.etymology : undefined,
      };
      matched++;
    } else {
      unmatched++;
    }
  } else {
    unmatched++;
  }
}

console.log(`\nResults:`);
console.log(`  Matched: ${matched} / ${glossaryTerms.length}`);
console.log(`  Unmatched: ${unmatched}`);

// Show some examples
const examples = ["atma", "maya", "adhyasa", "brahman", "avidya"];
for (const id of examples) {
  if (enrichment[id]) {
    console.log(`\n--- ${id} ---`);
    console.log(`  Lex: ${enrichment[id].lex}`);
    console.log(`  Senses: ${enrichment[id].senses.length}`);
    enrichment[id].senses.slice(0, 4).forEach((s) => {
      console.log(`    ${s.number}. ${s.text.slice(0, 100)}`);
    });
    if (enrichment[id].etymology) {
      console.log(`  Etymology: ${enrichment[id].etymology[0]?.slice(0, 100)}`);
    }
  }
}

// --- Abbreviation expansions ---
const ABBR_MAP = {
  "ifc.": "in compound",
  "ibc.": "at start of compound",
  "abl.": "ablative",
  "acc.": "accusative",
  "gen.": "genitive",
  "loc.": "locative",
  "instr.": "instrumental",
  "dat.": "dative",
  "nom.": "nominative",
  "voc.": "vocative",
  "sg.": "singular",
  "pl.": "plural",
  "du.": "dual",
  "ind.": "indeclinable",
  "mfn.": "adjective",
  "mf.": "adjective",
  "fr.": "from",
  "cf.": "compare",
  "q.v.": "",
  "s.v.": "",
  "viz.": "namely",
  "esp.": "especially",
  "opp.": "opposed",
  "prob.": "probably",
  "lit.": "literally",
  "comp.": "compound",
  "phil.": "philosophy",
  "gram.": "grammar",
  "astron.": "astronomy",
  "arithm.": "arithmetic",
  "rhet.": "rhetoric",
  "med.": "medicine",
  "ib.": "",
  "w.r.": "wrong reading",
};

function expandAbbreviations(text) {
  let t = text;
  for (const [abbr, expansion] of Object.entries(ABBR_MAP)) {
    const escaped = abbr.replace(/\./g, "\\.");
    if (expansion) {
      t = t.replace(new RegExp(`\\b${escaped}`, "g"), expansion);
    } else {
      // Remove empty expansions and surrounding parens/punctuation
      t = t.replace(new RegExp(`\\s*${escaped}\\s*`, "g"), " ");
    }
  }
  return t;
}

// --- Junk sense filters ---
function isJunkSense(text) {
  return (
    /^N\. of\b/.test(text) ||                // "N. of a deity/person/place"
    /^See\b/.test(text) ||                    // "See below", "See s.v."
    /^= /.test(text) ||                       // "= another-word"
    /^w\.r\.\s+for/.test(text) ||             // "w.r. for X"
    /^v\.l\./.test(text) ||                   // variant reading
    /&c\.\s*See\s/.test(text) ||              // "&c. See col. 1"
    /^\S+\s+See\s/.test(text) ||             // "word See other-word."
    /\bSee\s+(under|above|below|s\.)/.test(text) || // "See under X"
    text.length < 5                           // tiny fragments
  );
}

// --- Gender expansion ---
const GENDER_MAP = {
  "m.": "masculine",
  "f.": "feminine",
  "n.": "neuter",
  "mf.": "masculine & feminine",
  "nf.": "feminine & neuter",
  "mfn.": "adjective (all genders)",
  "m. f.": "masculine & feminine",
  "m. n.": "masculine & neuter",
  "f. n.": "feminine & neuter",
  "ind.": "indeclinable",
};

function expandGender(lex) {
  if (!lex) return null;
  return GENDER_MAP[lex.trim()] || lex;
}

// --- Trim for production: cap senses, strip source brackets, clean text ---
const trimmed = {};
for (const [id, data] of Object.entries(enrichment)) {
  const senses = data.senses
    .map((s) => {
      let t = s.text;
      // Strip source references [X]
      t = t.replace(/\s*\[[^\]]+\]/g, "");
      // Strip leading headword + lex repetition like "māyā (f.) "
      t = t.replace(/^[a-zA-Zā-ūṛṝḷṅṇñṭḍśṣṃḥ\-]+\s*\([^)]*\)\s*/, "");
      // Strip leading bare lex like "(m.) "
      t = t.replace(/^\([mfn][\w.]*\)\s*/, "");
      // Clean up trailing &c. artifacts
      t = t.replace(/\s*&c\.?\s*&c\.?/g, " etc.");
      t = t.replace(/\s*&c\.?\s*$/g, "");
      // Expand abbreviations
      t = expandAbbreviations(t);
      // Clean up punctuation artifacts from stripped references
      t = t.replace(/,\s*,/g, ",");
      t = t.replace(/;\s*;/g, ";");
      t = t.replace(/[,;]\s*\)/g, ")");
      t = t.replace(/\(\s*[,;]\s*/g, "(");
      t = t.replace(/\(\s*\)/g, "");
      t = t.replace(/[,;]+\s*$/g, "");
      t = t.replace(/^\s*[,;]\s*/, "");
      // Strip trailing "See X" cross-references from otherwise good senses
      t = t.replace(/\s*\(?See\s+[^)]*\)?\s*$/i, "");
      t = t.replace(/\s*See\s+\S+\s*$/i, "");
      // Strip degree/abbreviation marks
      t = t.replace(/°/g, "");
      // Clean up stray semicolons
      t = t.replace(/;\s*;/g, ";");
      t = t.replace(/\s*;\s*&c\b/g, " etc.");
      t = t.replace(/,;\s*/g, ", ");
      t = t.replace(/;\s*$/g, "");
      t = t.replace(/,\s*$/g, "");
      // Clean up double/triple spaces
      t = t.replace(/\s+/g, " ").trim();
      return t;
    })
    .filter((t) => !isJunkSense(t))
    .slice(0, 8);

  if (senses.length === 0) continue;

  trimmed[id] = { senses };
  if (data.lex) trimmed[id].lex = expandGender(data.lex);
  if (data.etymology && data.etymology.length > 0) {
    trimmed[id].etymology = expandAbbreviations(
      data.etymology[0]
        .replace(/\s*\[[^\]]+\]/g, "")
        .replace(/\s+/g, " ")
        .trim()
    );
  }
}

console.log(`\nTrimmed entries: ${Object.keys(trimmed).length}`);
console.log(`JSON size: ${(JSON.stringify(trimmed).length / 1024).toFixed(0)} KB`);

writeFileSync(OUTPUT, JSON.stringify(trimmed, null, 2));
console.log(`Written to ${OUTPUT}`);
