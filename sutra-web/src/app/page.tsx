"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-1 flex-col items-center justify-start bg-white font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center px-6 pt-32 pb-16">
        <h1 className="mb-2 text-3xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
          Sutra
        </h1>
        <p className="mb-12 text-sm text-zinc-400 dark:text-zinc-500">
          Sanskrit lookup for Vedanta study
        </p>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a term — e.g. adhyāsa"
          className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-base text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-600 dark:focus:border-zinc-600 dark:focus:bg-zinc-950"
        />

        {query.length > 0 && (
          <div className="mt-8 w-full">
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              No results for &ldquo;{query}&rdquo;
            </p>
          </div>
        )}

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
