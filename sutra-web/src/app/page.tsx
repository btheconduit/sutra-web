"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { glossary, type GlossaryEntry } from "./data/glossary";
import { toDevanagari } from "./data/devanagari";
import { categories, type Category } from "./data/categories";

// --- Brand ---

function Wordmark({ width = 120, className }: { width?: number; className?: string }) {
  const aspect = 838 / 442;
  const height = Math.round(width / aspect);
  return (
    <span className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/sutra-wordmark-black.svg" alt="Sutra" width={width} height={height} className="block dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/sutra-wordmark-white.svg" alt="Sutra" width={width} height={height} className="hidden dark:block" />
    </span>
  );
}

// --- Icons (inline SVGs, 16x16) ---

function IconExpand({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M6 3H3v3M10 3h3v3M6 13H3v-3M10 13h3v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCollapse({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M3 6h3V3M10 3v3h3M3 10h3v3M10 13v-3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMinimize({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// --- Utilities ---

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[āà]/g, "a")
    .replace(/[īì]/g, "i")
    .replace(/[ūù]/g, "u")
    .replace(/[ṛṝ]/g, "r")
    .replace(/[ṣś]/g, "s")
    .replace(/[ṇṅñ]/g, "n")
    .replace(/[ṭ]/g, "t")
    .replace(/[ḍ]/g, "d")
    .replace(/[ṃ]/g, "m")
    .replace(/[ḥ]/g, "h");
}

function findByTerm(term: string): GlossaryEntry | undefined {
  const n = normalize(term);
  return glossary.find((e) => normalize(e.term) === n);
}

function searchGlossary(query: string): GlossaryEntry[] {
  if (!query.trim()) return [];
  const q = normalize(query.trim());
  const words = q.split(/\s+/).filter(Boolean);

  const scored: { entry: GlossaryEntry; score: number }[] = [];

  for (const entry of glossary) {
    const term = normalize(entry.term);
    const def = normalize(entry.definition);
    const vedanta = entry.vedantaMeaning ? normalize(entry.vedantaMeaning) : "";
    const tags = entry.tags ? entry.tags.map(normalize) : [];

    let score = 0;

    // Term matching (highest priority)
    if (term === q) {
      score = 100;
    } else if (term.startsWith(q)) {
      score = 80;
    } else if (term.includes(q)) {
      score = 60;
    }

    // Tag matching — exact word match against curated keywords
    if (score === 0 && tags.length > 0) {
      for (const word of words) {
        if (tags.some((t) => t === word || t.includes(word))) {
          score = Math.max(score, 40);
        }
      }
    }

    // Definition matching — search words in definition text
    if (score === 0) {
      const allWords = words.every((w) => def.includes(w));
      const someWords = words.some((w) => def.includes(w));
      if (allWords && words.length > 0) {
        score = 30;
      } else if (someWords) {
        score = 20;
      }
    }

    // Vedanta meaning matching
    if (score === 0 && vedanta) {
      const allWords = words.every((w) => vedanta.includes(w));
      const someWords = words.some((w) => vedanta.includes(w));
      if (allWords && words.length > 0) {
        score = 15;
      } else if (someWords) {
        score = 10;
      }
    }

    if (score > 0) {
      scored.push({ entry, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.entry);
}

// --- Theme ---

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return { dark, toggle };
}

function ThemeToggle({
  dark,
  onToggle,
}: {
  dark: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-5 right-5 z-20 text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
    >
      {dark ? "light" : "dark"}
    </button>
  );
}

// --- Search sidebar ---

function SearchSidebar({
  query,
  onQueryChange,
  results,
  onSelect,
  inputRef,
  highlightedIndex,
  onKeyDown,
  selectedCategory,
  onCategorySelect,
  onInfoClick,
}: {
  query: string;
  onQueryChange: (q: string) => void;
  results: GlossaryEntry[];
  onSelect: (entry: GlossaryEntry) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  highlightedIndex: number;
  onKeyDown: (e: React.KeyboardEvent) => void;
  selectedCategory: string | null;
  onCategorySelect: (id: string | null) => void;
  onInfoClick: () => void;
}) {
  const categoryEntries = useMemo(() => {
    if (!selectedCategory) return [];
    const cat = categories.find((c) => c.id === selectedCategory);
    if (!cat) return [];
    return cat.termIds
      .map((id) => glossary.find((e) => e.id === id))
      .filter((e): e is GlossaryEntry => e !== undefined);
  }, [selectedCategory]);

  return (
    <div className="flex h-full w-72 shrink-0 flex-col border-r border-zinc-200 bg-white px-5 pt-8 dark:border-zinc-800/50 dark:bg-black">
      <div className="mb-6 flex items-center justify-between">
        <Wordmark width={64} />
        <button
          onClick={onInfoClick}
          aria-label="About Sutra"
          className="text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"
        >
          <IconInfo />
        </button>
      </div>

      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search — e.g. adhyāsa"
          className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-600 dark:focus:border-zinc-600 dark:focus:bg-zinc-950"
        />

        {results.length > 0 && (
          <ul className="animate-slide-down absolute top-full z-10 mt-1 w-full rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            {results.map((entry, index) => (
              <li key={entry.id}>
                <button
                  onClick={() => onSelect(entry)}
                  className={`w-full px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 ${index === highlightedIndex ? "bg-zinc-100 dark:bg-zinc-800" : ""}`}
                >
                  <span className="text-sm text-zinc-900 dark:text-zinc-100">
                    {entry.term}
                  </span>
                  <span className="ml-2 font-mono text-xs text-zinc-400 dark:text-zinc-600">
                    {entry.devanagari || toDevanagari(entry.term)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {query.length > 0 && results.length === 0 && (
          <p className="animate-fade-in mt-3 text-xs text-zinc-400 dark:text-zinc-600">
            No results for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {query.length === 0 && (
        <div className="mt-6 flex flex-col gap-3 overflow-y-auto pb-4">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  onCategorySelect(
                    selectedCategory === cat.id ? null : cat.id,
                  )
                }
                className={`rounded px-2 py-1 text-[11px] transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {categoryEntries.length > 0 && (
            <div className="animate-fade-in flex flex-col gap-1">
              {categoryEntries.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => onSelect(entry)}
                  className="rounded-md px-3 py-2 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-zinc-800 dark:text-zinc-200">
                      {entry.term}
                    </span>
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                      {entry.devanagari || toDevanagari(entry.term)}
                    </span>
                  </div>
                  <div className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-600">
                    {entry.definition.length > 60
                      ? entry.definition.slice(0, 60) + "…"
                      : entry.definition}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// --- Panel states ---

type PanelState = "collapsed" | "default" | "expanded";

const iconButtonClass =
  "text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400";

// --- Collapsed panel ---

function CollapsedPanel({
  entry,
  onRestore,
  onClose,
}: {
  entry: GlossaryEntry;
  onRestore: () => void;
  onClose: () => void;
}) {
  return (
    <div className="flex h-full w-12 shrink-0 flex-col items-center rounded-lg border border-zinc-200 bg-white py-4 transition-all duration-300 ease-out dark:border-zinc-700/60 dark:bg-zinc-900/50">
      <button
        onClick={onClose}
        aria-label={`Close ${entry.term}`}
        className={`${iconButtonClass} mb-3`}
      >
        <IconClose />
      </button>
      <button
        onClick={onRestore}
        aria-label={`Restore ${entry.term}`}
        className="flex flex-1 items-center"
      >
        <span
          className="text-xs font-light tracking-wide text-zinc-500 dark:text-zinc-400"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {entry.term}
        </span>
      </button>
    </div>
  );
}

// --- Full panel (default + expanded) ---

type StickyNote = { id: string; text: string; color: number };

let noteIdCounter = 0;
function nextNoteId() {
  return `note-${Date.now()}-${++noteIdCounter}`;
}

const stickyColors = [
  { bg: "bg-amber-50 border-amber-200/80 dark:bg-amber-950/30 dark:border-amber-800/40", dot: "bg-amber-300 dark:bg-amber-700" },
  { bg: "bg-sky-50 border-sky-200/80 dark:bg-sky-950/30 dark:border-sky-800/40", dot: "bg-sky-300 dark:bg-sky-700" },
  { bg: "bg-rose-50 border-rose-200/80 dark:bg-rose-950/30 dark:border-rose-800/40", dot: "bg-rose-300 dark:bg-rose-700" },
  { bg: "bg-emerald-50 border-emerald-200/80 dark:bg-emerald-950/30 dark:border-emerald-800/40", dot: "bg-emerald-300 dark:bg-emerald-700" },
  { bg: "bg-violet-50 border-violet-200/80 dark:bg-violet-950/30 dark:border-violet-800/40", dot: "bg-violet-300 dark:bg-violet-700" },
];

function ColorPicker({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {stickyColors.map((c, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`h-3.5 w-3.5 rounded-full transition-all ${c.dot} ${selected === i ? "ring-1.5 ring-offset-1 ring-zinc-400 dark:ring-zinc-500 dark:ring-offset-zinc-900 scale-110" : "opacity-60 hover:opacity-100"}`}
          aria-label={`Color ${i + 1}`}
        />
      ))}
    </div>
  );
}

function StickyNoteCard({
  note,
  onRemove,
  onChangeColor,
  onEdit,
}: {
  note: StickyNote;
  onRemove: () => void;
  onChangeColor: (color: number) => void;
  onEdit: (text: string) => void;
}) {
  const [showColors, setShowColors] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(note.text);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const color = stickyColors[note.color % stickyColors.length];

  useEffect(() => {
    if (editing) textareaRef.current?.focus();
  }, [editing]);

  useEffect(() => {
    setDraft(note.text);
  }, [note.text]);

  return (
    <div
      className={`group/sticky relative rounded border px-3 py-2 ${color.bg}`}
    >
      <div className="absolute -top-1.5 right-3 flex items-center gap-1 opacity-0 transition-opacity group-hover/sticky:opacity-100">
        <button
          onClick={() => setShowColors((v) => !v)}
          className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-600"
          aria-label="Change color"
        >
          <div className={`h-2 w-2 rounded-full ${color.dot}`} />
        </button>
        <button
          onClick={onRemove}
          className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-300 text-white dark:bg-zinc-600"
          aria-label="Remove note"
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {showColors && (
        <div className="mb-2">
          <ColorPicker selected={note.color} onSelect={(c) => { onChangeColor(c); setShowColors(false); }} />
        </div>
      )}
      {editing ? (
        <div>
          <textarea
            ref={textareaRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                const trimmed = draft.trim();
                if (trimmed) onEdit(trimmed);
                else onRemove();
                setEditing(false);
              }
              if (e.key === "Escape") {
                setDraft(note.text);
                setEditing(false);
              }
            }}
            onBlur={() => {
              const trimmed = draft.trim();
              if (trimmed && trimmed !== note.text) onEdit(trimmed);
              else setDraft(note.text);
              setEditing(false);
            }}
            rows={2}
            className="w-full resize-none rounded bg-transparent text-xs leading-relaxed text-zinc-600 outline-none dark:text-zinc-300"
          />
        </div>
      ) : (
        <div
          onClick={() => setEditing(true)}
          className="cursor-text whitespace-pre-wrap text-xs leading-relaxed text-zinc-600 dark:text-zinc-300"
        >
          {note.text}
        </div>
      )}
    </div>
  );
}

function NotesArea({
  entryId,
  notes,
  onAdd,
  onRemove,
  onChangeColor,
  onEdit,
}: {
  entryId: string;
  notes: StickyNote[];
  onAdd: (id: string, text: string, color: number) => void;
  onRemove: (id: string, index: number) => void;
  onChangeColor: (id: string, index: number, color: number) => void;
  onEdit: (id: string, index: number, text: string) => void;
}) {
  const [composing, setComposing] = useState(false);
  const [draft, setDraft] = useState("");
  const [draftColor, setDraftColor] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (composing) textareaRef.current?.focus();
  }, [composing]);

  return (
    <div className="space-y-2">
      {notes.map((note, i) => (
        <StickyNoteCard
          key={note.id}
          note={note}
          onRemove={() => onRemove(entryId, i)}
          onChangeColor={(c) => onChangeColor(entryId, i, c)}
          onEdit={(text) => onEdit(entryId, i, text)}
        />
      ))}

      {composing ? (
        <div>
          <textarea
            ref={textareaRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (draft.trim()) {
                  onAdd(entryId, draft.trim(), draftColor);
                  setDraft("");
                  setDraftColor(0);
                  setComposing(false);
                }
              }
              if (e.key === "Escape") {
                setDraft("");
                setComposing(false);
              }
            }}
            placeholder="Write a note..."
            rows={2}
            className={`w-full resize-none rounded border px-3 py-2 text-xs leading-relaxed text-zinc-700 outline-none transition-colors dark:text-zinc-200 ${stickyColors[draftColor % stickyColors.length].bg}`}
          />
          <div className="mt-2 flex items-center gap-3">
            <ColorPicker selected={draftColor} onSelect={setDraftColor} />
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => {
                  if (draft.trim()) {
                    onAdd(entryId, draft.trim(), draftColor);
                    setDraft("");
                    setDraftColor(0);
                    setComposing(false);
                  }
                }}
                className="rounded px-2 py-0.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              >
                Add
              </button>
              <button
                onClick={() => {
                  setDraft("");
                  setComposing(false);
                }}
                className="rounded px-2 py-0.5 text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setComposing(true)}
          className="w-full rounded border border-dashed border-zinc-200 px-3 py-2 text-left text-xs text-zinc-400 transition-colors hover:border-zinc-300 hover:text-zinc-500 dark:border-zinc-700/60 dark:text-zinc-600 dark:hover:border-zinc-600 dark:hover:text-zinc-400"
        >
          {notes.length === 0 ? "Add a note..." : "+ Add another note"}
        </button>
      )}
    </div>
  );
}

function WordPanel({
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
}) {
  const expanded = panelState === "expanded";

  return (
    <div
      className={`${expanded ? "w-[32rem]" : "w-80"} flex h-full shrink-0 flex-col rounded-lg border border-zinc-200 bg-white transition-[width] duration-300 ease-out dark:border-zinc-700/60 dark:bg-zinc-900/50`}
    >
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <div className="text-3xl font-light tracking-tight font-mono text-zinc-900 dark:text-zinc-100">
              {entry.devanagari || toDevanagari(entry.term)}
            </div>
            <div className="mt-1 text-base text-zinc-400 dark:text-zinc-500">
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
          <Section label="Definition">{entry.definition}</Section>
          {entry.vedantaMeaning && (
            <Section label="Vedantic meaning">{entry.vedantaMeaning}</Section>
          )}
          <Section label="Transliteration">{entry.transliteration}</Section>
          {entry.root && <Section label="Root">{entry.root}</Section>}
          {entry.relatedTerms && entry.relatedTerms.length > 0 && (
            <div>
              <div className="mb-1 text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                Related terms
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm leading-relaxed">
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
        </div>
      </div>

      <div className="shrink-0 border-t border-zinc-100 px-6 py-4 dark:border-zinc-800/60">
        <NotesArea entryId={entry.id} notes={notes} onAdd={onAddNote} onRemove={onRemoveNote} onChangeColor={onChangeNoteColor} onEdit={onEditNote} />
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1 text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
        {label}
      </div>
      <div className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}

// --- Info panel ---

function IconInfo({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 7v4M8 5.5v-.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function InfoPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="animate-fade-in fixed inset-0 z-30 flex items-center justify-center bg-black/20 dark:bg-black/50" onClick={onClose}>
      <div
        className="animate-slide-down mx-4 w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-lg font-light text-zinc-900 dark:text-zinc-100">
            About Sutra
          </h2>
          <button onClick={onClose} className={iconButtonClass}>
            <IconClose />
          </button>
        </div>

        <div className="space-y-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Sutra is a quiet lookup tool for Sanskrit terms used in Vedanta study.
            Search any term, browse by category, or follow related terms to deepen
            your understanding.
          </p>

          <div>
            <h3 className="mb-1.5 text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
              How to use
            </h3>
            <ul className="space-y-1.5 text-zinc-500 dark:text-zinc-400">
              <li>Type a Sanskrit term in the search bar</li>
              <li>Browse categories to explore terms by theme</li>
              <li>Click any term to open its full entry</li>
              <li>Follow related terms to trace connections</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1.5 text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
              Supporting this project
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Sutra is offered freely as a service to students and practitioners.
              This project is sustained entirely by donations. If you find it
              useful in your study, consider contributing to help keep it available
              for others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Categories ---

function CategoryBlocks({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(selected === cat.id ? null : cat.id)}
          className={`rounded-md border px-3 py-1.5 text-xs transition-all duration-200 ${
            selected === cat.id
              ? "border-zinc-400 bg-zinc-100 text-zinc-900 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-100"
              : "border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-zinc-700 dark:hover:text-zinc-300"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

function TermCard({
  entry,
  onSelect,
}: {
  entry: GlossaryEntry;
  onSelect: (entry: GlossaryEntry) => void;
}) {
  return (
    <button
      onClick={() => onSelect(entry)}
      className="group rounded-lg border border-zinc-200 px-4 py-3 text-left transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50"
    >
      <div className="font-mono text-base text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
        {entry.devanagari || toDevanagari(entry.term)}
      </div>
      <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-200">
        {entry.term}
      </div>
      <div className="mt-1.5 text-xs leading-relaxed text-zinc-400 dark:text-zinc-600">
        {entry.definition.length > 80
          ? entry.definition.slice(0, 80) + "…"
          : entry.definition}
      </div>
    </button>
  );
}

function CategoryTermCards({
  category,
  onSelect,
}: {
  category: Category;
  onSelect: (entry: GlossaryEntry) => void;
}) {
  const entries = category.termIds
    .map((id) => glossary.find((e) => e.id === id))
    .filter((e): e is GlossaryEntry => e !== undefined);

  if (entries.length === 0) return null;

  return (
    <div className="animate-fade-in w-full">
      <p className="mb-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
        {category.description}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {entries.map((entry) => (
          <TermCard key={entry.id} entry={entry} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

// --- Main ---

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [openEntries, setOpenEntries] = useState<GlossaryEntry[]>([]);
  const [panelStates, setPanelStates] = useState<Record<string, PanelState>>(
    {},
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const panelContainerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const { dark, toggle } = useTheme();
  const [notes, setNotes] = useState<Record<string, StickyNote[]>>({});
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dropIndex, setDropIndex] = useState<number | null>(null);
  const [dropSide, setDropSide] = useState<"left" | "right">("left");

  const results = useMemo(() => searchGlossary(query), [query]);
  const hasPanels = openEntries.length > 0;
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [results]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [hasPanels]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sutra-notes");
      if (saved) {
        const parsed = JSON.parse(saved) as Record<string, StickyNote[]>;
        for (const key of Object.keys(parsed)) {
          parsed[key] = parsed[key].map((n) => n.id ? n : { ...n, id: nextNoteId() });
        }
        setNotes(parsed);
      }
    } catch { /* ignore */ }
  }, []);

  const handleAddNote = useCallback((id: string, text: string, color: number) => {
    setNotes((prev) => {
      const next = { ...prev, [id]: [...(prev[id] || []), { id: nextNoteId(), text, color }] };
      localStorage.setItem("sutra-notes", JSON.stringify(next));
      return next;
    });
  }, []);

  const handleRemoveNote = useCallback((id: string, index: number) => {
    setNotes((prev) => {
      const arr = [...(prev[id] || [])];
      arr.splice(index, 1);
      const next = { ...prev };
      if (arr.length === 0) delete next[id];
      else next[id] = arr;
      localStorage.setItem("sutra-notes", JSON.stringify(next));
      return next;
    });
  }, []);

  const handleChangeNoteColor = useCallback((id: string, index: number, color: number) => {
    setNotes((prev) => {
      const arr = [...(prev[id] || [])];
      if (!arr[index]) return prev;
      arr[index] = { ...arr[index], color };
      const next = { ...prev, [id]: arr };
      localStorage.setItem("sutra-notes", JSON.stringify(next));
      return next;
    });
  }, []);

  const handleEditNote = useCallback((id: string, index: number, text: string) => {
    setNotes((prev) => {
      const arr = [...(prev[id] || [])];
      if (!arr[index]) return prev;
      arr[index] = { ...arr[index], text };
      const next = { ...prev, [id]: arr };
      localStorage.setItem("sutra-notes", JSON.stringify(next));
      return next;
    });
  }, []);

  const handleSelect = useCallback(
    (entry: GlossaryEntry) => {
      const existing = openEntries.find((e) => e.id === entry.id);
      if (existing) {
        // Restore if collapsed, then scroll to it
        setPanelStates((prev) => {
          if (prev[entry.id] === "collapsed") {
            return { ...prev, [entry.id]: "default" };
          }
          return prev;
        });
        const el = panelRefs.current.get(entry.id);
        el?.scrollIntoView({ behavior: "smooth", inline: "start" });
      } else {
        setOpenEntries((prev) => [...prev, entry]);
        setPanelStates((prev) => ({ ...prev, [entry.id]: "default" }));
        requestAnimationFrame(() => {
          const el = panelRefs.current.get(entry.id);
          el?.scrollIntoView({ behavior: "smooth", inline: "start" });
        });
      }
      setQuery("");
    },
    [openEntries],
  );

  const handleClose = useCallback((id: string) => {
    setOpenEntries((prev) => prev.filter((e) => e.id !== id));
    setPanelStates((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const handleCollapse = useCallback((id: string) => {
    setPanelStates((prev) => ({ ...prev, [id]: "collapsed" }));
  }, []);

  const handleToggleExpand = useCallback((id: string) => {
    setPanelStates((prev) => ({
      ...prev,
      [id]: prev[id] === "expanded" ? "default" : "expanded",
    }));
  }, []);

  const handleRestore = useCallback((id: string) => {
    setPanelStates((prev) => ({ ...prev, [id]: "default" }));
  }, []);

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : results.length - 1,
        );
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        e.preventDefault();
        handleSelect(results[highlightedIndex]);
      }
    },
    [results, highlightedIndex, handleSelect],
  );

  const handleDragStart = useCallback((index: number) => {
    setDragIndex(index);
  }, []);

  const handleDragOver = useCallback(
    (e: React.DragEvent, index: number) => {
      e.preventDefault();
      if (dragIndex === null || index === dragIndex) {
        setDropIndex(null);
        return;
      }
      const rect = e.currentTarget.getBoundingClientRect();
      const midX = rect.left + rect.width / 2;
      setDropSide(e.clientX < midX ? "left" : "right");
      setDropIndex(index);
    },
    [dragIndex],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (dragIndex === null || dropIndex === null || dragIndex === dropIndex) {
        setDragIndex(null);
        setDropIndex(null);
        return;
      }
      setOpenEntries((prev) => {
        const next = [...prev];
        const [moved] = next.splice(dragIndex, 1);
        // Adjust insertion: if dropping on the right side, insert after
        let insertAt = dropIndex > dragIndex ? dropIndex - 1 : dropIndex;
        if (dropSide === "right") insertAt += 1;
        next.splice(insertAt, 0, moved);
        return next;
      });
      setDragIndex(null);
      setDropIndex(null);
    },
    [dragIndex, dropIndex, dropSide],
  );

  const handleDragEnd = useCallback(() => {
    setDragIndex(null);
    setDropIndex(null);
  }, []);

  // Landing state — no panels open
  if (!hasPanels) {
    return (
      <div className="flex flex-1 flex-col items-center justify-start bg-white font-sans dark:bg-black">
        <ThemeToggle dark={dark} onToggle={toggle} />
        {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}
        <button
          onClick={() => setShowInfo(true)}
          aria-label="About Sutra"
          className="fixed top-5 left-5 z-20 text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"
        >
          <IconInfo />
        </button>
        <main className="flex w-full max-w-2xl flex-col items-center px-6 pt-32 pb-16">
          <div className="mb-10">
            <Wordmark width={120} />
          </div>

          <div className="relative w-full">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value.length > 0) setSelectedCategory(null);
              }}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search a term — e.g. adhyāsa"
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-base text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-600 dark:focus:border-zinc-600 dark:focus:bg-zinc-950"
            />

            {results.length > 0 && (
              <ul className="animate-slide-down absolute top-full z-10 mt-2 w-full rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                {results.map((entry, index) => (
                  <li key={entry.id}>
                    <button
                      onClick={() => handleSelect(entry)}
                      className={`w-full px-4 py-3 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 ${index === highlightedIndex ? "bg-zinc-100 dark:bg-zinc-800" : ""}`}
                    >
                      <span className="text-sm text-zinc-900 dark:text-zinc-100">
                        {entry.term}
                      </span>
                      <span className="ml-3 font-mono text-xs text-zinc-400 dark:text-zinc-600">
                        {entry.devanagari || toDevanagari(entry.term)}
                      </span>
                      <span className="ml-3 text-xs text-zinc-500">
                        {entry.definition.length > 60
                          ? entry.definition.slice(0, 60) + "…"
                          : entry.definition}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {query.length > 0 && results.length === 0 && (
              <div className="animate-fade-in mt-6">
                <p className="text-sm text-zinc-500">
                  No results for &ldquo;{query}&rdquo;
                </p>
              </div>
            )}
          </div>

          {query.length === 0 && (
            <div className="mt-12 w-full space-y-6">
              <CategoryBlocks
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
              {selectedCategory &&
                (() => {
                  const cat = categories.find((c) => c.id === selectedCategory);
                  return cat ? (
                    <CategoryTermCards
                      category={cat}
                      onSelect={handleSelect}
                    />
                  ) : null;
                })()}
            </div>
          )}
        </main>
      </div>
    );
  }

  // Panel state — search sidebar + horizontal panels
  return (
    <div className="flex h-full min-h-0 flex-1 overflow-hidden bg-white font-sans dark:bg-black">
      <ThemeToggle dark={dark} onToggle={toggle} />
      {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}

      <SearchSidebar
        query={query}
        onQueryChange={setQuery}
        results={results}
        onSelect={handleSelect}
        inputRef={inputRef}
        highlightedIndex={highlightedIndex}
        onKeyDown={handleSearchKeyDown}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        onInfoClick={() => setShowInfo(true)}
      />

      <div
        ref={panelContainerRef}
        className="flex min-h-0 flex-1 items-stretch gap-3 overflow-x-auto p-4"
      >
        {openEntries.map((entry, index) => {
          const state = panelStates[entry.id] || "default";
          const isDragging = dragIndex === index;
          const showLeftLine = dropIndex === index && dropSide === "left" && dragIndex !== null;
          const showRightLine = dropIndex === index && dropSide === "right" && dragIndex !== null;

          return (
            <div
              key={entry.id}
              ref={(el) => {
                if (el) panelRefs.current.set(entry.id, el);
                else panelRefs.current.delete(entry.id);
              }}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={handleDrop}
              onDragEnd={handleDragEnd}
              className={`relative animate-slide-in-right cursor-grab transition-all duration-200 active:cursor-grabbing ${isDragging ? "opacity-30 scale-[0.97]" : ""}`}
            >
              {showLeftLine && (
                <div className="absolute -left-2 top-2 bottom-2 w-0.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-fade-in" />
              )}
              {showRightLine && (
                <div className="absolute -right-2 top-2 bottom-2 w-0.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-fade-in" />
              )}
              {state === "collapsed" ? (
                <CollapsedPanel
                  entry={entry}
                  onRestore={() => handleRestore(entry.id)}
                  onClose={() => handleClose(entry.id)}
                />
              ) : (
                <WordPanel
                  entry={entry}
                  panelState={state}
                  onClose={() => handleClose(entry.id)}
                  onCollapse={() => handleCollapse(entry.id)}
                  onToggleExpand={() => handleToggleExpand(entry.id)}
                  onSelectTerm={handleSelect}
                  notes={notes[entry.id] || []}
                  onAddNote={handleAddNote}
                  onRemoveNote={handleRemoveNote}
                  onChangeNoteColor={handleChangeNoteColor}
                  onEditNote={handleEditNote}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
