"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { glossary, type GlossaryEntry } from "./data/glossary";
import { toDevanagari } from "./data/devanagari";
import { categories, type Category } from "./data/categories";
type MwEntry = { senses: string[]; lex?: string; etymology?: string };
type MwData = Record<string, MwEntry>;

let mwDataCache: MwData | null = null;
let mwDataPromise: Promise<MwData> | null = null;

function loadMwData(): Promise<MwData> {
  if (mwDataCache) return Promise.resolve(mwDataCache);
  if (!mwDataPromise) {
    mwDataPromise = import("./data/mw-enrichment.json").then((mod) => {
      mwDataCache = mod.default as MwData;
      return mwDataCache;
    });
  }
  return mwDataPromise;
}

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
  return (
    s
      .toLowerCase()
      // Strip IAST diacritics
      .replace(/[āà]/g, "a")
      .replace(/[īì]/g, "i")
      .replace(/[ūù]/g, "u")
      .replace(/[ṛṝ]/g, "r")
      .replace(/[ṣś]/g, "s")
      .replace(/[ṇṅñ]/g, "n")
      .replace(/[ṭ]/g, "t")
      .replace(/[ḍ]/g, "d")
      .replace(/[ṃ]/g, "m")
      .replace(/[ḥ]/g, "h")
      // Collapse common English transliteration variants
      .replace(/sh/g, "s")
      .replace(/ch/g, "c")
      .replace(/aa/g, "a")
      .replace(/ee/g, "i")
      .replace(/oo/g, "u")
      .replace(/w/g, "v")
      .replace(/ri/g, "r")
      .replace(/gy/g, "jn")
      .replace(/gn/g, "jn")
  );
}

function findByTerm(term: string): GlossaryEntry | undefined {
  const n = normalize(term);
  return glossary.find(
    (e) =>
      normalize(e.term) === n ||
      (e.aliases?.some((a) => normalize(a) === n) ?? false),
  );
}

function searchGlossary(query: string): GlossaryEntry[] {
  if (!query.trim()) return [];
  const q = normalize(query.trim());
  const words = q.split(/\s+/).filter(Boolean);

  const scored: { entry: GlossaryEntry; score: number }[] = [];

  for (const entry of glossary) {
    const term = normalize(entry.term);
    const aliases = entry.aliases ? entry.aliases.map(normalize) : [];
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

    // Alias matching (just below term matching)
    if (score === 0 && aliases.length > 0) {
      for (const alias of aliases) {
        if (alias === q) {
          score = 95;
          break;
        } else if (alias.startsWith(q)) {
          score = Math.max(score, 75);
        } else if (alias.includes(q)) {
          score = Math.max(score, 55);
        }
      }
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

function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <span className="group relative">
      {children}
      <span className="pointer-events-none absolute top-full right-0 mt-2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-[11px] text-zinc-200 opacity-0 shadow-md transition-opacity delay-0 group-hover:opacity-100 group-hover:delay-150 dark:bg-zinc-700 dark:text-zinc-100">
        {label}
      </span>
    </span>
  );
}

function TopBar({
  dark,
  onToggle,
  onInfoClick,
}: {
  dark: boolean;
  onToggle: () => void;
  onInfoClick: () => void;
}) {
  return (
    <div className="fixed top-5 right-5 z-20 flex items-center gap-3 rounded-lg border border-zinc-200/40 bg-white/40 px-3 py-2 leading-none backdrop-blur-2xl backdrop-saturate-150 dark:border-zinc-700/30 dark:bg-zinc-950/30">
      <Tooltip label="About (I)">
        <button
          onClick={onInfoClick}
          aria-label="About Sutra"
          className="flex items-center text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"
        >
          <IconInfo />
        </button>
      </Tooltip>
      <Tooltip label={dark ? "Light mode (O)" : "Dark mode (O)"}>
        <button
          onClick={onToggle}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="flex items-center text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"
        >
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
      </Tooltip>
    </div>
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
  collapsed,
  onToggleCollapse,
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
  collapsed: boolean;
  onToggleCollapse: () => void;
}) {
  const categoryEntries = useMemo(() => {
    if (!selectedCategory) return [];
    const cat = categories.find((c) => c.id === selectedCategory);
    if (!cat) return [];
    return cat.termIds
      .map((id) => glossary.find((e) => e.id === id))
      .filter((e): e is GlossaryEntry => e !== undefined);
  }, [selectedCategory]);

  if (collapsed) {
    return (
      <button
        onClick={onToggleCollapse}
        aria-label="Expand sidebar (⌘B)"
        title="Expand sidebar (⌘B)"
        className="group flex h-full w-12 shrink-0 cursor-pointer flex-col items-center border-r border-zinc-200/40 bg-white/40 pt-4 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ease-out hover:bg-zinc-100/60 dark:border-zinc-700/30 dark:bg-zinc-950/30 dark:hover:bg-zinc-800/40"
      >
        <span className="mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sutra-brandmark-black.svg" alt="Sutra" width={24} height={24} className="block dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sutra-brandmark-white.svg" alt="Sutra" width={24} height={24} className="hidden dark:block" />
        </span>
        <span className="mb-3 text-zinc-300 transition-colors group-hover:text-zinc-500 dark:text-zinc-600 dark:group-hover:text-zinc-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
        <span className="text-zinc-300 transition-colors group-hover:text-zinc-500 dark:text-zinc-600 dark:group-hover:text-zinc-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </span>
      </button>
    );
  }

  return (
    <div className="flex h-full w-72 shrink-0 flex-col border-r border-zinc-200/40 bg-white/40 px-5 pt-8 backdrop-blur-2xl backdrop-saturate-150 transition-[width] duration-300 ease-out dark:border-zinc-700/30 dark:bg-zinc-950/30">
      <div className="mb-6 flex items-center justify-between">
        <Wordmark width={64} />
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleCollapse}
            aria-label="Collapse sidebar"
            title="Collapse sidebar (⌘B)"
            className="text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Find a term (e.g. adhyāsa, freedom, atma)"
            className="peer w-full rounded-lg border border-zinc-200/40 bg-white/30 px-3.5 py-2.5 pr-8 text-sm text-zinc-900 placeholder-zinc-400 outline-none backdrop-blur-md transition-all duration-300 focus:border-zinc-300 focus:bg-white/50 focus:shadow-[0_0_0_3px_rgba(161,161,170,0.12)] dark:border-zinc-700/30 dark:bg-zinc-800/20 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:bg-zinc-800/40 dark:focus:shadow-[0_0_0_3px_rgba(161,161,170,0.08)]"
          />
          {query.length > 0 ? (
            <button
              onClick={() => { onQueryChange(""); inputRef.current?.focus(); }}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          ) : (
            <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 rounded border border-zinc-200 bg-zinc-100/60 px-1.5 py-0.5 text-[10px] text-zinc-400 transition-opacity peer-focus:opacity-0 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-500">F</span>
          )}
        </div>

        {results.length > 0 && (
          <ul className="animate-slide-down absolute top-full z-10 mt-1.5 w-full overflow-hidden rounded-lg border border-zinc-200/40 bg-white/50 shadow-lg backdrop-blur-2xl backdrop-saturate-150 dark:border-zinc-700/30 dark:bg-zinc-900/40 dark:shadow-zinc-950/30">
            {results.map((entry, index) => (
              <li key={entry.id} className={index > 0 ? "border-t border-zinc-100 dark:border-zinc-800/60" : ""}>
                <button
                  onClick={() => onSelect(entry)}
                  className={`w-full px-3.5 py-2.5 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/60 ${index === highlightedIndex ? "bg-zinc-50 dark:bg-zinc-800/60" : ""}`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {entry.term}
                    </span>
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                      {entry.devanagari || toDevanagari(entry.term)}
                    </span>
                  </div>
                  <div className="mt-0.5 truncate text-xs text-zinc-400 dark:text-zinc-500">
                    {entry.definition}
                  </div>
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
                className={`rounded-full border px-2.5 py-1 text-[11px] transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                    : "border-transparent text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-400"
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

// --- Full panel (default + expanded) ---

type StickyNote = { id: string; text: string; color: number };

let noteIdCounter = 0;
function nextNoteId() {
  return `note-${Date.now()}-${++noteIdCounter}`;
}

const stickyColors = [
  { bg: "bg-zinc-50 border-zinc-200/80 dark:bg-zinc-800/20 dark:border-zinc-700/30", dot: "bg-zinc-300 dark:bg-zinc-500/70" },
  { bg: "bg-amber-50 border-amber-200/80 dark:bg-amber-950/20 dark:border-amber-800/30", dot: "bg-amber-300 dark:bg-amber-600/70" },
  { bg: "bg-sky-50 border-sky-200/80 dark:bg-sky-950/20 dark:border-sky-800/30", dot: "bg-sky-300 dark:bg-sky-600/70" },
  { bg: "bg-rose-50 border-rose-200/80 dark:bg-rose-950/20 dark:border-rose-800/30", dot: "bg-rose-300 dark:bg-rose-600/70" },
  { bg: "bg-emerald-50 border-emerald-200/80 dark:bg-emerald-950/20 dark:border-emerald-800/30", dot: "bg-emerald-300 dark:bg-emerald-600/70" },
  { bg: "bg-violet-50 border-violet-200/80 dark:bg-violet-950/20 dark:border-violet-800/30", dot: "bg-violet-300 dark:bg-violet-600/70" },
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
          onMouseDown={(e) => e.preventDefault()}
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
            onBlur={(e) => {
              if (e.currentTarget.parentElement?.contains(e.relatedTarget)) return;
              const trimmed = draft.trim();
              if (trimmed && trimmed !== note.text) onEdit(trimmed);
              else setDraft(note.text);
              setEditing(false);
            }}
            rows={2}
            className="w-full resize-none rounded bg-transparent text-xs leading-relaxed text-zinc-600 outline-none dark:text-zinc-300"
          />
          <div className="mt-1.5 flex items-center justify-between md:hidden">
            <ColorPicker selected={note.color} onSelect={(c) => onChangeColor(c)} />
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => { onRemove(); setEditing(false); }}
              className="flex items-center gap-1 text-[10px] text-zinc-400 dark:text-zinc-500"
              aria-label="Delete note"
            >
              <svg width="10" height="10" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Delete
            </button>
          </div>
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
          <Section label="Definition"><DefinitionText text={entry.definition} /></Section>
          {entry.root && <Section label="Root"><RootText text={entry.root} /></Section>}
          {entry.vedantaMeaning && (
            <Section label="Vedantic meaning">{entry.vedantaMeaning}</Section>
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
      <div className="mb-1 text-sm tracking-wide text-zinc-400 dark:text-zinc-600">
        {label}
      </div>
      <div className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}

function RootText({ text }: { text: string }) {
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

function DefinitionText({ text }: { text: string }) {
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

function MwSection({ entryId }: { entryId: string }) {
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
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="animate-fade-in fixed inset-0 z-30 flex items-center justify-center bg-black/20 dark:bg-zinc-950/50" onClick={onClose}>
      <div
        className="animate-slide-down mx-4 max-h-[85dvh] w-full max-w-md overflow-y-auto rounded-xl border border-zinc-200 bg-white p-8 pb-[max(2rem,env(safe-area-inset-bottom))] shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-lg font-light text-zinc-900 dark:text-zinc-100">
            About
          </h2>
          <button onClick={onClose} className={iconButtonClass}>
            <IconClose />
          </button>
        </div>

        <div className="space-y-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Sutra supports your Vedanta study by making Sanskrit terms easy to
            look up, explore, and understand in context.
          </p>

          <div>
            <h3 className="mb-3 text-xs tracking-wide text-zinc-400 dark:text-zinc-600">
              How to use
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 px-3.5 py-3 dark:border-zinc-800/60 dark:bg-zinc-900/40">
                <span className="mb-1 block text-zinc-400 dark:text-zinc-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </span>
                <p className="text-xs leading-snug text-zinc-500 dark:text-zinc-400">Search and open multiple terms side by side</p>
              </div>
              <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 px-3.5 py-3 dark:border-zinc-800/60 dark:bg-zinc-900/40">
                <span className="mb-1 block text-zinc-400 dark:text-zinc-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                </span>
                <p className="text-xs leading-snug text-zinc-500 dark:text-zinc-400">Browse categories by theme</p>
              </div>
              <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 px-3.5 py-3 dark:border-zinc-800/60 dark:bg-zinc-900/40">
                <span className="mb-1 block text-zinc-400 dark:text-zinc-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </span>
                <p className="text-xs leading-snug text-zinc-500 dark:text-zinc-400">Add personal notes to any term</p>
              </div>
              <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 px-3.5 py-3 dark:border-zinc-800/60 dark:bg-zinc-900/40">
                <span className="mb-1 block text-zinc-400 dark:text-zinc-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                </span>
                <p className="text-xs leading-snug text-zinc-500 dark:text-zinc-400">Follow related terms to explore</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-1.5 text-xs tracking-wide text-zinc-400 dark:text-zinc-600">
              Source
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Definitions reflect the traditional Vedantic usage as taught in
              the sampradaya of Shankara&apos;s Advaita Vedanta — not academic
              or dictionary Sanskrit. They are drawn from the glossary used by
              Pujya Swami Dayananda Saraswati in his three-year course in
              Vedanta and Sanskrit. The glossary (5th edition, 2013) was
              compiled and edited by John Warne and is available through the
              Arsha Vidya Gurukulam bookstore in Saylorsburg, Pennsylvania.
            </p>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              Extended definitions and etymological data are from{" "}
              <em>A Sanskrit-English Dictionary</em> by Sir Monier Monier-Williams (1899),
              digitized by the Cologne Digital Sanskrit Dictionaries project.
              Licensed under CC BY-NC-SA 3.0.
            </p>
          </div>

          <div>
            <h3 className="mb-1.5 text-xs tracking-wide text-zinc-400 dark:text-zinc-600">
              Search &amp; transliteration
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Search supports IAST transliteration (e.g. ātmā), common English
              spellings (e.g. atma), and Devanāgarī. You can type without
              diacritics and still find what you&apos;re looking for.
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
          className={`rounded-full border px-3.5 py-1.5 text-xs transition-all duration-200 ${
            selected === cat.id
              ? "border-zinc-400 bg-zinc-100 text-zinc-800 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-200"
              : "border-zinc-200 text-zinc-400 hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700/60 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
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
      className="group rounded-lg border border-zinc-200 px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50 dark:hover:shadow-zinc-950/30"
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

// --- Mobile detection ---

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mq.matches);
    function onChange(e: MediaQueryListEvent) {
      setIsMobile(e.matches);
    }
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

// --- Shared state (persists across mobile/desktop transitions) ---

type SharedEntryState = {
  openEntries: GlossaryEntry[];
  setOpenEntries: React.Dispatch<React.SetStateAction<GlossaryEntry[]>>;
  notes: Record<string, StickyNote[]>;
  handleAddNote: (id: string, text: string, color: number) => void;
  handleRemoveNote: (id: string, index: number) => void;
  handleChangeNoteColor: (id: string, index: number, color: number) => void;
  handleEditNote: (id: string, index: number, text: string) => void;
};

function useNotes() {
  const [notes, setNotes] = useState<Record<string, StickyNote[]>>({});

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

  return { notes, handleAddNote, handleRemoveNote, handleChangeNoteColor, handleEditNote };
}

// --- Mobile detail view ---

function MobileDetailView({
  entry,
  openEntries,
  onBack,
  onSwitchTo,
  onClose,
  onSelectTerm,
  notes,
  onAddNote,
  onRemoveNote,
  onChangeNoteColor,
  onEditNote,
}: {
  entry: GlossaryEntry;
  openEntries: GlossaryEntry[];
  onBack: () => void;
  onSwitchTo: (entry: GlossaryEntry) => void;
  onClose: (id: string) => void;
  onSelectTerm: (entry: GlossaryEntry) => void;
  notes: StickyNote[];
  onAddNote: (id: string, text: string, color: number) => void;
  onRemoveNote: (id: string, index: number) => void;
  onChangeNoteColor: (id: string, index: number, color: number) => void;
  onEditNote: (id: string, index: number, text: string) => void;
}) {
  const tabsRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view
  useEffect(() => {
    const container = tabsRef.current;
    if (!container) return;
    const active = container.querySelector("[data-active='true']") as HTMLElement | null;
    if (active) {
      active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [entry.id]);

  return (
    <div className="flex min-h-full flex-col bg-white dark:bg-zinc-950">
      <div className="sticky top-0 z-10 border-b border-zinc-100 bg-white/80 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/80">
        <div
          ref={tabsRef}
          className="flex items-center gap-1.5 overflow-x-auto px-3 py-2.5 scrollbar-none"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          {/* Brandmark — tap to go home */}
          <button onClick={onBack} aria-label="Back to search" className="shrink-0 pr-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sutra-brandmark-black.svg" alt="Sutra" width={20} height={20} className="block dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sutra-brandmark-white.svg" alt="Sutra" width={20} height={20} className="hidden dark:block" />
          </button>

          {/* Search button */}
          <button
            onClick={onBack}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-200/60 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700/40 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            Search
          </button>

          {/* Open term tabs */}
          {openEntries.map((e) => {
            const isActive = e.id === entry.id;
            return (
              <div
                key={e.id}
                data-active={isActive}
                className={`flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-xs transition-all ${
                  isActive
                    ? "border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                    : "border-zinc-200/60 text-zinc-400 hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700/40 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
                }`}
              >
                <button
                  onClick={() => onSwitchTo(e)}
                  className="max-w-[7rem] truncate"
                >
                  {e.term}
                </button>
                <button
                  onClick={(ev) => { ev.stopPropagation(); onClose(e.id); }}
                  className="ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100"
                  aria-label={`Close ${e.term}`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1 px-5 pt-6 pb-8">
        <div className="mb-8">
          <div className="font-mono text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
            {entry.devanagari || toDevanagari(entry.term)}
          </div>
          <div className="mt-2 text-lg text-zinc-400 dark:text-zinc-500">
            {entry.term}
          </div>
        </div>

        <div className="space-y-6">
          <Section label="Definition"><DefinitionText text={entry.definition} /></Section>
          {entry.root && <Section label="Root"><RootText text={entry.root} /></Section>}
          {entry.vedantaMeaning && (
            <Section label="Vedantic meaning">{entry.vedantaMeaning}</Section>
          )}
          {entry.relatedTerms && entry.relatedTerms.length > 0 && (
            <div>
              <div className="mb-1.5 text-sm tracking-wide text-zinc-400 dark:text-zinc-600">
                Related terms
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-base leading-relaxed">
                {entry.relatedTerms.map((term) => {
                  const linked = findByTerm(term);
                  if (linked) {
                    return (
                      <button
                        key={term}
                        onClick={() => onSelectTerm(linked)}
                        className="text-zinc-600 underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-zinc-100"
                      >
                        {term}
                      </button>
                    );
                  }
                  return (
                    <span key={term} className="text-zinc-400 dark:text-zinc-500">
                      {term}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
          <MwSection entryId={entry.id} />
        </div>

        <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800/60">
          <NotesArea
            entryId={entry.id}
            notes={notes}
            onAdd={onAddNote}
            onRemove={onRemoveNote}
            onChangeColor={onChangeNoteColor}
            onEdit={onEditNote}
          />
        </div>
      </div>
    </div>
  );
}

// --- Mobile app ---

function MobileHome({ openEntries, setOpenEntries, notes, handleAddNote, handleRemoveNote, handleChangeNoteColor, handleEditNote }: SharedEntryState) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("core");
  const [showInfo, setShowInfo] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { dark, toggle } = useTheme();
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const results = useMemo(() => searchGlossary(query), [query]);
  const activeEntry = openEntries.find((e) => e.id === activeId) || null;

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [results]);

  const handleSelect = useCallback((entry: GlossaryEntry) => {
    setOpenEntries((prev) => {
      if (prev.some((e) => e.id === entry.id)) return prev;
      return [...prev, entry];
    });
    setActiveId(entry.id);
    setQuery("");
  }, []);

  const handleClose = useCallback((id: string) => {
    setOpenEntries((prev) => {
      const next = prev.filter((e) => e.id !== id);
      if (activeId === id) {
        // Switch to the previous tab, or go back to search
        const closedIndex = prev.findIndex((e) => e.id === id);
        if (next.length === 0) {
          setActiveId(null);
        } else {
          const newIndex = Math.min(closedIndex, next.length - 1);
          setActiveId(next[newIndex].id);
        }
      }
      return next;
    });
  }, [activeId]);

  const [focusOnBack, setFocusOnBack] = useState(false);

  const handleBack = useCallback(() => {
    setActiveId(null);
    setFocusOnBack(true);
  }, []);

  useEffect(() => {
    if (focusOnBack && !activeEntry) {
      inputRef.current?.focus();
      setFocusOnBack(false);
    }
  }, [focusOnBack, activeEntry]);

  // Global keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      const isInput = tag === "INPUT" || tag === "TEXTAREA";

      if (e.key === "i" && !isInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setShowInfo((prev) => !prev);
        return;
      }

      if (e.key === "o" && !isInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        toggle();
        return;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (results.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        e.preventDefault();
        handleSelect(results[highlightedIndex]);
      }
    },
    [results, highlightedIndex, handleSelect],
  );

  const categoryEntries = useMemo(() => {
    if (!selectedCategory) return [];
    const cat = categories.find((c) => c.id === selectedCategory);
    if (!cat) return [];
    return cat.termIds
      .map((id) => glossary.find((e) => e.id === id))
      .filter((e): e is GlossaryEntry => e !== undefined);
  }, [selectedCategory]);

  // Detail view
  if (activeEntry) {
    return (
      <>
        {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}
        <MobileDetailView
          entry={activeEntry}
          openEntries={openEntries}
          onBack={handleBack}
          onSwitchTo={(e) => setActiveId(e.id)}
          onClose={handleClose}
          onSelectTerm={handleSelect}
          notes={notes[activeEntry.id] || []}
          onAddNote={handleAddNote}
          onRemoveNote={handleRemoveNote}
          onChangeNoteColor={handleChangeNoteColor}
          onEditNote={handleEditNote}
        />
      </>
    );
  }

  // Browse view
  return (
    <div className="flex min-h-full flex-col bg-white font-sans dark:bg-zinc-950">
      {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}

      <div className="sticky top-0 z-10 border-b border-zinc-100/80 bg-white/80 px-4 pb-3 pt-4 backdrop-blur-xl dark:border-zinc-800/40 dark:bg-zinc-950/80">
        <div className="mb-3 flex items-center justify-between">
          <Wordmark width={80} />
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowInfo(true)}
              aria-label="About Sutra"
              className="text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"
            >
              <IconInfo />
            </button>
            <button
              onClick={toggle}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"
            >
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
          </div>
        </div>

        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value.length > 0) setSelectedCategory(null);
            }}
            onKeyDown={handleSearchKeyDown}
            placeholder="Find a term (e.g. adhyāsa, freedom, atma)"
            className="w-full rounded-lg border border-zinc-200/60 bg-zinc-50/80 px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-zinc-300 focus:bg-white focus:shadow-[0_0_0_3px_rgba(161,161,170,0.08)] dark:border-zinc-700/40 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-600 dark:focus:bg-zinc-900"
          />
          {query.length > 0 && (
            <button
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          )}
        </div>

        {/* Open term tabs */}
        {openEntries.length > 0 && (
          <div
            className="mt-2.5 flex gap-1.5 overflow-x-auto scrollbar-none"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
          >
            {openEntries.map((e) => (
              <div
                key={e.id}
                className="flex shrink-0 items-center gap-1 rounded-full border border-zinc-200/60 px-2.5 py-1 text-xs text-zinc-400 transition-all hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700/40 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
              >
                <button
                  onClick={() => setActiveId(e.id)}
                  className="max-w-[7rem] truncate"
                >
                  {e.term}
                </button>
                <button
                  onClick={() => handleClose(e.id)}
                  className="ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100"
                  aria-label={`Close ${e.term}`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 px-4 pt-4 pb-8">
        {/* Search results */}
        {query.length > 0 && results.length > 0 && (
          <div className="animate-fade-in space-y-1">
            {results.map((entry, index) => (
              <button
                key={entry.id}
                onClick={() => handleSelect(entry)}
                className={`w-full rounded-lg px-4 py-3 text-left transition-colors ${index === highlightedIndex ? "bg-zinc-50 dark:bg-zinc-900/50" : "hover:bg-zinc-50 dark:hover:bg-zinc-900/50"}`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {entry.term}
                  </span>
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    {entry.devanagari || toDevanagari(entry.term)}
                  </span>
                </div>
                <div className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
                  {entry.definition.length > 80 ? entry.definition.slice(0, 80) + "…" : entry.definition}
                </div>
              </button>
            ))}
          </div>
        )}

        {query.length > 0 && results.length === 0 && (
          <p className="animate-fade-in px-4 pt-6 text-sm text-zinc-400 dark:text-zinc-500">
            No results for &ldquo;{query}&rdquo;
          </p>
        )}

        {/* Categories */}
        {query.length === 0 && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? "border-zinc-400 bg-zinc-100 text-zinc-800 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-200"
                      : "border-zinc-200 text-zinc-400 hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700/60 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {selectedCategory && (
              <div className="animate-fade-in">
                {(() => {
                  const cat = categories.find((c) => c.id === selectedCategory);
                  return cat ? (
                    <>
                      <p className="mb-3 text-xs text-zinc-400 dark:text-zinc-600">
                        {cat.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2.5">
                        {categoryEntries.map((entry) => (
                          <button
                            key={entry.id}
                            onClick={() => handleSelect(entry)}
                            className="rounded-lg border border-zinc-200 px-3.5 py-3 text-left transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50"
                          >
                            <div className="font-mono text-sm text-zinc-400 dark:text-zinc-500">
                              {entry.devanagari || toDevanagari(entry.term)}
                            </div>
                            <div className="mt-0.5 text-sm text-zinc-700 dark:text-zinc-200">
                              {entry.term}
                            </div>
                            <div className="mt-1 text-[11px] leading-snug text-zinc-400 dark:text-zinc-600">
                              {entry.definition.length > 60 ? entry.definition.slice(0, 60) + "…" : entry.definition}
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : null;
                })()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Main ---

export default function Home() {
  const isMobile = useIsMobile();
  const [openEntries, setOpenEntries] = useState<GlossaryEntry[]>([]);
  const notesBundle = useNotes();

  const shared: SharedEntryState = { openEntries, setOpenEntries, ...notesBundle };

  if (isMobile === null) return null;
  if (isMobile) return <MobileHome {...shared} />;

  return <DesktopHome {...shared} />;
}

function DesktopHome({ openEntries, setOpenEntries, notes, handleAddNote, handleRemoveNote, handleChangeNoteColor, handleEditNote }: SharedEntryState) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("core");
  const [showInfo, setShowInfo] = useState(false);
  const [panelStates, setPanelStates] = useState<Record<string, PanelState>>(
    {},
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const panelContainerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const { dark, toggle } = useTheme();
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dropIndex, setDropIndex] = useState<number | null>(null);
  const [dropSide, setDropSide] = useState<"left" | "right">("left");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [highlightedPanelId, setHighlightedPanelId] = useState<string | null>(null);
  const newPanelIds = useRef<Set<string>>(new Set());

  const results = useMemo(() => searchGlossary(query), [query]);
  const hasPanels = openEntries.length > 0;
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [results]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [hasPanels]);

  // Global keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      const isInput = tag === "INPUT" || tag === "TEXTAREA";

      // "f" — focus search (only when not typing in an input)
      if (e.key === "f" && !isInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        if (sidebarCollapsed && hasPanels) setSidebarCollapsed(false);
        requestAnimationFrame(() => inputRef.current?.focus());
        return;
      }

      // Cmd/Ctrl+B — toggle sidebar (only in panel view)
      if ((e.metaKey || e.ctrlKey) && e.key === "b" && hasPanels) {
        e.preventDefault();
        setSidebarCollapsed((prev) => !prev);
        return;
      }

      // Escape — blur search or collapse sidebar
      if (e.key === "Escape" && hasPanels) {
        if (isInput && document.activeElement === inputRef.current) {
          inputRef.current?.blur();
        } else if (!sidebarCollapsed) {
          setSidebarCollapsed(true);
        }
        return;
      }

      // "i" — toggle about modal (only when not typing)
      if (e.key === "i" && !isInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setShowInfo((prev) => !prev);
        return;
      }

      // "o" — toggle dark mode (only when not typing)
      if (e.key === "o" && !isInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        toggle();
        return;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [hasPanels, sidebarCollapsed, toggle]);

  const triggerHighlight = useCallback((id: string) => {
    setHighlightedPanelId(id);
  }, []);

  // Scroll a panel into the visible area (accounting for sidebar overlay)
  const scrollPanelIntoView = useCallback((el: HTMLDivElement) => {
    const container = panelContainerRef.current;
    if (!container) return;
    const sidebarWidth = parseFloat(getComputedStyle(container).paddingLeft);
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const visibleLeft = containerRect.left + sidebarWidth;
    const visibleRight = containerRect.right;

    if (elRect.left < visibleLeft) {
      // Panel is hidden behind sidebar — scroll left
      container.scrollBy({ left: elRect.left - visibleLeft - 16, behavior: "smooth" });
    } else if (elRect.right > visibleRight) {
      // Panel is off-screen to the right — scroll right
      container.scrollBy({ left: elRect.right - visibleRight + 16, behavior: "smooth" });
    }
  }, []);

  const handleSelect = useCallback(
    (entry: GlossaryEntry) => {
      const existing = openEntries.find((e) => e.id === entry.id);
      if (existing) {
        // Restore if collapsed, scroll to it, then highlight
        setPanelStates((prev) => {
          if (prev[entry.id] === "collapsed") {
            return { ...prev, [entry.id]: "default" };
          }
          return prev;
        });
        const el = panelRefs.current.get(entry.id);
        if (el) scrollPanelIntoView(el);
        triggerHighlight(entry.id);
      } else {
        newPanelIds.current.add(entry.id);
        setOpenEntries((prev) => [...prev, entry]);
        setPanelStates((prev) => ({ ...prev, [entry.id]: "default" }));
        requestAnimationFrame(() => {
          const el = panelRefs.current.get(entry.id);
          if (el) scrollPanelIntoView(el);
        });
      }
      setQuery("");
    },
    [openEntries, triggerHighlight],
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
    (e: React.DragEvent, targetIndex: number) => {
      e.preventDefault();
      if (dragIndex === null || targetIndex === dragIndex) {
        setDragIndex(null);
        setDropIndex(null);
        return;
      }
      setOpenEntries((prev) => {
        const next = [...prev];
        const [moved] = next.splice(dragIndex, 1);
        let insertAt = targetIndex > dragIndex ? targetIndex - 1 : targetIndex;
        if (dropSide === "right") insertAt += 1;
        next.splice(insertAt, 0, moved);
        return next;
      });
      setDragIndex(null);
      setDropIndex(null);
    },
    [dragIndex, dropSide],
  );

  const handleDragEnd = useCallback(() => {
    setDragIndex(null);
    setDropIndex(null);
  }, []);

  // Landing state — no panels open
  if (!hasPanels) {
    return (
      <div className="flex flex-1 flex-col items-center justify-start bg-white font-sans dark:bg-zinc-950">
        <TopBar dark={dark} onToggle={toggle} onInfoClick={() => setShowInfo(true)} />
        {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}
        <main className="flex w-full max-w-2xl flex-col items-center px-6 pt-32 pb-16">
          <div className="mb-10 flex flex-col items-center">
            <span className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sutra-brandmark-black.svg" alt="" width={64} height={64} className="block dark:hidden" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/sutra-brandmark-white.svg" alt="" width={64} height={64} className="hidden dark:block" />
            </span>
            <Wordmark width={120} />
            <p className="mt-3 text-sm text-zinc-400 dark:text-zinc-600">
              Look up Sanskrit terms with clarity
            </p>
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
              placeholder="Find a term (e.g. adhyāsa, freedom, atma)"
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/80 px-5 py-3.5 text-base text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-300 focus:border-zinc-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(161,161,170,0.1)] dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:bg-zinc-900 dark:focus:shadow-[0_0_0_3px_rgba(161,161,170,0.08)]"
            />

            {results.length > 0 && (
              <ul className="animate-slide-down absolute top-full z-10 mt-2 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700/60 dark:bg-zinc-900 dark:shadow-zinc-950/30">
                {results.map((entry, index) => (
                  <li key={entry.id} className={index > 0 ? "border-t border-zinc-100 dark:border-zinc-800/60" : ""}>
                    <button
                      onClick={() => handleSelect(entry)}
                      className={`flex w-full items-baseline gap-3 px-5 py-3 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/60 ${index === highlightedIndex ? "bg-zinc-50 dark:bg-zinc-800/60" : ""}`}
                    >
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {entry.term}
                      </span>
                      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                        {entry.devanagari || toDevanagari(entry.term)}
                      </span>
                      <span className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                        {entry.definition.length > 50
                          ? entry.definition.slice(0, 50) + "…"
                          : entry.definition}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {query.length > 0 && results.length === 0 && (
              <div className="animate-fade-in mt-6">
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
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
    <div className="relative flex h-full min-h-0 flex-1 overflow-hidden bg-white font-sans dark:bg-zinc-950">
      <TopBar dark={dark} onToggle={toggle} onInfoClick={() => setShowInfo(true)} />
      {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}

      {/* Sidebar overlays the panel area for glass effect */}
      <div className="absolute inset-y-0 left-0 z-10">
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
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        />
      </div>

      <div
        ref={panelContainerRef}
        className={`flex min-h-0 flex-1 items-stretch gap-3 overflow-x-auto p-4 pr-24 transition-[padding] duration-300 ease-out ${sidebarCollapsed ? "pl-16" : "pl-[19rem]"}`}
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
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              className={`relative cursor-grab transition-all duration-200 active:cursor-grabbing ${isDragging ? "opacity-30 scale-[0.97]" : ""} ${newPanelIds.current.has(entry.id) ? "animate-slide-in-right" : ""} ${highlightedPanelId === entry.id ? "animate-panel-highlight" : ""}`}
              onAnimationEnd={(e) => {
                if (e.animationName === "slide-in-right") {
                  newPanelIds.current.delete(entry.id);
                }
                if (e.animationName === "panel-highlight" || e.animationName === "panel-highlight-dark") {
                  setHighlightedPanelId(null);
                }
              }}
            >
              {showLeftLine && (
                <div className="absolute -left-4 top-1 bottom-1 w-4 rounded-lg bg-zinc-300/60 dark:bg-zinc-500/45 animate-fade-in shadow-[0_0_12px_rgba(161,161,170,0.3)] dark:shadow-[0_0_12px_rgba(161,161,170,0.15)]" />
              )}
              {showRightLine && (
                <div className="absolute -right-4 top-1 bottom-1 w-4 rounded-lg bg-zinc-300/60 dark:bg-zinc-500/45 animate-fade-in shadow-[0_0_12px_rgba(161,161,170,0.3)] dark:shadow-[0_0_12px_rgba(161,161,170,0.15)]" />
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
