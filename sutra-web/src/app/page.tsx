"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { glossaryById, type GlossaryEntry } from "./data/glossary";
import type { StickyNote, SharedEntryState } from "./types";
import { useAuth, useIsMobile, useNotes } from "./hooks";
import { MobileHome } from "./components/MobileHome";
import { DesktopHome } from "./components/DesktopHome";

function loadOpenEntries(key: string): GlossaryEntry[] {
  try {
    const saved = localStorage.getItem(key);
    if (saved) {
      const ids = JSON.parse(saved) as string[];
      return ids
        .map((id) => glossaryById.get(id))
        .filter((e): e is GlossaryEntry => e !== undefined);
    }
  } catch { /* ignore */ }
  return [];
}

export default function Home() {
  const isMobile = useIsMobile();
  const { user } = useAuth();
  const prevUserRef = useRef<string | undefined>(undefined);
  const [openEntries, setOpenEntries] = useState<GlossaryEntry[]>(() => loadOpenEntries("sutra-open-entries"));

  useEffect(() => {
    const prevUserId = prevUserRef.current;
    const currentUserId = user?.id;

    if (prevUserId && !currentUserId) {
      setOpenEntries([]);
    }

    if (!prevUserId && currentUserId) {
      const restored = loadOpenEntries(`sutra-open-entries-${currentUserId}`);
      if (restored.length > 0) setOpenEntries(restored);
    }

    prevUserRef.current = currentUserId;
  }, [user?.id]);

  useEffect(() => {
    const sharedId = localStorage.getItem("sutra-share-entry");
    if (sharedId) {
      localStorage.removeItem("sutra-share-entry");
      const entry = glossaryById.get(sharedId);
      if (entry) {
        setOpenEntries((prev) =>
          prev.some((e) => e.id === entry.id) ? prev : [...prev, entry]
        );
      }
    }
  }, []);

  useEffect(() => {
    const ids = openEntries.map((e) => e.id);
    localStorage.setItem("sutra-open-entries", JSON.stringify(ids));
    if (user?.id) localStorage.setItem(`sutra-open-entries-${user.id}`, JSON.stringify(ids));
  }, [openEntries, user?.id]);

  const notesBundle = useNotes(user?.id);

  useEffect(() => {
    if (!user || !notesBundle.initialized) return;
    const storageKey = `sutra-notes-${user.id}`;
    let saved: Record<string, StickyNote[]> = {};
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) saved = JSON.parse(raw) as Record<string, StickyNote[]>;
    } catch { /* ignore */ }
    const prefix = "sutra-pending-note-";
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(prefix)) keys.push(key);
    }
    for (const key of keys) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) { localStorage.removeItem(key); continue; }
        const pending = JSON.parse(raw) as { text: string; color: number };
        const entryId = key.slice(prefix.length);
        const existing = saved[entryId] || [];
        const isDuplicate = existing.some((n) => n.text === pending.text);
        if (pending.text && !isDuplicate) {
          notesBundle.handleAddNote(entryId, pending.text, pending.color);
        }
        localStorage.removeItem(key);
      } catch { /* ignore */ }
    }
  }, [user, notesBundle.initialized, notesBundle.handleAddNote]);

  const [toast, setToast] = useState<{ message: string; key: number } | null>(null);
  const [toastExiting, setToastExiting] = useState(false);
  const showToast = useCallback((message: string) => {
    setToastExiting(false);
    setToast({ message, key: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const show = setTimeout(() => setToastExiting(true), 1800);
    const remove = setTimeout(() => setToast(null), 2000);
    return () => { clearTimeout(show); clearTimeout(remove); };
  }, [toast]);

  const shared: SharedEntryState = { openEntries, setOpenEntries, ...notesBundle, user, showToast };

  if (isMobile === null) return null;

  return (
    <>
      {isMobile ? <MobileHome {...shared} /> : <DesktopHome {...shared} />}
      {toast && (
        <div
          key={toast.key}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-600 shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          style={{ animation: toastExiting ? "toast-out 200ms ease-in forwards" : "toast-in 200ms ease-out" }}
        >
          {toast.message}
        </div>
      )}
    </>
  );
}
