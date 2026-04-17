"use client";

import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import type { GlossaryEntry } from "../data/glossary";
import type { StickyNote, MwEntry } from "../types";
import { toDevanagari } from "../data/devanagari";
import { findByTerm } from "../lib/search";
import { loadMwData } from "../lib/mw";
import { IconExpand, IconCollapse, IconMinimize, IconClose, iconButtonClass } from "./Icons";
import { NotesArea } from "./Notes";

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

export function RootText({ text }: { text: string }) {
  const parts = text.split(/(√\S+)/);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("√") ? (
          <em key={i}>{part.slice(1)}</em>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
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
  const [data, setData] = useState<MwEntry | null>(null);
  const [hasData, setHasData] = useState<boolean | null>(null);

  useEffect(() => {
    loadMwData().then((mw) => {
      const entry = mw[entryId] ?? null;
      setData(entry);
      setHasData(entry !== null);
    });
  }, [entryId]);

  if (hasData === false || hasData === null) return null;

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

export function CollapsedPanel({
  entry,
  onRestore,
  onClose,
}: {
  entry: GlossaryEntry;
  onRestore: () => void;
  onClose: () => void;
}) {
  const devanagari = entry.devanagari || toDevanagari(entry.transliteration);
  return (
    <div
      onClick={onRestore}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onRestore(); } }}
      role="button"
      tabIndex={0}
      aria-label={`Restore ${entry.term}`}
      className="flex h-full w-16 shrink-0 cursor-pointer flex-col items-center rounded-lg border border-zinc-200/80 bg-zinc-50 py-4 transition-all duration-300 ease-out hover:border-zinc-300 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:border-zinc-700/60 dark:bg-zinc-900/70 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/70"
    >
      <div className="flex flex-col items-center gap-3 pt-1">
        <span
          className="text-lg font-normal tracking-wide text-zinc-700 dark:text-zinc-300"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {devanagari}
        </span>
        <span
          className="text-sm font-light tracking-wide text-zinc-400 dark:text-zinc-500"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {entry.term}
        </span>
      </div>
      <div className="flex-1" />
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label={`Close ${entry.term}`}
        className={iconButtonClass}
      >
        <IconClose />
      </button>
    </div>
  );
}

export function WordPanel({
  entry,
  panelState,
  onClose,
  onCollapse,
  onToggleExpand,
  onSelectTerm,
  notes,
  onAddNote,
  onRemoveNote,
  onChangeNoteColor,
  onEditNote,
  user,
  onSignInClick,
}: {
  entry: GlossaryEntry;
  panelState: "default" | "expanded";
  onClose: () => void;
  onCollapse: () => void;
  onToggleExpand: () => void;
  onSelectTerm: (entry: GlossaryEntry) => void;
  notes: StickyNote[];
  onAddNote: (id: string, text: string, color: number) => void;
  onRemoveNote: (id: string, index: number) => void;
  onChangeNoteColor: (id: string, index: number, color: number) => void;
  onEditNote: (id: string, index: number, text: string) => void;
  user: User | null;
  onSignInClick: () => void;
}) {
  const expanded = panelState === "expanded";

  return (
    <div
      className={`${expanded ? "w-[32rem]" : "w-80"} flex h-full shrink-0 flex-col rounded-lg border border-zinc-200 bg-white transition-all duration-300 ease-out hover:border-zinc-300 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-900/50 dark:hover:border-zinc-600/60 dark:hover:shadow-zinc-950/25`}
    >
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <div className="text-4xl font-light tracking-tight font-mono text-zinc-900 dark:text-zinc-100">
              {entry.devanagari || toDevanagari(entry.term)}
            </div>
            <div className="mt-1.5 text-lg text-zinc-400 dark:text-zinc-500">
              {entry.term}
            </div>
          </div>
          <div className="ml-4 mt-1 flex items-center gap-1">
            <button
              onClick={onCollapse}
              aria-label="Minimize panel"
              className={iconButtonClass}
            >
              <IconMinimize />
            </button>
            <button
              onClick={onToggleExpand}
              aria-label={expanded ? "Collapse panel" : "Expand panel"}
              className={iconButtonClass}
            >
              {expanded ? <IconCollapse /> : <IconExpand />}
            </button>
            <button
              onClick={onClose}
              aria-label={`Close ${entry.term}`}
              className={iconButtonClass}
            >
              <IconClose />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <Section label="Definition" tooltip="From the Vedanta glossary used by Swami Dayananda Saraswati, reflecting traditional usage in the Advaita Vedanta teaching tradition."><DefinitionText text={entry.definition} /></Section>
          {entry.root && <Section label="Root"><RootText text={entry.root} /></Section>}
          {entry.vedantaMeaning && (
            <Section label="Vedantic meaning" tooltip="Meaning as understood within the living tradition of Advaita Vedanta, rooted in the teachings of the ancient rishis and the works of Ādi Śaṅkarācārya.">{entry.vedantaMeaning}</Section>
          )}
          {entry.relatedTerms && entry.relatedTerms.length > 0 && (
            <div>
              <div className="mb-1 text-sm tracking-wide text-zinc-400 dark:text-zinc-600">
                Related terms
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-base leading-relaxed">
                {entry.relatedTerms.map((term) => {
                  const linked = findByTerm(term);
                  if (linked) {
                    return (
                      <button
                        key={term}
                        onClick={() => onSelectTerm(linked)}
                        className="text-zinc-600 underline decoration-zinc-300 underline-offset-2 transition-all hover:-translate-y-px hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-zinc-100"
                      >
                        {term}
                      </button>
                    );
                  }
                  return (
                    <span
                      key={term}
                      className="text-zinc-400 dark:text-zinc-500"
                    >
                      {term}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
          <MwSection entryId={entry.id} />
        </div>
      </div>

      <div className="shrink-0 border-t border-zinc-100 px-6 py-4 dark:border-zinc-800/60">
        <NotesArea entryId={entry.id} notes={notes} onAdd={onAddNote} onRemove={onRemoveNote} onChangeColor={onChangeNoteColor} onEdit={onEditNote} user={user} onSignInClick={onSignInClick} />
      </div>
    </div>
  );
}
