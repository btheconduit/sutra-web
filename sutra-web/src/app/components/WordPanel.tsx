"use client";

import { memo, useState, useEffect, useRef } from "react";
import type { User } from "@supabase/supabase-js";
import type { GlossaryEntry } from "../data/glossary";
import type { StickyNote } from "../types";
import { IconExpand, IconCollapse, IconMinimize, IconClose, IconCopy, IconShare, iconButtonClass } from "./Icons";
import { NotesList, NoteComposer } from "./Notes";
import { EntryBody } from "./EntryBody";
import { displayDevanagari, copyEntryText, copyEntryLink } from "../lib/format";

export function CollapsedPanel({
  entry,
  onRestore,
  onClose,
}: {
  entry: GlossaryEntry;
  onRestore: () => void;
  onClose: () => void;
}) {
  const devanagari = displayDevanagari(entry);
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

function PanelMenu({
  expanded,
  onClose,
  onCollapse,
  onToggleExpand,
  onCopy,
  onShare,
}: {
  expanded: boolean;
  onClose: () => void;
  onCollapse: () => void;
  onToggleExpand: () => void;
  onCopy: () => void;
  onShare: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const itemClass =
    "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-zinc-600 transition-colors hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-700/50";

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-label="More actions"
        className="text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
      >
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="3.5" cy="8" r="1.3" />
          <circle cx="8" cy="8" r="1.3" />
          <circle cx="12.5" cy="8" r="1.3" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 pt-1">
          <div className="animate-fade-in min-w-[150px] rounded-lg border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-700 dark:bg-zinc-800">
            <button onClick={() => { setOpen(false); onClose(); }} className={itemClass}>
              <IconClose />
              Close
            </button>
            <button onClick={() => { setOpen(false); onCollapse(); }} className={itemClass}>
              <IconMinimize />
              Minimize
            </button>
            <button onClick={() => { setOpen(false); onToggleExpand(); }} className={itemClass}>
              {expanded ? <IconCollapse /> : <IconExpand />}
              {expanded ? "Collapse" : "Expand"}
            </button>
            <div className="my-1 border-t border-zinc-100 dark:border-zinc-700/50" />
            <button onClick={() => { setOpen(false); onCopy(); }} className={itemClass}>
              <IconCopy />
              Copy text
            </button>
            <button onClick={() => { setOpen(false); onShare(); }} className={itemClass}>
              <IconShare />
              Copy link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export const WordPanel = memo(function WordPanel({
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
  showToast,
}: {
  entry: GlossaryEntry;
  panelState: "default" | "expanded";
  onClose: (id: string) => void;
  onCollapse: (id: string) => void;
  onToggleExpand: (id: string) => void;
  onSelectTerm: (entry: GlossaryEntry) => void;
  notes: StickyNote[];
  onAddNote: (id: string, text: string, color: number) => void;
  onRemoveNote: (id: string, index: number) => void;
  onChangeNoteColor: (id: string, index: number, color: number) => void;
  onEditNote: (id: string, index: number, text: string) => void;
  user: User | null;
  onSignInClick: () => void;
  showToast: (message: string) => void;
}) {
  const expanded = panelState === "expanded";
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  const menuProps = {
    expanded,
    onClose: () => onClose(entry.id),
    onCollapse: () => onCollapse(entry.id),
    onToggleExpand: () => onToggleExpand(entry.id),
    onCopy: () => copyEntryText(entry, showToast),
    onShare: () => copyEntryLink(entry, showToast),
  };

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const scroller = scrollerRef.current;
    if (!sentinel || !scroller) return;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(!e.isIntersecting),
      { root: scroller, threshold: 1.0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${expanded ? "w-[32rem]" : "w-80"} flex h-full shrink-0 flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all duration-300 ease-out hover:border-zinc-300 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-900/50 dark:hover:border-zinc-600/60 dark:hover:shadow-zinc-950/25`}
    >
      <div ref={scrollerRef} className="relative flex-1 overflow-y-auto scrollbar-thin">
        <div
          inert={!stuck}
          className={`sticky top-0 z-10 -mb-16 h-16 transition-opacity duration-200 ${stuck ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <div className="flex h-full items-center justify-between gap-3 border-b border-zinc-100 bg-white/95 px-6 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/85">
            <div className="min-w-0">
              <div className="font-mono text-xl font-light leading-tight tracking-tight text-zinc-900 dark:text-zinc-100">
                {displayDevanagari(entry)}
              </div>
              <div className="text-xs leading-tight text-zinc-400 dark:text-zinc-500">
                {entry.term}
              </div>
            </div>
            <PanelMenu {...menuProps} />
          </div>
        </div>

        <div ref={sentinelRef} aria-hidden className="h-px" />

        <div className="px-6 pt-6 pb-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <div className="text-4xl font-light tracking-tight font-mono text-zinc-900 dark:text-zinc-100">
                {displayDevanagari(entry)}
              </div>
              <div className="mt-1.5 text-lg text-zinc-400 dark:text-zinc-500">
                {entry.term}
              </div>
            </div>
            <div inert={stuck} className="ml-4 mt-1 flex items-center gap-1">
              <PanelMenu {...menuProps} />
            </div>
          </div>

          <EntryBody entry={entry} onSelectTerm={onSelectTerm} />

          {notes.length > 0 && (
            <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800/60">
              <NotesList
                entryId={entry.id}
                notes={notes}
                onRemove={onRemoveNote}
                onChangeColor={onChangeNoteColor}
                onEdit={onEditNote}
              />
            </div>
          )}
        </div>
      </div>

      <div className="shrink-0 border-t border-zinc-100 bg-white/95 px-6 py-3 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/85">
        <NoteComposer
          entryId={entry.id}
          notesCount={notes.length}
          onAdd={onAddNote}
          user={user}
          onSignInClick={onSignInClick}
        />
      </div>
    </div>
  );
});
