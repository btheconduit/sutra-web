"use client";

import { useState, useEffect, useMemo } from "react";
import type { GlossaryEntry } from "../data/glossary";
import { roots } from "../data/roots";
import { morphemes } from "../data/morphemes";
import { entriesWithoutMw } from "../data/mw-missing";
import type { MwEntry } from "../types";
import { findByTerm, getRelatedTerms } from "../lib/search";
import { loadMwData } from "../lib/mw";

export function Section({
  label,
  children,
  tooltip,
}: {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}) {
  return (
    <div>
      <div className="relative mb-1 flex items-center gap-1.5 text-sm tracking-wide text-zinc-400 dark:text-zinc-600">
        {label}
        {tooltip && <SourceTooltip text={tooltip} />}
      </div>
      <div className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}

function SourceTooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow((s) => !s)}
    >
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="cursor-help text-zinc-300 transition-colors hover:text-zinc-400 dark:text-zinc-600 dark:hover:text-zinc-500">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 7v4M8 5.5v-.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {show && (
        <span className="animate-fade-in absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-xs leading-relaxed font-normal tracking-normal text-zinc-500 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
          {text}
        </span>
      )}
    </span>
  );
}

export function RootDisplay({ root }: { root: NonNullable<GlossaryEntry["root"]> }) {
  return (
    <>
      {root.prefix && <span>{root.prefix} + </span>}
      {root.keys.map((key, i) => {
        const entry = roots[key];
        return (
          <span key={key}>
            {i > 0 && <span>, or </span>}
            √<em>{key}</em>
            {entry && <span> — {entry.gloss}</span>}
          </span>
        );
      })}
    </>
  );
}

function resolvePart(
  part: NonNullable<GlossaryEntry["composition"]>["parts"][number],
): { text: string; gloss: string } {
  if ("morpheme" in part) {
    const m = morphemes[part.morpheme];
    return { text: part.morpheme, gloss: m?.gloss ?? "" };
  }
  return { text: part.text, gloss: part.gloss };
}

export function CompositionDisplay({
  composition,
}: {
  composition: NonNullable<GlossaryEntry["composition"]>;
}) {
  const resolved = composition.parts.map(resolvePart);
  return (
    <>
      {resolved.map((p, i) => (
        <span key={i}>
          {i > 0 && <span> + </span>}
          <em>{p.text}</em>
        </span>
      ))}
      <span> ({resolved.map((p) => p.gloss).join(" + ")})</span>
    </>
  );
}

export function DefinitionText({ text }: { text: string }) {
  const parts = text.split(/;\s*/);
  if (parts.length <= 1) return <>{text}</>;
  return (
    <ol className="list-none space-y-1.5 pl-0">
      {parts.map((part, i) => (
        <li key={i} className="flex gap-2">
          <span className="shrink-0 text-zinc-300 dark:text-zinc-600">{i + 1}.</span>
          <span>{part.replace(/\.$/, "")}</span>
        </li>
      ))}
    </ol>
  );
}

export function MwSection({ entryId }: { entryId: string }) {
  const [open, setOpen] = useState(false);
  // Loaded lazily on first expand so opening a term doesn't fetch the
  // full MW dataset; tagged with its entry id so a stale entry's data
  // never shows while switching terms.
  const [loaded, setLoaded] = useState<{ id: string; entry: MwEntry | null } | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    loadMwData().then((mw) => {
      if (!cancelled) setLoaded({ id: entryId, entry: mw[entryId] ?? null });
    });
    return () => { cancelled = true; };
  }, [open, entryId]);

  if (entriesWithoutMw.has(entryId)) return null;

  const data = loaded?.id === entryId ? loaded.entry : null;

  return (
    <div className="border-t border-zinc-100 pt-4 dark:border-zinc-800/40">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-1.5 text-sm tracking-wide text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
      >
        <svg
          className={`h-3 w-3 shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M4.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Extended meanings
      </button>
      {open && data && (
        <div className="mt-3 space-y-3 animate-slide-down">
          {(data.lex || data.etymology) && (
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {data.lex && (
                <div>
                  <span className="text-xs tracking-wide text-zinc-300 dark:text-zinc-600">Grammar </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{data.lex}</span>
                </div>
              )}
              {data.etymology && (
                <div>
                  <span className="text-xs tracking-wide text-zinc-300 dark:text-zinc-600">Etymology </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 italic">{data.etymology}</span>
                </div>
              )}
            </div>
          )}
          <ol className="list-none space-y-1 pl-0">
            {data.senses.map((sense, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                <span className="shrink-0 text-zinc-300 dark:text-zinc-600">{i + 1}.</span>
                <span>{sense}</span>
              </li>
            ))}
          </ol>
          <div className="mt-3 text-[11px] text-zinc-300 dark:text-zinc-700">
            Monier-Williams, 1899
          </div>
        </div>
      )}
    </div>
  );
}

export function EntryBody({
  entry,
  onSelectTerm,
}: {
  entry: GlossaryEntry;
  onSelectTerm: (entry: GlossaryEntry) => void;
}) {
  const related = useMemo(
    () => getRelatedTerms(entry).map((term) => ({ term, linked: findByTerm(term) })),
    [entry],
  );

  return (
    <div className="space-y-6">
      <Section label="Definition" tooltip="From the Vedanta glossary used by Swami Dayananda Saraswati, reflecting traditional usage in the Advaita Vedanta teaching tradition."><DefinitionText text={entry.definition} /></Section>
      {entry.root && <Section label="Root" tooltip="The verbal root (dhātu) from which this word derives — the seed-verb a family of Sanskrit words grows from."><RootDisplay root={entry.root} /></Section>}
      {entry.composition && <Section label="Built from" tooltip="How the word is assembled from meaningful pieces (morphemes) — prefixes, suffixes, and smaller words joined to form this term."><CompositionDisplay composition={entry.composition} /></Section>}
      {entry.vedantaMeaning && (
        <Section label="Vedantic meaning" tooltip="Meaning as understood within the living tradition of Advaita Vedanta, rooted in the teachings of the ancient rishis and the works of Ādi Śaṅkarācārya.">{entry.vedantaMeaning}</Section>
      )}
      {related.length > 0 && (
        <div>
          <div className="mb-1.5 text-sm tracking-wide text-zinc-400 dark:text-zinc-600">
            Related terms
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-base leading-relaxed">
            {related.map(({ term, linked }) =>
              linked ? (
                <button
                  key={term}
                  onClick={() => onSelectTerm(linked)}
                  className="text-zinc-600 underline decoration-zinc-300 underline-offset-2 transition-all hover:-translate-y-px hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-zinc-100"
                >
                  {term}
                </button>
              ) : (
                <span key={term} className="text-zinc-400 dark:text-zinc-500">
                  {term}
                </span>
              ),
            )}
          </div>
        </div>
      )}
      <MwSection entryId={entry.id} />
    </div>
  );
}
