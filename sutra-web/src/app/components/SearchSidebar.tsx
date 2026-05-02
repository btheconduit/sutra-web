"use client";

import { useMemo } from "react";
import { glossaryById, type GlossaryEntry } from "../data/glossary";
import { toDevanagari } from "../data/devanagari";
import { categories } from "../data/categories";
import { Wordmark } from "./Icons";

export function SearchSidebar({
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
      .map((id) => glossaryById.get(id))
      .filter((e): e is GlossaryEntry => e !== undefined);
  }, [selectedCategory]);

  return (
    <div
      className={`flex h-full shrink-0 flex-col overflow-hidden border-r border-zinc-200/40 bg-white/40 backdrop-blur-2xl backdrop-saturate-150 transition-[width] duration-300 ease-out dark:border-zinc-700/30 dark:bg-zinc-950/30 ${collapsed ? "w-12" : "w-72"}`}
    >
      {collapsed ? (
        <button
          onClick={onToggleCollapse}
          aria-label="Expand sidebar (⌘B)"
          title="Expand sidebar (⌘B)"
          className="group flex h-full w-12 shrink-0 cursor-pointer flex-col items-center pt-4 transition-colors hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40"
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
          <span className="text-zinc-300 dark:text-zinc-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </span>
        </button>
      ) : (
        <div className="flex h-full w-72 flex-col">
          <div className="flex items-center justify-between px-5 pt-4 pb-3">
            <button onClick={onInfoClick}>
              <Wordmark width={80} />
            </button>
            <button
              onClick={onToggleCollapse}
              aria-label="Collapse sidebar (⌘B)"
              title="Collapse sidebar (⌘B)"
              className="text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-600 dark:hover:text-zinc-400"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          </div>

          <div className="px-4 pb-3">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  onQueryChange(e.target.value);
                  if (e.target.value.length > 0) onCategorySelect(null);
                }}
                onKeyDown={onKeyDown}
                placeholder="Find a term..."
                className="peer w-full rounded-lg border border-zinc-200/60 bg-zinc-50/80 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-zinc-300 focus:bg-white focus:shadow-[0_0_0_3px_rgba(161,161,170,0.08)] dark:border-zinc-700/40 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-600 dark:focus:bg-zinc-900"
              />
              {query.length === 0 && (
                <kbd className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rounded border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400 peer-focus:hidden dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500">
                  F
                </kbd>
              )}
              {query.length > 0 && (
                <button
                  onClick={() => { onQueryChange(""); inputRef.current?.focus(); }}
                  aria-label="Clear search"
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-2 pb-4">
            {query.length > 0 && results.length > 0 && (
              <div className="animate-fade-in space-y-0.5">
                {results.map((entry, index) => (
                  <button
                    key={entry.id}
                    onClick={() => onSelect(entry)}
                    className={`w-full rounded-md px-3 py-2 text-left transition-colors ${index === highlightedIndex ? "bg-zinc-100 dark:bg-zinc-800/60" : "hover:bg-zinc-50 dark:hover:bg-zinc-800/40"}`}
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
                      {entry.definition.length > 60 ? entry.definition.slice(0, 60) + "..." : entry.definition}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {query.length > 0 && results.length === 0 && (
              <p className="animate-fade-in px-3 pt-4 text-sm text-zinc-400 dark:text-zinc-500">
                No results for &ldquo;{query}&rdquo;
              </p>
            )}

            {query.length === 0 && (
              <div className="space-y-3 px-2 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => onCategorySelect(selectedCategory === cat.id ? null : cat.id)}
                      className={`rounded-full border px-2.5 py-1 text-[11px] transition-all duration-200 ${
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
                  <div className="animate-fade-in space-y-1.5">
                    {categoryEntries.map((entry) => (
                      <button
                        key={entry.id}
                        onClick={() => onSelect(entry)}
                        className="w-full rounded-md px-3 py-2 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                      >
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-zinc-700 dark:text-zinc-200">{entry.term}</span>
                          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                            {entry.devanagari || toDevanagari(entry.term)}
                          </span>
                        </div>
                        <div className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
                          {entry.definition.length > 60 ? entry.definition.slice(0, 60) + "..." : entry.definition}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
