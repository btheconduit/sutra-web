import type { GlossaryEntry } from "../data/glossary";
import { roots } from "../data/roots";
import { morphemes } from "../data/morphemes";
import { toDevanagari } from "../data/devanagari";

function formatRoot(root: NonNullable<GlossaryEntry["root"]>): string {
  const prefix = root.prefix ? `${root.prefix} + ` : "";
  const body = root.keys
    .map((k) => {
      const gloss = roots[k]?.gloss;
      return gloss ? `√${k} — ${gloss}` : `√${k}`;
    })
    .join(", or ");
  return prefix + body;
}

function formatComposition(composition: NonNullable<GlossaryEntry["composition"]>): string {
  const resolved = composition.parts.map((p) =>
    "morpheme" in p
      ? { text: p.morpheme, gloss: morphemes[p.morpheme]?.gloss ?? "" }
      : { text: p.text, gloss: p.gloss },
  );
  const pieces = resolved.map((r) => r.text).join(" + ");
  const glosses = resolved.map((r) => r.gloss).join(" + ");
  return `${pieces} (${glosses})`;
}

export function formatEntryAsText(entry: GlossaryEntry): string {
  const devanagari = entry.devanagari || toDevanagari(entry.term);
  const lines: string[] = [];

  lines.push(`${entry.term} (${devanagari})`);
  lines.push(entry.transliteration);
  lines.push("");
  lines.push(entry.definition);

  if (entry.root) {
    lines.push("");
    lines.push(`Root: ${formatRoot(entry.root)}`);
  }

  if (entry.composition) {
    lines.push("");
    lines.push(`Built from: ${formatComposition(entry.composition)}`);
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
