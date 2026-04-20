/**
 * Process a raw Sanskrit/English text file and generate a JSON mapping of
 * glossary term IDs → source references.
 *
 * Usage:
 *   npx tsx scripts/process-source.ts <raw-file> <source-name> [options]
 *
 * Options:
 *   --ref-prefix "Display Name"   Citation prefix (default: source-name)
 *   --format itrans|prose          Text format (default: auto-detect)
 *   --skip-lines N                 Skip first N lines (headers, TOC, etc.)
 *
 * Examples:
 *   npx tsx scripts/process-source.ts \
 *     src/app/data/sources/raw/vivekachudamani.txt vivekachudamani \
 *     --ref-prefix "Vivekacūḍāmaṇi" --format itrans
 *
 *   npx tsx scripts/process-source.ts \
 *     src/app/data/sources/raw/brahma-sutra-bhashya.txt brahma-sutra-bhashya \
 *     --ref-prefix "Brahma-Sūtra-Bhāṣya" --format prose --skip-lines 800
 *
 * Output: src/app/data/sources/generated/<source-name>.json
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { glossary } from "../src/app/data/glossary";
import { normalize } from "../src/app/lib/search";

// --- Parse args ---
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error(
    "Usage: npx tsx scripts/process-source.ts <raw-file> <source-name> [--ref-prefix <prefix>] [--format itrans|prose] [--skip-lines N]"
  );
  process.exit(1);
}

const rawFile = resolve(args[0]);
const sourceName = args[1];

function getArg(flag: string): string | undefined {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : undefined;
}

const refPrefix = getArg("--ref-prefix") ?? sourceName;
const skipLines = parseInt(getArg("--skip-lines") ?? "0", 10);
let format = getArg("--format") as "itrans" | "prose" | undefined;

// --- Normalize ITRANS to match our glossary's normalize() output ---
function normalizeItrans(s: string): string {
  return s
    .toLowerCase()
    .replace(/\.h/g, "")
    .replace(/\.n/g, "n")
    .replace(/~n/g, "n")
    .replace(/sh/g, "s")
    .replace(/ch/g, "c")
    .replace(/aa/g, "a")
    .replace(/ee/g, "i")
    .replace(/oo/g, "u")
    .replace(/ii/g, "i")
    .replace(/uu/g, "u")
    .replace(/r\^i/g, "r")
    .replace(/w/g, "v")
    .replace(/gy/g, "jn")
    .replace(/gn/g, "jn")
    .replace(/[.^]/g, "");
}

// --- Build sorted term list for substring matching (longest first) ---
const termList: { normalized: string; id: string; term: string }[] = [];
const seenIds = new Set<string>();
for (const entry of glossary) {
  const n = normalize(entry.term);
  if (n.length >= 4 && !seenIds.has(entry.id)) {
    seenIds.add(entry.id);
    termList.push({ normalized: n, id: entry.id, term: entry.term });
  }
}
termList.sort((a, b) => b.normalized.length - a.normalized.length);

// --- Read raw text ---
const raw = readFileSync(rawFile, "utf-8");
const allLines = raw.split("\n");
const lines = allLines.slice(skipLines);

// --- Auto-detect format ---
if (!format) {
  const sample = lines.slice(0, 200).join("\n");
  const hasVerseMarkers = /\.\.\s*\d+\s*\.\./.test(sample);
  format = hasVerseMarkers ? "itrans" : "prose";
  console.log(`Auto-detected format: ${format}`);
}

// --- Parse into chunks ---
type Chunk = { ref: string; text: string };
const chunks: Chunk[] = [];

if (format === "itrans") {
  // ITRANS: split on verse markers (.. N ..)
  let currentLines: string[] = [];
  const verseEndPattern = /\.\.\s*(\d+)\s*\.\./;

  for (const line of lines) {
    if (line.startsWith("%") || line.startsWith("\\") || line.startsWith("#")) continue;
    const cleanLine = line.replace(/##.*$/g, "").trim();
    if (!cleanLine) continue;

    currentLines.push(cleanLine);
    const match = cleanLine.match(verseEndPattern);
    if (match) {
      chunks.push({
        ref: `${refPrefix} ${match[1]}`,
        text: currentLines.join(" "),
      });
      currentLines = [];
    }
  }
} else {
  // Prose: split into paragraphs, track section/sutra references
  let currentSection = "";
  let paragraph: string[] = [];
  let chunkIndex = 0;

  // Patterns for section markers in different texts
  const sectionPatterns = [
    /^(?:I{1,3}|IV|V|VI{0,3})\.\s*(?:i{1,4}|iv|v|vi{0,3})\.\s*\d+/, // B.S. style: I. i. 1
    /^\d+\.\s+/,                                                        // Numbered sutras: 1.
    /^(?:Section|Chapter|Topic|Adhyaya|Pada)\s/i,                       // Section headers
    /^Sutra\s+\d+/i,                                                    // Sutra N
  ];

  function flushParagraph() {
    if (paragraph.length === 0) return;
    const text = paragraph.join(" ").replace(/\s+/g, " ").trim();
    if (text.length < 30) { paragraph = []; return; } // skip tiny chunks
    chunkIndex++;
    const ref = currentSection
      ? `${refPrefix} ${currentSection}`
      : `${refPrefix} §${chunkIndex}`;
    chunks.push({ ref, text });
    paragraph = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();

    // Check for section markers
    for (const pattern of sectionPatterns) {
      const match = trimmed.match(pattern);
      if (match) {
        flushParagraph();
        currentSection = match[0].replace(/\s+/g, " ").trim();
        break;
      }
    }

    // Also detect inline B.S. references like "I. i. 1 ]"
    const bsMatch = trimmed.match(
      /^(I{1,3}|IV|V|VI{0,3})\.\s*(i{1,4}|iv|v|vi{0,3})\.\s*(\d+)\s*\]/
    );
    if (bsMatch) {
      flushParagraph();
      currentSection = `${bsMatch[1]}.${bsMatch[2]}.${bsMatch[3]}`;
    }

    // Blank line = paragraph break
    if (!trimmed) {
      flushParagraph();
      continue;
    }

    paragraph.push(trimmed);
  }
  flushParagraph();
}

console.log(`Parsed ${chunks.length} chunks from ${rawFile}`);

// --- Normalize text for matching ---
function normalizeChunkText(text: string, fmt: string): string {
  if (fmt === "itrans") {
    return normalizeItrans(text);
  }
  // For prose (English with embedded Sanskrit terms):
  // Apply our standard normalize which strips IAST diacritics,
  // plus handle OCR artifacts like $ for ṣ
  return normalize(
    text
      .replace(/\$/g, "s")   // OCR: $ often = ṣ
      .replace(/§/g, "s")    // OCR: § often = ś
      .replace(/¬/g, "")     // OCR line-break artifact
  );
}

// --- Scan each chunk for glossary term matches ---
type SourceRef = { text: string; ref: string };
const result: Record<string, SourceRef[]> = {};
let totalMatches = 0;

for (const chunk of chunks) {
  const chunkNorm = normalizeChunkText(chunk.text, format);
  const chunkWords = new Set(chunkNorm.split(/\s+/).filter(Boolean));
  const matched = new Set<string>();

  for (const { normalized, id } of termList) {
    if (matched.has(id)) continue;
    if (chunkWords.has(normalized)) {
      matched.add(id);
      if (!result[id]) result[id] = [];
      if (result[id].length >= 10) continue;

      // For prose, truncate long paragraphs for readability
      let displayText = chunk.text
        .replace(/\.\.\s*\d+\s*\.\.$/g, "")
        .replace(/##.*$/gm, "")
        .trim();
      if (format === "prose" && displayText.length > 300) {
        displayText = displayText.slice(0, 297) + "...";
      }

      result[id].push({ text: displayText, ref: chunk.ref });
      totalMatches++;
    }
  }
}

// --- Write output ---
const outPath = resolve(
  __dirname,
  "../src/app/data/sources/generated",
  `${sourceName}.json`
);
writeFileSync(outPath, JSON.stringify(result, null, 2));

const entryCount = Object.keys(result).length;
console.log(
  `Done: ${totalMatches} references across ${entryCount} glossary entries → ${outPath}`
);
