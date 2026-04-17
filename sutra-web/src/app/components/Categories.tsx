import { glossaryById, type GlossaryEntry } from "../data/glossary";
import { toDevanagari } from "../data/devanagari";
import { categories, type Category } from "../data/categories";

export function CategoryBlocks({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(selected === cat.id ? null : cat.id)}
          className={`rounded-full border px-3.5 py-1.5 text-xs transition-all duration-200 ${
            selected === cat.id
              ? "border-zinc-400 bg-zinc-100 text-zinc-800 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-200"
              : "border-zinc-200 text-zinc-400 hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700/60 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export function TermCard({
  entry,
  onSelect,
}: {
  entry: GlossaryEntry;
  onSelect: (entry: GlossaryEntry) => void;
}) {
  return (
    <button
      onClick={() => onSelect(entry)}
      className="group rounded-lg border border-zinc-200 px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50 dark:hover:shadow-zinc-950/30"
    >
      <div className="font-mono text-base text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
        {entry.devanagari || toDevanagari(entry.term)}
      </div>
      <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-200">
        {entry.term}
      </div>
      <div className="mt-1.5 text-xs leading-relaxed text-zinc-400 dark:text-zinc-600">
        {entry.definition.length > 80
          ? entry.definition.slice(0, 80) + "..."
          : entry.definition}
      </div>
    </button>
  );
}

export function CategoryTermCards({
  category,
  onSelect,
}: {
  category: Category;
  onSelect: (entry: GlossaryEntry) => void;
}) {
  const entries = category.termIds
    .map((id) => glossaryById.get(id))
    .filter((e): e is GlossaryEntry => e !== undefined);

  if (entries.length === 0) return null;

  return (
    <div className="animate-fade-in w-full">
      <p className="mb-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
        {category.description}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {entries.map((entry) => (
          <TermCard key={entry.id} entry={entry} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
