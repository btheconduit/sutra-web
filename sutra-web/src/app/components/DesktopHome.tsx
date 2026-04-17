"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import type { GlossaryEntry } from "../data/glossary";
import { toDevanagari } from "../data/devanagari";
import { categories } from "../data/categories";
import type { PanelState, SharedEntryState } from "../types";
import { searchGlossary } from "../lib/search";
import { useTheme } from "../hooks";
import { Wordmark } from "./Icons";
import { TopBar } from "./Auth";
import { InfoPanel } from "./InfoPanel";
import { SearchSidebar } from "./SearchSidebar";
import { CategoryBlocks, CategoryTermCards } from "./Categories";
import { CollapsedPanel, WordPanel } from "./WordPanel";

export function DesktopHome({ openEntries, setOpenEntries, notes, handleAddNote, handleRemoveNote, handleChangeNoteColor, handleEditNote, user }: SharedEntryState) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("core");
  const [showInfo, setShowInfo] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const handleSignInClick = useCallback(() => setShowAuth(true), []);
  const [panelStates, setPanelStates] = useState<Record<string, PanelState>>(() => {
    try {
      const saved = localStorage.getItem("sutra-panel-states");
      if (saved) return JSON.parse(saved) as Record<string, PanelState>;
    } catch { /* ignore */ }
    return {};
  });

  const prevPanelUserRef = useRef<string | undefined>(undefined);
  useEffect(() => {
    const prev = prevPanelUserRef.current;
    const current = user?.id;
    if (!prev && current) {
      try {
        const saved = localStorage.getItem(`sutra-panel-states-${current}`);
        if (saved) setPanelStates(JSON.parse(saved) as Record<string, PanelState>);
      } catch { /* ignore */ }
    }
    prevPanelUserRef.current = current;
  }, [user?.id]);

  useEffect(() => {
    localStorage.setItem("sutra-panel-states", JSON.stringify(panelStates));
    if (user?.id) localStorage.setItem(`sutra-panel-states-${user.id}`, JSON.stringify(panelStates));
  }, [panelStates, user?.id]);

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

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      const isInput = tag === "INPUT" || tag === "TEXTAREA";

      if (e.key === "f" && !isInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        if (sidebarCollapsed && hasPanels) setSidebarCollapsed(false);
        requestAnimationFrame(() => inputRef.current?.focus());
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key === "b" && hasPanels) {
        e.preventDefault();
        setSidebarCollapsed((prev) => !prev);
        return;
      }

      if (e.key === "Escape" && hasPanels) {
        if (isInput && document.activeElement === inputRef.current) {
          inputRef.current?.blur();
        } else if (!sidebarCollapsed) {
          setSidebarCollapsed(true);
        }
        return;
      }

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
  }, [hasPanels, sidebarCollapsed, toggle]);

  const triggerHighlight = useCallback((id: string) => {
    setHighlightedPanelId(id);
  }, []);

  const scrollPanelIntoView = useCallback((el: HTMLDivElement) => {
    const container = panelContainerRef.current;
    if (!container) return;
    const sidebarWidth = parseFloat(getComputedStyle(container).paddingLeft);
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const visibleLeft = containerRect.left + sidebarWidth;
    const visibleRight = containerRect.right;

    if (elRect.left < visibleLeft) {
      container.scrollBy({ left: elRect.left - visibleLeft - 16, behavior: "smooth" });
    } else if (elRect.right > visibleRight) {
      container.scrollBy({ left: elRect.right - visibleRight + 16, behavior: "smooth" });
    }
  }, []);

  const handleSelect = useCallback(
    (entry: GlossaryEntry) => {
      const existing = openEntries.find((e) => e.id === entry.id);
      if (existing) {
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

  if (!hasPanels) {
    return (
      <div className="flex flex-1 flex-col items-center justify-start bg-white font-sans dark:bg-zinc-950">
        <TopBar dark={dark} onToggle={toggle} onInfoClick={() => setShowInfo(true)} user={user} noteCount={Object.values(notes).reduce((sum, arr) => sum + arr.length, 0)} showAuth={showAuth} setShowAuth={setShowAuth} />
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
              placeholder="Find a term (e.g. sat, cit, ānanda)"
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
                          ? entry.definition.slice(0, 50) + "..."
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

  return (
    <div className="relative flex h-full min-h-0 flex-1 overflow-hidden bg-white font-sans dark:bg-zinc-950">
      <TopBar dark={dark} onToggle={toggle} onInfoClick={() => setShowInfo(true)} user={user} noteCount={Object.values(notes).reduce((sum, arr) => sum + arr.length, 0)} showAuth={showAuth} setShowAuth={setShowAuth} />
      {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}

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
                  user={user}
                  onSignInClick={handleSignInClick}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
