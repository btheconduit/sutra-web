"use client";

import { useState, useEffect, useRef } from "react";
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

  const shared: SharedEntryState = { openEntries, setOpenEntries, ...notesBundle, user };

  if (isMobile === null) return null;
  if (isMobile) return <MobileHome {...shared} />;

  return <DesktopHome {...shared} />;
}
