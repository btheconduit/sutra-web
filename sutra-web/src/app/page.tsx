"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { glossary, type GlossaryEntry } from "./data/glossary";
import { toDevanagari } from "./data/devanagari";

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

  const exact: GlossaryEntry[] = [];
  const startsWith: GlossaryEntry[] = [];
  const contains: GlossaryEntry[] = [];

  for (const entry of glossary) {
    const n = normalize(entry.term);
    if (n === q) {
      exact.push(entry);
    } else if (n.startsWith(q)) {
      startsWith.push(entry);
    } else if (n.includes(q)) {
      contains.push(entry);
    }
  }

  return [...exact, ...startsWith, ...contains];
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
}: {
  query: string;
  onQueryChange: (q: string) => void;
  results: GlossaryEntry[];
  onSelect: (entry: GlossaryEntry) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  highlightedIndex: number;
  onKeyDown: (e: React.KeyboardEvent) => void;
}) {
  return (
    <div className="flex h-full w-72 shrink-0 flex-col border-r border-zinc-200 bg-white px-5 pt-8 dark:border-zinc-800/50 dark:bg-black">
      <div className="mb-1">
        <Wordmark width={64} />
      </div>
      <p className="mb-6 text-xs text-zinc-400 dark:text-zinc-600">
        Sanskrit lookup for Vedanta study
      </p>

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

function WordPanel({
  entry,
  panelState,
  onClose,
  onCollapse,
  onToggleExpand,
  onSelectTerm,
}: {
  entry: GlossaryEntry;
  panelState: "default" | "expanded";
  onClose: () => void;
  onCollapse: () => void;
  onToggleExpand: () => void;
  onSelectTerm: (entry: GlossaryEntry) => void;
}) {
  const expanded = panelState === "expanded";

  return (
    <div
      className={`${expanded ? "w-[32rem]" : "w-80"} h-full shrink-0 overflow-y-auto rounded-lg border border-zinc-200 bg-white p-6 transition-[width] duration-300 ease-out dark:border-zinc-700/60 dark:bg-zinc-900/50`}
    >
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

// --- Main ---

export default function Home() {
  const [query, setQuery] = useState("");
  const [openEntries, setOpenEntries] = useState<GlossaryEntry[]>([]);
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

  const results = useMemo(() => searchGlossary(query), [query]);
  const hasPanels = openEntries.length > 0;
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [results]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [hasPanels]);

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
        <main className="flex w-full max-w-2xl flex-col items-center px-6 pt-32 pb-16">
          <div className="mb-2">
            <Wordmark width={120} />
          </div>
          <p className="mb-12 text-sm text-zinc-500">
            Sanskrit lookup for Vedanta study
          </p>

          <div className="relative w-full">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
            <p className="mt-16 max-w-sm text-center text-sm leading-relaxed text-zinc-300 dark:text-zinc-700">
              A quiet tool for finding Sanskrit terms in context, so you can
              return to study without distraction.
            </p>
          )}
        </main>
      </div>
    );
  }

  // Panel state — search sidebar + horizontal panels
  return (
    <div className="flex h-full flex-1 bg-white font-sans dark:bg-black">
      <ThemeToggle dark={dark} onToggle={toggle} />

      <SearchSidebar
        query={query}
        onQueryChange={setQuery}
        results={results}
        onSelect={handleSelect}
        inputRef={inputRef}
        highlightedIndex={highlightedIndex}
        onKeyDown={handleSearchKeyDown}
      />

      <div
        ref={panelContainerRef}
        className="flex flex-1 items-stretch gap-3 overflow-x-auto p-4"
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
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
