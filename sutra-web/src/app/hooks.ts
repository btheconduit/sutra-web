"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import type { StickyNote, NoteSyncStatus } from "./types";

function pendingKey(userId: string) {
  return `sutra-notes-pending-${userId}`;
}

function setPending(userId: string, pending: boolean) {
  try {
    if (pending) localStorage.setItem(pendingKey(userId), "1");
    else localStorage.removeItem(pendingKey(userId));
  } catch { /* ignore */ }
}

function isPending(userId: string): boolean {
  try {
    return localStorage.getItem(pendingKey(userId)) !== null;
  } catch { return false; }
}

// --- Theme ---

export function useTheme() {
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

// --- Auth ---

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
}

// --- Mobile detection ---

export function useIsMobile(breakpoint = 768) {
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

// --- Notes ---

let noteIdCounter = 0;
function nextNoteId() {
  return `note-${Date.now()}-${++noteIdCounter}`;
}

async function upsertNotesToSupabase(userId: string, notes: Record<string, StickyNote[]>): Promise<boolean> {
  if (!supabase) return true;
  const rows = Object.entries(notes).flatMap(([entryId, arr]) =>
    arr.map((n) => ({
      id: n.id,
      user_id: userId,
      entry_id: entryId,
      text: n.text,
      color: n.color,
      updated_at: new Date().toISOString(),
    }))
  );
  if (rows.length === 0) return true;
  try {
    const { error } = await supabase.from("notes").upsert(rows, { onConflict: "user_id,id" });
    return !error;
  } catch {
    return false;
  }
}

async function fetchNotesFromSupabase(userId: string): Promise<Record<string, StickyNote[]>> {
  if (!supabase) return {};
  const { data, error } = await supabase
    .from("notes")
    .select("id, entry_id, text, color")
    .eq("user_id", userId);
  if (error || !data) return {};
  const result: Record<string, StickyNote[]> = {};
  for (const row of data) {
    const arr = result[row.entry_id] || [];
    arr.push({ id: row.id, text: row.text, color: row.color });
    result[row.entry_id] = arr;
  }
  return result;
}

const DELETED_NOTES_KEY = "sutra-deleted-notes";

function getDeletedNoteIds(): Set<string> {
  try {
    const raw = localStorage.getItem(DELETED_NOTES_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch { return new Set(); }
}

function trackDeletedNote(noteId: string) {
  const ids = getDeletedNoteIds();
  ids.add(noteId);
  localStorage.setItem(DELETED_NOTES_KEY, JSON.stringify([...ids]));
}

function untrackDeletedNote(noteId: string) {
  const ids = getDeletedNoteIds();
  ids.delete(noteId);
  if (ids.size === 0) localStorage.removeItem(DELETED_NOTES_KEY);
  else localStorage.setItem(DELETED_NOTES_KEY, JSON.stringify([...ids]));
}

async function deleteNoteFromSupabase(userId: string, noteId: string): Promise<boolean> {
  if (!supabase) return true;
  try {
    const { error } = await supabase.from("notes").delete().eq("user_id", userId).eq("id", noteId);
    if (!error) {
      untrackDeletedNote(noteId);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function useNotes(userId: string | undefined) {
  const storageKey = userId ? `sutra-notes-${userId}` : "sutra-notes";
  const [notes, setNotes] = useState<Record<string, StickyNote[]>>({});
  const [initialized, setInitialized] = useState(false);
  const [syncStatus, setSyncStatus] = useState<NoteSyncStatus>("idle");
  const notesRef = useRef(notes);
  notesRef.current = notes;
  const inFlightRef = useRef(false);
  const queuedRef = useRef<Record<string, StickyNote[]> | null>(null);

  const syncNow = useCallback(async (data: Record<string, StickyNote[]>) => {
    if (!userId) return;
    if (inFlightRef.current) {
      queuedRef.current = data;
      return;
    }
    inFlightRef.current = true;
    let current: Record<string, StickyNote[]> | null = data;
    try {
      while (current) {
        setPending(userId, true);
        const upsertOk = await upsertNotesToSupabase(userId, current);
        let deleteOk = true;
        for (const noteId of getDeletedNoteIds()) {
          const ok = await deleteNoteFromSupabase(userId, noteId);
          if (!ok) deleteOk = false;
        }
        if (upsertOk && deleteOk) {
          setPending(userId, false);
          setSyncStatus("idle");
        } else {
          setSyncStatus("pending");
        }
        current = queuedRef.current;
        queuedRef.current = null;
      }
    } finally {
      inFlightRef.current = false;
    }
  }, [userId]);

  useEffect(() => {
    let cancelled = false;
    setNotes({});
    setInitialized(false);
    (async () => {
      let local: Record<string, StickyNote[]> = {};
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved) as Record<string, StickyNote[]>;
          for (const key of Object.keys(parsed)) {
            parsed[key] = parsed[key].map((n) => n.id ? n : { ...n, id: nextNoteId() });
          }
          local = parsed;
        } else if (userId) {
          const legacy = localStorage.getItem("sutra-notes");
          if (legacy) {
            const anon = JSON.parse(legacy) as Record<string, StickyNote[]>;
            for (const key of Object.keys(anon)) {
              local[key] = anon[key].map((n) => n.id ? n : { ...n, id: nextNoteId() });
            }
            localStorage.removeItem("sutra-notes");
          }
        }
      } catch { /* ignore */ }

      if (userId) {
        if (isPending(userId)) setSyncStatus("pending");
        const remote = await fetchNotesFromSupabase(userId);
        const deletedIds = getDeletedNoteIds();
        for (const [entryId, remoteNotes] of Object.entries(remote)) {
          const localNotes = local[entryId] || [];
          const localIds = new Set(localNotes.map((n) => n.id));
          const newFromServer = remoteNotes.filter((n) => !localIds.has(n.id) && !deletedIds.has(n.id));
          if (newFromServer.length > 0) {
            local[entryId] = [...localNotes, ...newFromServer];
          }
        }
        localStorage.setItem(storageKey, JSON.stringify(local));
        syncNow(local);
      }

      if (!cancelled) {
        setNotes((prev) => {
          const merged = { ...local };
          for (const [entryId, arr] of Object.entries(prev)) {
            const localIds = new Set((merged[entryId] || []).map((n) => n.id));
            const newFromPrev = arr.filter((n) => !localIds.has(n.id));
            if (newFromPrev.length > 0) {
              merged[entryId] = [...(merged[entryId] || []), ...newFromPrev];
            }
          }
          return merged;
        });
        setInitialized(true);
      }
    })();
    return () => { cancelled = true; };
  }, [storageKey, userId, syncNow]);

  useEffect(() => {
    if (!userId) return;
    const onOnline = () => { syncNow(notesRef.current); };
    window.addEventListener("online", onOnline);
    return () => window.removeEventListener("online", onOnline);
  }, [userId, syncNow]);

  const persist = useCallback((data: Record<string, StickyNote[]>) => {
    localStorage.setItem(storageKey, JSON.stringify(data));
    if (userId) syncNow(data);
  }, [storageKey, userId, syncNow]);

  const handleAddNote = useCallback((id: string, text: string, color: number) => {
    const noteId = nextNoteId();
    let next: Record<string, StickyNote[]>;
    setNotes((prev) => {
      next = { ...prev, [id]: [...(prev[id] || []), { id: noteId, text, color }] };
      return next;
    });
    queueMicrotask(() => { if (next) persist(next); });
  }, [persist]);

  const handleRemoveNote = useCallback((id: string, index: number) => {
    let next: Record<string, StickyNote[]>;
    let removed: StickyNote | undefined;
    setNotes((prev) => {
      const arr = [...(prev[id] || [])];
      removed = arr.splice(index, 1)[0];
      next = { ...prev };
      if (arr.length === 0) delete next[id];
      else next[id] = arr;
      return next;
    });
    queueMicrotask(() => {
      if (userId && removed) trackDeletedNote(removed.id);
      if (next) persist(next);
    });
  }, [persist, userId]);

  const handleChangeNoteColor = useCallback((id: string, index: number, color: number) => {
    let next: Record<string, StickyNote[]> | undefined;
    setNotes((prev) => {
      const arr = [...(prev[id] || [])];
      if (!arr[index]) return prev;
      arr[index] = { ...arr[index], color };
      next = { ...prev, [id]: arr };
      return next;
    });
    queueMicrotask(() => { if (next) persist(next); });
  }, [persist]);

  const handleEditNote = useCallback((id: string, index: number, text: string) => {
    let next: Record<string, StickyNote[]> | undefined;
    setNotes((prev) => {
      const arr = [...(prev[id] || [])];
      if (!arr[index]) return prev;
      arr[index] = { ...arr[index], text };
      next = { ...prev, [id]: arr };
      return next;
    });
    queueMicrotask(() => { if (next) persist(next); });
  }, [persist]);

  return { notes, initialized, syncStatus, handleAddNote, handleRemoveNote, handleChangeNoteColor, handleEditNote };
}
