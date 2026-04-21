import type { GlossaryEntry } from "../data/glossary";
import { toDevanagari } from "../data/devanagari";

export function formatEntryAsText(entry: GlossaryEntry): string {
  const devanagari = entry.devanagari || toDevanagari(entry.term);
  const lines: string[] = [];

  lines.push(`${entry.term} (${devanagari})`);
  lines.push(entry.transliteration);
  lines.push("");
  lines.push(entry.definition);

  if (entry.root) {
    lines.push("");
    lines.push(`Root: ${entry.root}`);
  }

  if (entry.vedantaMeaning) {
    lines.push("");
    lines.push("Vedantic meaning:");
    lines.push(entry.vedantaMeaning);
  }

  lines.push("");
  lines.push(`— sutra.so/t/${entry.id}`);

  return lines.join("\n");
}
