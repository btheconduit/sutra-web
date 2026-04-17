"use client";

import { useEffect } from "react";
import { IconClose, iconButtonClass } from "./Icons";

export function InfoPanel({ onClose }: { onClose: () => void }) {
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
              Definition source
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Definitions reflect the traditional Vedantic usage — meanings
              rooted in the teachings of the ancient rishis and the
              commentarial works of Ādi Śaṅkarācārya, as transmitted through
              the living tradition of Advaita Vedanta.
            </p>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              The primary glossary is from Pujya Swami Dayananda
              Saraswati&apos;s three-year course in Vedanta and Sanskrit,
              compiled and edited by John Warne (5th edition, 2013), available
              through the Arsha Vidya Gurukulam bookstore in Saylorsburg,
              Pennsylvania.
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

          <div className="border-t border-zinc-100 pt-5 dark:border-zinc-800/60">
            <p className="text-zinc-500 dark:text-zinc-400">
              Sutra is still evolving. If something feels unclear, useful,
              missing, or worth improving, I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:hello@sutra.so"
              className="mt-2 inline-block text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
            >
              hello@sutra.so
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
