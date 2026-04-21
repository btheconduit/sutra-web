"use client";

import { useState, useEffect, useRef } from "react";
import type { User } from "@supabase/supabase-js";
import type { StickyNote } from "../types";

export const stickyColors = [
  { bg: "bg-zinc-50 border-zinc-200/80 dark:bg-zinc-800/20 dark:border-zinc-700/30", dot: "bg-zinc-300 dark:bg-zinc-500/70" },
  { bg: "bg-amber-50 border-amber-200/80 dark:bg-amber-950/20 dark:border-amber-800/30", dot: "bg-amber-300 dark:bg-amber-600/70" },
  { bg: "bg-sky-50 border-sky-200/80 dark:bg-sky-950/20 dark:border-sky-800/30", dot: "bg-sky-300 dark:bg-sky-600/70" },
  { bg: "bg-rose-50 border-rose-200/80 dark:bg-rose-950/20 dark:border-rose-800/30", dot: "bg-rose-300 dark:bg-rose-600/70" },
  { bg: "bg-emerald-50 border-emerald-200/80 dark:bg-emerald-950/20 dark:border-emerald-800/30", dot: "bg-emerald-300 dark:bg-emerald-600/70" },
  { bg: "bg-violet-50 border-violet-200/80 dark:bg-violet-950/20 dark:border-violet-800/30", dot: "bg-violet-300 dark:bg-violet-600/70" },
];

export function ColorPicker({
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

export function StickyNoteCard({
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

export function NotesArea({
  entryId,
  notes,
  onAdd,
  onRemove,
  onChangeColor,
  onEdit,
  user,
  onSignInClick,
}: {
  entryId: string;
  notes: StickyNote[];
  onAdd: (id: string, text: string, color: number) => void;
  onRemove: (id: string, index: number) => void;
  onChangeColor: (id: string, index: number, color: number) => void;
  onEdit: (id: string, index: number, text: string) => void;
  user: User | null;
  onSignInClick: () => void;
}) {
  const [composing, setComposing] = useState(false);
  const [draft, setDraft] = useState("");
  const [draftColor, setDraftColor] = useState(0);
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const addingRef = useRef(false);
  useEffect(() => {
    if (composing) textareaRef.current?.focus();
  }, [composing]);

  function tryAdd() {
    if (!draft.trim() || addingRef.current) return;
    addingRef.current = true;
    if (!user) {
      localStorage.setItem(`sutra-pending-note-${entryId}`, JSON.stringify({ text: draft.trim(), color: draftColor }));
      setShowSignInPrompt(true);
      addingRef.current = false;
      return;
    }
    onAdd(entryId, draft.trim(), draftColor);
    setDraft("");
    setDraftColor(0);
    setComposing(false);
    setShowSignInPrompt(false);
    queueMicrotask(() => { addingRef.current = false; });
  }

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
            onChange={(e) => {
              setDraft(e.target.value);
              if (showSignInPrompt) setShowSignInPrompt(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                tryAdd();
              }
              if (e.key === "Escape") {
                setDraft("");
                setComposing(false);
                setShowSignInPrompt(false);
              }
            }}
            placeholder="Write a note..."
            rows={2}
            className={`w-full resize-none rounded border px-3 py-2 text-xs leading-relaxed text-zinc-700 outline-none transition-colors dark:text-zinc-200 ${stickyColors[draftColor % stickyColors.length].bg}`}
          />
          {showSignInPrompt && (
            <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-400 dark:text-zinc-500">
              <button
                type="button"
                onClick={onSignInClick}
                className="underline transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                Sign in
              </button>
              {" "}to save this note.
            </p>
          )}
          <div className="mt-2 flex items-center gap-3">
            <ColorPicker selected={draftColor} onSelect={setDraftColor} />
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={tryAdd}
                className="rounded px-2 py-0.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              >
                Add
              </button>
              <button
                onClick={() => {
                  setDraft("");
                  setComposing(false);
                  setShowSignInPrompt(false);
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
          data-note-add
          onClick={() => setComposing(true)}
          className="w-full rounded border border-dashed border-zinc-200 px-3 py-2 text-left text-xs text-zinc-400 transition-colors hover:border-zinc-300 hover:text-zinc-500 dark:border-zinc-700/60 dark:text-zinc-600 dark:hover:border-zinc-600 dark:hover:text-zinc-400"
        >
          {notes.length === 0 ? "Add a note..." : "+ Add another note"}
        </button>
      )}
    </div>
  );
}
