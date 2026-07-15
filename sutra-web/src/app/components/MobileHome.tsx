"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import type { User } from "@supabase/supabase-js";
import type { GlossaryEntry } from "../data/glossary";
import { categories, getCategoryEntries } from "../data/categories";
import type { StickyNote, SharedEntryState } from "../types";
import { searchGlossary } from "../lib/search";
import { useTheme, countNotes } from "../hooks";
import { IconInfo, IconUser, IconCopy, IconShare, IconSun, IconMoon, Wordmark, iconButtonClass } from "./Icons";
import { NotesList, NoteComposer } from "./Notes";
import { EntryBody } from "./EntryBody";
import { truncate, displayDevanagari, copyEntryText, copyEntryLink } from "../lib/format";
import { MobileAuthDropdown } from "./Auth";
import { InfoPanel } from "./InfoPanel";

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
  user,
  onSignInClick,
  showToast,
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
  user: User | null;
  onSignInClick: () => void;
  showToast: (message: string) => void;
}) {
  const tabsRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef<{ x: number; y: number } | null>(null);

  const handleCopy = useCallback(() => copyEntryText(entry, showToast), [entry, showToast]);

  const handleShare = useCallback(() => {
    if (typeof navigator.share === "function") {
      const url = `${window.location.origin}/t/${entry.id}`;
      navigator.share({ title: entry.term, url }).catch(() => {});
    } else {
      copyEntryLink(entry, showToast);
    }
  }, [entry, showToast]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchRef.current) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    const dy = e.changedTouches[0].clientY - touchRef.current.y;
    touchRef.current = null;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const idx = openEntries.findIndex((o) => o.id === entry.id);
    if (dx < 0 && idx < openEntries.length - 1) onSwitchTo(openEntries[idx + 1]);
    else if (dx > 0 && idx > 0) onSwitchTo(openEntries[idx - 1]);
  }, [entry.id, openEntries, onSwitchTo]);

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
          <button onClick={onBack} aria-label="Back to search" className="shrink-0 pr-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sutra-brandmark-black.svg" alt="Sutra" width={20} height={20} className="block dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sutra-brandmark-white.svg" alt="Sutra" width={20} height={20} className="hidden dark:block" />
          </button>

          <button
            onClick={onBack}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-200/60 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700/40 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            Search
          </button>

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

      <div className="flex-1 px-5 pt-6 pb-8" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-mono text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
                {displayDevanagari(entry)}
              </div>
              <div className="mt-2 text-lg text-zinc-400 dark:text-zinc-500">
                {entry.term}
              </div>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <button onClick={handleCopy} aria-label="Copy entry text" className={`${iconButtonClass} p-2`}>
                <IconCopy className="size-5" />
              </button>
              <button onClick={handleShare} aria-label="Share" className={`${iconButtonClass} p-2`}>
                <IconShare className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <EntryBody entry={entry} onSelectTerm={onSelectTerm} />

        <div className="mt-8 space-y-3 border-t border-zinc-100 pt-6 dark:border-zinc-800/60">
          <NotesList
            entryId={entry.id}
            notes={notes}
            onRemove={onRemoveNote}
            onChangeColor={onChangeNoteColor}
            onEdit={onEditNote}
          />
          <NoteComposer
            entryId={entry.id}
            notesCount={notes.length}
            onAdd={onAddNote}
            user={user}
            onSignInClick={onSignInClick}
          />
        </div>
      </div>
    </div>
  );
}

export function MobileHome({ openEntries, setOpenEntries, notes, syncStatus, handleAddNote, handleRemoveNote, handleChangeNoteColor, handleEditNote, user, showToast }: SharedEntryState) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("core");
  const [showInfo, setShowInfo] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { dark, toggle } = useTheme();
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleSignInClick = useCallback(() => setShowAuth(true), []);

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

  const categoryEntries = useMemo(() => getCategoryEntries(selectedCategory), [selectedCategory]);

  const noteCount = countNotes(notes);

  const authModal = showAuth ? (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm" onClick={() => setShowAuth(false)}>
      <div
        className="w-full max-w-lg animate-fade-in rounded-t-2xl border-t border-zinc-200/60 bg-white px-6 pb-8 pt-6 shadow-xl dark:border-zinc-700/40 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-zinc-200 dark:bg-zinc-700" />
        <MobileAuthDropdown user={user} onClose={() => setShowAuth(false)} noteCount={noteCount} syncStatus={syncStatus} />
      </div>
    </div>
  ) : null;

  if (activeEntry) {
    return (
      <>
        {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}
        {authModal}
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
          user={user}
          onSignInClick={handleSignInClick}
          showToast={showToast}
        />
      </>
    );
  }

  return (
    <div className="flex min-h-full flex-col bg-white font-sans dark:bg-zinc-950">
      {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}
      {authModal}

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
              {dark ? <IconSun /> : <IconMoon />}
            </button>
            <button
              onClick={() => setShowAuth(!showAuth)}
              aria-label={user ? "Account" : "Sign in"}
              className={`relative transition-colors ${user ? "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200" : "text-zinc-300 hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"}`}
            >
              <IconUser />
              {user && syncStatus === "pending" && (
                <span
                  className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-amber-400/80 dark:bg-amber-500/80"
                  title="Notes will sync when back online"
                  aria-label="Notes pending sync"
                />
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
            placeholder="Find a term (e.g. sat, cit, ānanda)"
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
                    {displayDevanagari(entry)}
                  </span>
                </div>
                <div className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
                  {truncate(entry.definition, 80)}
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
                              {displayDevanagari(entry)}
                            </div>
                            <div className="mt-0.5 text-sm text-zinc-700 dark:text-zinc-200">
                              {entry.term}
                            </div>
                            <div className="mt-1 text-[11px] leading-snug text-zinc-400 dark:text-zinc-600">
                              {truncate(entry.definition, 60)}
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
