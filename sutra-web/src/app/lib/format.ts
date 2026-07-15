import type { GlossaryEntry } from "../data/glossary";
import { roots } from "../data/roots";
import { morphemes } from "../data/morphemes";
import { toDevanagari } from "../data/devanagari";

export function truncate(text: string, max: number): string {
  return text.length > max ? text.slice(0, max) + "..." : text;
}

export function displayDevanagari(entry: Pick<GlossaryEntry, "devanagari" | "term">): string {
  return entry.devanagari || toDevanagari(entry.term);
}

export function copyEntryText(entry: GlossaryEntry, showToast: (message: string) => void) {
  navigator.clipboard.writeText(formatEntryAsText(entry))
    .then(() => showToast("Copied to clipboard"))
    .catch(() => showToast("Failed to copy"));
}

export function copyEntryLink(entry: GlossaryEntry, showToast: (message: string) => void) {
  navigator.clipboard.writeText(`${window.location.origin}/t/${entry.id}`)
    .then(() => showToast("Link copied"))
    .catch(() => showToast("Failed to copy link"));
}

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
  const lines: string[] = [];

  lines.push(`${entry.term} (${displayDevanagari(entry)})`);
  if (entry.transliteration !== entry.term) lines.push(entry.transliteration);
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
