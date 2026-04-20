import type { User } from "@supabase/supabase-js";
import type { GlossaryEntry } from "./data/glossary";

export type StickyNote = { id: string; text: string; color: number };

export type PanelState = "collapsed" | "default" | "expanded";

export type MwEntry = { senses: string[]; lex?: string; etymology?: string };
export type MwData = Record<string, MwEntry>;

export type SourceRef = { text: string; ref: string };
export type SourceData = Record<string, SourceRef[]>;

export type SharedEntryState = {
  openEntries: GlossaryEntry[];
  setOpenEntries: React.Dispatch<React.SetStateAction<GlossaryEntry[]>>;
  notes: Record<string, StickyNote[]>;
  handleAddNote: (id: string, text: string, color: number) => void;
  handleRemoveNote: (id: string, index: number) => void;
  handleChangeNoteColor: (id: string, index: number, color: number) => void;
  handleEditNote: (id: string, index: number, text: string) => void;
  user: User | null;
};
