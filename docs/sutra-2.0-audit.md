# Sutra 2.0 — System audit and initial plan (superseded)

This is the first planning pass (2026-09-04), kept for its repository audit (§1), infrastructure research (§6), and source model (§7). It is superseded by `sutra-2.0-architecture.md` wherever the two conflict: in particular, the single-entry knowledge model, the thread shape, the homepage and daily-relationship work, and the MVP and roadmap sections no longer apply.


## Context

Sutra today is a searchable Advaita Vedānta lexicon: 2,359 glossary entries shipped as a static TypeScript file, a multi-panel desktop UI, a separate mobile UI, email OTP sign-in, and per-user notes in Supabase. The owner's product thesis has expanded to "Sutra helps you understand what you're encountering while studying" (Encounter → Understand → Context → Relationship → Return), with Devanāgarī and inflected-form search, a real Sanskrit lexical layer, typed relationships ("threads"), source transparency, persistent open inquiries, and exploration history.

This document is the requested planning deliverable, not an implementation plan for a single feature. It audits the current system, decides what to preserve, extend, or replace, proposes the knowledge, search, and source architectures, scopes an MVP, and lays out a migration path and roadmap. Nothing here has been implemented. On approval the first action is to check this document into the repo as `docs/sutra-2.0-plan.md` so it can be refined in-tree.

Repo root: `/Users/masen./conductor/workspaces/sutra-web/georgetown`; app: `sutra-web/`. All file paths below are relative to `sutra-web/` unless noted.

---

## 1. Existing System Audit

### 1.1 Architecture

- **Single client route.** `src/app/page.tsx` is `"use client"`, chooses `MobileHome` or `DesktopHome` by viewport (`hooks.ts:75-89`), and renders nothing until the viewport is known. SSG output for `/` is an empty body.
- **All term data in the client bundle.** `src/app/data/glossary.ts` (422 KB, 94 KB gzip) is statically imported by `page.tsx` and `lib/search.ts`. `cooccurrence.json` (15 KB) too. `mw-enrichment.json` (954 KB) is lazy-loaded via `lib/mw.ts` on first "Extended meanings" click.
- **No server data layer.** Zero API routes, server actions, middleware, or server-side Supabase. The only server component is `/t/[id]/page.tsx`, which pre-renders 2,359 pages with OG meta, JSON-LD, and a `<noscript>` article, then client-redirects to `/` by writing the id to localStorage (`t/[id]/TermRedirect.tsx:11-15`, consumed at `page.tsx:59-76`).
- **No URL state.** Open panels, order, panel states, focus, query, and category live in React state + localStorage. Browser back/forward does nothing; a multi-panel view is not linkable.
- **Supabase** = email OTP auth (`components/Auth.tsx`, `hooks.ts:47-71`) + one `notes` table (`supabase/migrations/001_create_notes_table.sql`). Client-only; the anon key is the only credential.
- **Tooling.** No tests, no CI, no `.env.example`, no generated Supabase types. Data scripts (`scripts/parse-mw.mjs`, `process-source.ts`, `build-cooccurrence.ts`, `enrich-glossary.ts`) are unregistered in `package.json`; the MW pipeline reads `.context/attachments/mw-v2.xml`, which is absent, so MW data cannot be regenerated.
- **Deploy.** Vercel (analytics + speed insights in `layout.tsx`), PWA service worker (`public/sw.js`), sitemap of 2,360 URLs, `DefinedTerm` JSON-LD per term.

### 1.2 Data model (`src/app/data/glossary.ts:1-15`)

```ts
interface GlossaryEntry {
  id: string;                 // ASCII slug, used in URLs, notes, categories, MW keys
  term: string;               // IAST headword
  devanagari?: string;        // authored on 6 entries; otherwise generated at render
  transliteration: string;    // identical to `term` in all 2,359 entries (dead field)
  definition: string;         // prose from the Dayananda/Warne glossary
  root?: { keys: string[]; prefix?: string };          // 4 entries
  composition?: { parts: ({morpheme}|{text; gloss})[] }; // 1 entry
  vedantaMeaning?: string;    // 67 entries — the entire "Vedānta layer"
  relatedTerms?: string[];    // 518 entries; display strings with diacritics, not ids
  tags?: string[];            // 78 entries; English keywords
  aliases?: string[];         // 43 entries; mostly jñ→dnya spellings
}
```

Field population, out of 2,359: `vedantaMeaning` 67 · `relatedTerms` 518 (800 edges) · `tags` 78 · `aliases` 43 · `devanagari` 6 · `root` 4 · `composition` 1. The other ~2,280 entries are bare `{id, term, definition}`.

### 1.3 Term/content model — what a "term" actually is

- **Headwords are mostly inflected nominative-singular forms**, following the Dayananda glossary convention: 684 terms end in `ḥ`, 470 in `m`, 658 in `a`, 168 in `ā`. So the current `term` already mixes stems (`viveka`) and forms (`jīvaḥ`, `jñānam`) with no marker. This is the single most important fact for the Lexeme/Form question in §4.
- **50 stem/form duplicate pairs** exist as separate entries (`moksa`/`moksah`, `citta`/`cittam`, `adhyasa`/`adhyasah`), linked only by one-way `relatedTerms` strings.
- **107 terms end in bare `h`** where `ḥ` is meant (`āśramah`, `bādhah`): a data-quality defect that also breaks search normalization consistency.
- **No entry typing.** A bound suffix (`-maya`), a mahāvākya (`tattvamasi`), a compound (`sādhanatuṣṭayam`, whose parts are buried in unbalanced parentheses inside prose), a concept (`sākṣī`), and an adjective (`yuta`) share one record shape.
- **Definitions are prose.** 66% contain `;`, which `EntryBody.tsx:102-115` splits into a numbered list. No sense structure, no context labels, no grammar (gender/POS) anywhere in the glossary.
- **Devanāgarī is synthesized** for 2,353 entries by a hand-rolled, unverified IAST→Devanāgarī transliterator (`data/devanagari.ts`) and rendered in Geist Mono, a Latin-only font.

### 1.4 Search architecture (`src/app/lib/search.ts`)

- `normalize()` (`:4-30`): lowercase, strip IAST diacritics, then ~10 lossy romanization collapses (`sh→s`, `ch→c`, `aa→a`, `w→v`, `ri→r`, `gy/gn→jn`). Applied symmetrically to query and indexed fields.
- Precomputed normalized index (`:34-41`), full linear scan, mutually exclusive score tiers (`:130-190`): term exact 100 / prefix 80 / substring 60; alias 95/75/55; tag 40; definition all-words 30 / some 20; vedantaMeaning 15/10. No tie-break (alphabetical within a band), no result cap, no debounce. ~0.5 ms per keystroke.
- **Devanāgarī input returns nothing.** There is no Devanāgarī→Latin path and `devanagari` is not indexed. `README.md`, `InfoPanel.tsx:115-119`, and `CLAUDE.md` all claim it works.
- **Multi-word queries** only reach tag/definition tiers; term matching compares the whole string, so `sat cit` cannot find `saccidānanda`.
- Not searched: MW senses, roots, relations, Devanāgarī. Not handled: uppercase Harvard-Kyoto, ITRANS `~n`/`RRi`, typos.

### 1.5 Relationship model

Three tiers merged into one flat, unlabeled list by `getRelatedTerms` (`search.ts:76-121`), rendered identically in `EntryBody.tsx:207-230`:

| Tier | Source | Keyed by | Size | Quality |
|---|---|---|---|---|
| Curated `relatedTerms` | hand-authored | display string | 518 entries / 800 edges; 318 one-directional | good but untyped, unsourced |
| Prose scan | any headword appearing in definition text | runtime | unbounded | coincidental |
| Co-occurrence | `cooccurrence.json` from 4 corpora | id | 282 entries / 805 links | noisy (`brahma → rnam, sara, krta`) |

- `categories.ts`: 7 categories × 66 term ids; one-directional; effectively the same set as the 67 `vedantaMeaning` entries. This is the only proto-"thread" in the system.
- Roots (`roots.ts`, 5) and morphemes (`morphemes.ts`, 24) are two identical `{gloss}` registries with colliding keys (`an` = "to breathe" and "not"); `root.prefix` is a free string that shadows a morpheme key. Rendered as inert text, not links.

### 1.6 Source model

- **No provenance in the data.** Attribution is three tooltip strings (`EntryBody.tsx:201-205`), the literal `Monier-Williams, 1899` (`:179`), and the About panel.
- **5,409 real citations are orphaned.** `data-sources/generated/*.json` hold `{text, ref}` pairs per term from Vivekacūḍāmaṇi (3,116), Aṣṭādhyāyī (1,163), Brahma-Sūtra-Bhāṣya (931), Amarakośa (199). Nothing at runtime reads them; `build-cooccurrence.ts` discards text and ref.
- **Licensing of the raw corpora is unsafe for display.** `brahma-sutra-bhashya.txt` is an OCR of Swami Gambhirananda's copyrighted Advaita Ashrama translation; `ashtadhyayi.txt` is Vasu's 1890s translation OCR (public domain, garbled); `amarakosha.txt` is a 1940 Poona edition OCR; `vivekachudamani-itrans.txt` is sanskritdocuments.org ITRANS marked "for personal study and research". None is clean, display-ready Sanskrit.
- MW citations are extracted then deleted by `parse-mw.mjs:391`.
- The Dayananda/Warne glossary definitions are copyrighted material used with the owner's understanding of permission; this should be made explicit before content expands.

### 1.7 Authentication and account model

- Supabase email OTP with magic-link fallback; `persistSession`, `detectSessionInUrl`; no callback route, no server client (`src/lib/supabase.ts`, `Auth.tsx:16-67`).
- `notes(id text, user_id uuid, entry_id text, text, color smallint, created_at, updated_at)`, PK `(user_id, id)`, RLS "own rows". `entry_id` is an unconstrained glossary slug. Note ids are `note-${Date.now()}-${counter}` (counter resets per load).
- Sync (`hooks.ts:242-461`): dirty-set upsert, 800 ms debounce, offline flag, tombstones. Gaps: no `updated_at` comparison (local always wins; remote edits are silently dropped and then overwritten on next mount), full re-upsert on every mount, unordered/unpaginated fetch, `sutra-deleted-notes` not namespaced per user.
- No other per-user data exists server-side. Open panels and panel states are per-user only in localStorage.

### 1.8 UI structure

- **Desktop** (`DesktopHome.tsx`, 491 lines): search-first empty state with category chips, or a 288/48 px sidebar plus horizontally scrolling, draggable panels with collapsed/default/expanded widths. Keyboard contract: `f`, `Cmd+B`, `Esc`, `i`, `o`, arrows, `Enter`, `Space`, `Delete`. 12 state values, 5 refs, one 100-line keydown effect.
- **Mobile** (`MobileHome.tsx`, 464 lines): list view, one-at-a-time detail with tab chips and swipe. Reimplements search, results, categories, auth entry, theme.
- **Panel body** (`EntryBody.tsx`): Definition → Root → Built from → Vedantic meaning → Related terms → Extended meanings (MW). Notes below, composer in footer.
- **No homepage.** `/` is the app. No about page, no featured content, no history, no recently viewed.
- Shared: `EntryBody`, `Notes`, `Icons`, `InfoPanel`, `lib/format.ts`, two hooks. Design tokens: 3 CSS variables; everything else inline `zinc-*` utilities.

### 1.9 Already present and worth keeping for this direction

- The **panel board** (multiple open, reorderable, persistent, keyboard-navigable) is already the "multiple open inquiries" interaction. It needs a name and a URL, not a replacement.
- **Notes**, **auth**, **share URLs**, **SSG term pages + JSON-LD**, **PWA offline**, **lazy secondary data** (`lib/mw.ts` pattern), **theme**, and the **quiet visual language** are all appropriate.
- **Categories** are proto-threads. **Roots/morphemes registries** are a proto-lexical layer. The **5,409 citations** are proto-sources. The **transliteration normalizer** is a proto-transliteration layer. None is wrong in intent; all are modeled too narrowly.
- The **67 `vedantaMeaning` entries** are the entire curated Vedānta corpus. That is the real constraint on 2.0: content, not code.

### 1.10 Technical debt and constraints that will bite 2.0

1. Everything is keyed by one id space (`entry.id`) across notes, URLs, panels, categories, co-occurrence, MW. A second object type (thread, expression, source) has nowhere to go.
2. No URL state; the `/t/[id]` → localStorage → `/` handoff is a dead end for inquiries, history, and back/forward.
3. Relations are strings, untyped, half one-directional, merged with noise. Threads cannot be built on this.
4. No provenance field at any granularity; the citation pipeline consumes unlicensed OCR.
5. Glossary is a 17k-line TS literal edited by hand and by a string-splicing script (`enrich-glossary.ts:131-180`). No validation. Any desync between `glossary.ts`, `mw-missing.ts`, `cooccurrence.json`, and `categories.ts` is silent.
6. Headword inflection is unmarked; 50 duplicate stem/form pairs; 107 malformed visargas.
7. Search normalization is a lossy regex chain with no regression tests; every extension risks silent behavior change.
8. Desktop/mobile duplication is policy (`CLAUDE.md`), so every IA change is two implementations. Acceptable only if the state layer beneath both is shared.
9. Notes sync drops remote edits. Must be fixed before any other per-user data (history, threads) reuses the same pattern.
10. Documentation drift: README/Info/CLAUDE claim Devanāgarī search, "650+ entries", morphological related-terms. Trust erodes when claims are false.

---

## 2. Preserve / Extend / Replace

| Area | Verdict | Why |
|---|---|---|
| Next.js 16 App Router, React 19, TS strict, Tailwind 4, Vercel, Supabase | **Preserve** | Adequate for the destination. No new framework, no ORM, no state library. |
| Email OTP auth, RLS-scoped user data | **Preserve** | Correct shape; sign-in stays secondary. |
| Panel board interaction + keyboard contract | **Preserve** (rename, give it a URL) | It is already "open inquiries". Keep the shortcuts as a contract. |
| Separate mobile/desktop UI trees | **Preserve** the split, **extend** by sharing an inquiry-state layer underneath | Owner's decision; the debt is in duplicated state, not duplicated markup. |
| `/t/[id]` SSG pages, sitemap, JSON-LD, OG | **Preserve**, later generalize the id space | SEO surface is good. |
| Lazy secondary data (`lib/mw.ts`) | **Preserve** as the pattern for all heavy layers | Proven; extend to per-entry lexical/citation payloads. |
| PWA / service worker | **Preserve** | Fits "return to study"; constrains data delivery choices (see §4.6). |
| Notes | **Preserve** the feature, **fix** sync merge (`updated_at` LWW, per-user tombstones) | Must be correct before history/threads reuse the sync pattern. |
| Quiet visual language, theme, typography | **Preserve**; add a Devanāgarī-capable font and a small token layer | Not a redesign. |
| `GlossaryEntry` | **Extend** into a typed `Entry` with lexical + concept layers (§4) | Good bones; missing type, grammar, structured senses, provenance. |
| Search (`normalize`, scoring) | **Extend** into a transliteration layer + candidate generation + ranking (§5) | Keep the fast in-memory scan; add Devanāgarī, multi-token, forms index. |
| Categories | **Extend** into threads (§8) | They are threads without a question, a relation type, or a source. |
| Curated `relatedTerms` | **Extend**: convert to typed, id-keyed relations with provenance | The 800 edges are real editorial work; keep them, type them. |
| Roots/morphemes registries | **Extend** into one `morpheme` registry with `kind` | Merge two identical shapes; fix the `an` collision. |
| MW enrichment | **Extend**: rebuild reproducibly, keep MW's own source refs, normalize `lex` | Keep the data; fix the pipeline. |
| Citations (`data-sources/generated`) | **Rethink** the pipeline; keep the idea | Re-ingest from licensed, clean Sanskrit sources; store as `Citation` objects, not co-occurrence. |
| Prose-scan and co-occurrence "related terms" | **Replace**: remove from the visible relation list; at most a ranking signal | They violate the authority requirement and clutter a quiet panel. |
| `transliteration` field | **Replace** (delete) | Dead. |
| `enrich-glossary.ts` string splicing | **Replace** with structured data files + a validation step | Hand-splicing a 17k-line TS literal is the wrong authoring surface. |
| localStorage share handoff | **Replace** with URL state | Prerequisite for inquiries, history, back/forward. |
| Homepage | **New** | None exists; needed for Daily Relationship and orientation. |
| Search + Info panel claims | **Replace** with truthful copy | Cheap trust win. |

---

## 3. Product Model — stress-testing the thesis

**Thesis:** "Sutra helps you understand what you're encountering while studying."

**Verdict: it holds as a boundary, provided four rules are made explicit.** The thesis is defined by a trigger (an encounter) and an exit (return to study), which is what makes it coherent: it excludes recall/practice (Shabda), courses, feeds, and social features by construction. The ambiguities are all in the word "understand" and in the features that are not encounter-driven.

### 3.1 Where the scope can leak

1. **"Understand" has no floor or ceiling.** For `yuta` the answer is one line; for `mithyā` it could be a book. Without a depth ladder every entry page grows until it is a dashboard.
   *Rule: the first screen answers "what is this" (script, transliteration, gloss, grammar). Everything else is progressive disclosure, in a fixed order: Vedānta sense → relations/threads → sources → notes.* This is already the `EntryBody` order; keep it.
2. **English → Sanskrit invites false certainty.** "Witness" → `sākṣī` is fine; "pure consciousness by nature" has no single answer. The brief already says show distinctions, not mappings.
   *Rule: English queries return candidates ranked by curated English keys, each with its distinguishing gloss. Sutra never labels a result "the Sanskrit for X".*
3. **Threads, Daily Relationship, and history are return-driven, not encounter-driven.** They are the features most at odds with "success is not time in Sutra."
   *Rule: exactly one browse surface (the Daily Relationship on the homepage); threads are reached from entries or from search, not from a catalog page; history is a trace, not a feed.* If a second browse surface is proposed later, one must be removed.
4. **Verse parsing pulls toward a Sanskrit reader.** That is a different product (Ambuda's territory) with a different corpus and different linguistic infrastructure.
   *Rule: expressions are first-class entries authored editorially (the compound from the verse you were reading), and search accepts multi-token Sanskrit. Automatic segmentation of arbitrary pasted text is out of scope until a morphological service is adopted (§6), and even then it is a lookup aid, not a reading mode.*

### 3.2 Contradictions to resolve now

- **"Create a reason to return" vs "success is not time in app".** Resolve by framing the Daily Relationship as a study prompt: it opens a thread, the thread cites sources, and the sources are the thing to go read. No streaks, no "you've seen 12 relationships".
- **Two audiences.** `SUTRA-CONTEXT.md` targets beginners in a live course using transliteration; the brief now describes the owner reading Devanāgarī. Both are valid. Resolve by keeping the beginner path the default (gloss first, transliteration always visible) and making the Sanskrit layer disclosure-based. Devanāgarī input must work, but Devanāgarī output should never be the only rendering.
- **Word vs concept.** Is `svarūpa`-the-word and `svarūpa`-the-concept one page or two? Two pages doubles URLs, notes, history, and authoring for the ~70 entries that have both. **Decision: one entry, two layers** (§4). A concept without a headword (e.g. "three orders of reality") is a thread, not an entry.
- **Generic dictionary drift.** 2,280 of 2,359 entries are ordinary vocabulary. That is fine because it is the vocabulary of the texts studied. The line to hold: external dictionaries (MW, Apte) enrich existing entries; they do not become entries. An "unknown word" fallback that consults MW at query time is acceptable later as a clearly labeled lexical lookup, not as glossary content.

### 3.3 What the thesis implies for priorities

Content is the bottleneck. 67 curated Vedānta entries, 0 threads, 0 licensed citations. The architecture work in this plan is worth doing only if it makes authoring cheaper and safer. Every phase in §11 therefore pairs a structural change with an authoring deliverable.

---

## 4. Knowledge Architecture

**Guiding rule: no new entity type until three authored instances provably do not fit an existing one.** Every entity type is an authoring tax on a corpus of 67 curated items.

### 4.1 Verdict on Lexeme / Form / Expression / Concept

| Proposed | Verdict | Reason |
|---|---|---|
| Lexeme | **Yes: the one content entity, `Entry`** | Owns the stable id, the notes, the URL, the provenance. |
| Form | **No: a built index row, not an entity** | A form has no content of its own. It exists to route a surface string (`mokṣaḥ`, `मोक्ष`) to an entry. Making it an entity doubles the id space for no user-facing value. |
| Expression | **No: an `Entry` with `kind: "expression"` and `parts`** | The glossary already holds compounds as ordinary entries. A phrase encountered in a text is an entry whose parts reference other entries and whose citation says where it was met. The only behavioral difference is segmentability, which `parts` gives. |
| Concept | **No: a layer on `Entry` (`vedanta: Block[]`)** | For Vedānta terms the concept identity *is* the word: `mithyā` the word and `mithyā` the concept share a page, notes, URL, and history. One word with several technical senses → several `vedanta` blocks, each attributed. One concept with several words (witness: `sākṣī`, `draṣṭā`) → a `synonym` relation or a thread. A word-less concept ("three orders of reality") is a thread, not an entry. |

Roots and affixes also become entries (`kind: "root" | "affix"`). That fixes the `an` collision (`root-an` vs `affix-an`), gives etymology a page and provenance, and serves the "etymology → usage → technical sense" workflow a real user asked for.

**Result: one content entity (`Entry`), one composition entity (`Thread`), one evidence entity (`Citation`), one registry (`Source`), one edge table (`Relation`), one built index (`forms`).**

### 4.2 Shapes

```ts
type EntryId = string;   // the existing ASCII slug; permanent; never re-derived from display text

interface Entry {
  id: EntryId;
  kind: "word" | "expression" | "root" | "affix";   // "concept" reserved, unused until needed
  headword: string;        // IAST as displayed (was `term`); may be nominative — id ≠ headword
  lemma?: string;          // stem when headword is inflected ("mokṣa" for "mokṣaḥ"); feeds the forms index
  devanagari?: string;     // authored override; otherwise generated at BUILD time and validated
  gram?: { pos?: "noun" | "adj" | "verb" | "indecl" | "pron"; gender?: "m" | "f" | "n" };
  definition: Block;       // lexical meaning; the ";"-split into numbered senses stays a presentation rule
  vedanta?: Block[];       // the "concept" layer; optional `label` per block ("In the teaching", "Distinguished from")
  etymology?: {
    root?: EntryId;        // → kind "root"
    affixes?: EntryId[];   // → kind "affix"
    parts?: Array<EntryId | { text: string; gloss: string }>;   // expressions and compounds
    note?: string;         // why the encountered form differs from the lexical form (sandhi, case)
    attribution: Attribution;
  };
  keywords?: string[];     // was `tags`: AUTHORED English hooks ("witness", "subtle body"); editorial by definition
  aliases?: string[];      // alternative romanizations
  attribution: Attribution; // entry-level default; blocks without their own inherit it
}

interface Block { label?: string; text: string; attribution?: Attribution; citations?: CitationId[] }

interface Relation {
  from: EntryId; to: EntryId;
  type: "see-also" | "contrast" | "synonym" | "part-of" | "derives-from" | "precedes" | "subtype-of";
  note?: string;           // one clause: "adhiṣṭhāna is what mithyā depends on"
  attribution: Attribution;
}
// part-of and derives-from are GENERATED from Entry.etymology at build; never authored twice.

interface Citation {
  id: CitationId;          // "vcm-240", "bsb-2.1.14"
  source: SourceId; locator: string;
  text?: string; script?: "iast" | "deva";   // omitted when rights forbid
  translation?: string;
  entries: EntryId[];      // which entries this passage evidences
}

type FormRow = [surface: string, entry: EntryId, tag?: string];   // ["mokṣaḥ","moksa","nom.sg"], ["मोक्ष","moksa"]
```

Dropped: `transliteration`. Renamed: `term` → `headword`, `tags` → `keywords`. Restructured: `relatedTerms` → `Relation[]`, `root` + `composition` → `etymology`.

Why the fields that are not obvious: `kind` drives rendering and id namespacing. `lemma` is what lets a nominative headword and its stem share a search index without merging entries. Entry-level `attribution` is what makes provenance cost one line for 2,290 plain entries. `keywords` being authored rather than extracted is what prevents English→Sanskrit false mappings. `Relation.note` is what turns a "Related" list from a graph dump into an explanation.

### 4.3 Mapping the existing 2,359 entries (minimal churn)

- **Ids unchanged.** Protects `notes.entry_id`, `/t/[id]`, sitemap, and every localStorage key.
- **Headwords stay nominative.** Do not mass-convert ~1,150 nominatives. Set `lemma` at build by rule (`-aḥ`→`-a`, `-am`→`-a`, `-iḥ`→`-i`, `-uḥ`→`-u`; consonant stems like `ātmā`→`ātman` via an overrides file) and let the forms index route both surfaces. Restore `ḥ` on the 107 bare-`h` headwords in `headword` only.
- **The 50 stem/form duplicate pairs:** canonical = the one carrying `vedanta` or the richer definition (in sampled pairs, the stem). The other becomes a row in `redirects.json`, its surface becomes a `FormRow`, and any extra sense is appended to the canonical definition.
- **`relatedTerms` (800 edges):** resolve each display string through the forms index → `Relation{type: "see-also", attribution: sutra-editorial}`. Unresolved strings fail the build and are fixed by hand. Keep direction as authored; `see-also` is not symmetric by nature. Typing the 800 edges further (`contrast`, `precedes`) is an editorial pass that can happen thread by thread.
- **Prose-scanned links:** dropped from the visible relation list. At most a build-time `mentions` signal for ranking.
- **`cooccurrence.json`: delete.** 282 noisy keys, indistinguishable from curated links in the UI.
- **`categories.ts`** → 7 threads of shape `cluster` (§8). Delete the file.
- **`roots.ts` / `morphemes.ts`** → 29 entries of kind `root` / `affix`, attributed `sutra-editorial` with mode `synthesizes` until traditional glosses replace them. This honors the owner's rule honestly: structure ships, gloss text is labeled as unverified rather than hidden.
- **MW (2,166 keys):** shape unchanged, stays a separate lazy artifact, file-level attribution `mw-1899 / quotes`. Rebuild the pipeline to fetch the Cologne XML by URL + checksum so it is reproducible.
- **5,409 citations:** Vivekacūḍāmaṇi rows → `Citation` with text converted ITRANS→IAST at build. Brahma-Sūtra-Bhāṣya rows → `Citation` with locator only, no text (copyrighted translation). Aṣṭādhyāyī and Amarakośa: not at runtime (off-center, OCR-noisy); keep the generated JSON in `data-sources/`.

### 4.4 Storage and delivery

**Content lives in git as data files; a build step emits static JSON; Supabase holds only user data.** Criteria: one developer, git-based editorial workflow, read-only content at runtime, an offline PWA that must work with no signal, free CDN. Content in Postgres would add a second source of truth and an online dependency. A CMS is a team tool.

```
sutra-web/content/
  entries/{id}.json          # one file per entry: clean diffs, blame, PR review per term
  threads/{id}.json
  sources.json
  relations.json             # authored relations only
  citations/{source}.json
  redirects.json
  forms-overrides.json
sutra-web/scripts/build-content.ts   # validate (schema + integrity), generate forms, devanāgarī, derived relations
sutra-web/public/data/
  index.json                 # search index: id, kind, headword, devanāgarī, normalized keys, form surfaces, keywords, one-line gloss
  threads.json
  e/{id}.json                # full entry incl. relations, citations, MW
```

The client loads `index.json` on boot (service worker caches it) and fetches `e/{id}.json` when a panel opens (cached on first fetch; a "keep offline" action can prefetch all). This removes the 422 KB literal from the JS bundle and scales linearly. Split `index.json` by first letter only if it passes ~500 KB gzipped.

Validation is a hand-rolled type guard or one small schema dependency (zod) inside the build script; run in `npm run build` and `node --test`.

### 4.5 URLs and stable ids

- `/t/{id}` becomes the real app with that entry focused, not a redirect. The SEO metadata, JSON-LD, and noscript body already live there; delete `TermRedirect.tsx` and the `sutra-share-*` localStorage handoff.
- `/th/{id}` thread page, same treatment.
- `?open=a,b,c` carries the rest of the board in order. `pushState` on open (back closes the panel); `replaceState` on reorder or resize.
- `/` home: today's thread, trail, search.
- Redirected ids (the 50 merges) get `next.config` 301 redirects so old share links and search results keep working.

## 5. Search Architecture

### 5.1 Pipeline

Keep the fast in-memory scan; replace the ad-hoc normalizer with a layered pipeline. All of it runs client-side against `index.json`.

1. **Script detection and transliteration.** Detect Devanāgarī vs Latin. Convert Devanāgarī → IAST with a tested library (§6). Echo the IAST reading under the input so the user sees how the query was read. Uppercase Harvard-Kyoto is detected by the presence of capitals before lowercasing.
2. **Keys.** Compute three keys for the query and, at build time, for every headword, form surface, alias, and expression part: `norm` (diacritic-insensitive exact key), `nfold` (nasals folded, recall fallback), `ascii` (lossy fold: `sh→ś/s`, `aa→ā`, `ri→ṛ`, `w→v`, `gy→jñ`, the current regex chain's intent but expressed as a tested table with golden vectors). This replaces `normalize()` in `search.ts:4-30`.
3. **Candidate generation**, in order, stopping when a higher tier yields enough: whole-query match against headword/form/alias keys (exact → prefix → substring); multi-token match (each token against keys; all-tokens-hit as parts → expression candidate); authored `keywords` match (English); thread title/question match; definition-text match last, as today.
4. **Segmentation for unknown multi-part Sanskrit** (the "śuddhabuddhasvarūpastvaṃ" case): greedy longest-match over a trie of headword and form keys, with a small hand-written table of external sandhi at boundaries (visarga → `s/r/o`, final `m` → anusvāra, `a+a`, `a+i`) so that `svarūpastvam` yields `svarūpaḥ + tvam`. Results are labeled "parts, approximate". This is a lookup aid over a closed vocabulary, not a parser; when it fails it says nothing.
5. **Ranking.** Additive signals instead of exclusive tiers: match tier, surface kind (headword > form > alias > keyword), has-`vedanta` boost, kind (word > expression > affix), length ratio, and later corpus frequency. Group by entry so a stem and its forms appear once, with the matched surface as a hint. Cap at 30; debounce ~80 ms.
6. **Fallback lexical lookup** (later): when nothing in the glossary matches a Sanskrit query, look the key up in a lazily loaded MW headword index and offer a clearly labeled "Dictionary" result. Never inserted into the glossary.

### 5.2 Now vs later

| Capability | Now (no linguistic infrastructure) | Later (requires data or a service) |
|---|---|---|
| IAST, forgiving romanization | Tested key tables replacing the regex chain | — |
| Devanāgarī input | Library transliteration to IAST at query time | — |
| English → candidates | Authored `keywords` + definition text; distinctions shown | English-Sanskrit dictionary indexes (MW 1851, Apte E-S) as a labeled fallback |
| Inflected form → entry | Forms index from rule-based `lemma` + overrides (covers the glossary's own nominatives) | Full paradigms generated offline with vidyut-prakriya for curated stems; DCS attested forms as backstop |
| Compounds / expressions | Authored expressions with `parts`; greedy trie segmentation with a few sandhi rules, labeled approximate | Offline compound-split proposals from ByT5-Sanskrit / Samsaadhanii, human-reviewed, stored as expressions |
| Grammatical labels | `gram` from MW `lex` where present | Case/number per form from generated paradigms; ambiguity enumerated, not resolved |
| Verse / pasted phrase | Multi-token lookup only | A segmentation service, if ever; see §6.4 |

---

## 6. Sanskrit Infrastructure Research

Verified live on 2026-09-04 by fetching repos, licenses, registries, and endpoints. Items marked *unverified* could not be confirmed from a primary source.

### 6.1 Lexical data

| Source | Provides | License (verified) | Format / size | Use |
|---|---|---|---|---|
| Cologne CDSL `csl-orig` MW (`sanskrit-lexicon/csl-orig`) | 286k MW records, SLP1 headwords, `<info lex="m">` gender/POS, `STEM=`, senses | **CC BY-NC-SA 3.0** per each dictionary's TEI header (repo LICENSE says CC BY-SA 4.0; the header governs). Current Sutra attribution is correct. | plain text / SQLite (`csl-sqlite`, weekly) / JSON (`csl-json`, mw.json 64 MB) | **Import at build.** Rebuild `mw-enrichment` reproducibly; take gender/POS for `gram`; keep MW's own citations. |
| Apte 1890 (`ap90`), Macdonell (`md`) | more modern glosses | CC BY-NC-SA 3.0 | same pipeline | Optional enrichment; same license class as MW. |
| Apte 1957 (`ap`) | — | **Not open** (Prasad Prakashan) | — | **Do not ship.** |
| MW English-Sanskrit 1851 (`mwe`), Apte E-S (`ae`), Borooah (`bor`) | English → Sanskrit | CC BY-NC-SA 3.0 | csl-json 8-16 MB each | Later, as a labeled fallback for English queries. No new license class. |
| `sanskrit-lexicon/MWinflect` | 288k generated nominal inflection rows, form → lemma | CC BY-SA 4.0 | TSV / SQLite | Candidate forms backstop; derived from MW so treat conservatively. |
| `sanskrit-lexicon/AMAR` (Amarakośa, from UoH data) | ~10k synonym entries with gender codes | CC BY-SA 4.0 | CDSL text, SLP1 | Good synonym layer later; small enough to ship statically. Replaces the OCR in `data-sources/raw`. |
| Sanskrit WordNet (IIT Bombay) | synsets | GPL/GFDL claimed; registration-gated; format *unverified* | — | Skip. |
| `sanskrit/data` (Arun Prasad) | nominal endings, pronoun paradigms, sandhi rules (CC0, <150 KB); Heritage roots (LGPLLR); MW stems (CC BY-NC-SA) | three licenses in one repo; last push 2024-11 | CSV | The **CC0 tables are the clean core** for a forms generator. |
| Dharmamitra data repos | Buddhist-parallel texts, StarDict dictionaries | mostly **no LICENSE file** | — | Skip. |
| External APIs (CDSL `getword.php`, Ambuda `/api/dictionaries`, sanskritdictionary.com, wisdomlib) | HTML fragments | undocumented, no terms; CDSL's documented REST API returns 404 | — | **Do not use at runtime.** |

### 6.2 Transliteration

| Library | License | Size | Verdict |
|---|---|---|---|
| `@indic-transliteration/sanscript` 1.3.3 | MIT | 270 KB | **Adopt** for Devanāgarī ↔ IAST ↔ SLP1/HK/ITRANS. Lossy-scheme caveat does not affect these pairs. Round-trip correctness not yet tested by us; add golden vectors. |
| `@sanskrit-lexicon/sanskrit-util` ≥ 0.10.0 | MIT | small | **Adopt or vendor** for `norm()`, `nfold()`, `normalize_sanskrit()`, `deva_to_iast()`. Built for exactly the regex-chain problem Sutra has, with golden vectors shared between Python and JS. npm publication *unverified*; vendor from GitHub if needed. Pin ≥ 0.10.0 (earlier `iast_to_devanagari` was broken). |
| vidyut-lipi | MIT | 232 KB WASM | No official npm package. Skip until one exists. |
| Aksharamukha JS | GPL-3.0, 16.8 MB Pyodide | — | Reject. |

### 6.3 Morphology, segmentation, and parsing

| Tool | What | Runs where | License | Quality | Verdict |
|---|---|---|---|---|---|
| **vidyut-prakriya** (Rust) | Pāṇinian generation of noun/verb/participle paradigms with rule traces | **WASM in browser** (1.0 MB + 180 KB TSV, `wasm-pack build --target web`), or Python offline | MIT code; dhātupāṭha data reported MIT (*verify*) | Published (ISCLS 2024); "moderate samāsa, weak accent" | **Adopt offline** to generate paradigms for curated stems into static JSON (~2,500 stems × ~25 forms ≈ 60k rows, 1-3 MB gzipped). Browser WASM optional later for on-demand tables and derivation traces. |
| vidyut-kosha / vidyut-cheda | lexicon FST (79 MB) / segmentation + tagging | Rust or Python service only; no WASM | MIT code; **data derived from MW (CC BY-NC-SA) and Heritage (LGPLLR)** | cheda: no published accuracy; experimental | Not for Sutra. |
| Sanskrit Heritage Platform (INRIA, OCaml) | segmenter, morphology | CGI now behind an anti-bot wall (Anubis); self-host needs OCaml 4.07 + camlp4 + Apache | no LICENSE in mirror; CeCILL claim *unverified*; resources LGPLLR | reference lexicon-based system | **Not callable.** Skip. |
| `sanskrit_parser` (Python, MIT) | sandhi split + tags; free REST API at `sanskrit-parser.appspot.com` (verified: `AtmanaH` → all three readings) | offline Python, or hobby API with no terms | MIT code, bundled Heritage data LGPLLR | maintainers: over/under-generation "quite likely"; last release 2023 | Prototype and authoring aid only. |
| **ByT5-Sanskrit / Dharmamitra** | segmentation + lemma + morph; SOTA (EMNLP 2024): 90-94% sentence perfect-match segmentation; 61% all-correct on seg+lemma+morph | hosted `POST dharmamitra.org/api/tagging/` (verified: `śuddhabuddhasvarūpastvaṃ` → `śuddha_buddha_svarūpaḥ_tvam_`, 3 s); self-host needs a 2.3 GB model + GPU | model license *unverified*; API has no terms and a shared credential; IAST input only | best available | **Offline authoring aid only**, after emailing the maintainers. Not a runtime dependency. |
| DCS (Hellwig) `OliverHellwig/sanskrit` | 5.5M human-tagged tokens: surface, unsandhied form, lemma, POS, frequency | data files | **CC BY 4.0** | gold standard | **Most valuable, lowest-risk dataset.** Use as a coverage and frequency backstop for the forms index, restricted to the Vedānta texts in Sutra's canon. Not a runtime table of 5.5M rows. |
| Hellwig & Nehrdich 2018 splitter | sandhi/compound | Python 3.5 + TF1 | AGPLv3 | superseded | Skip. |
| Samsaadhanii (UoH) | morph, sandhi, **samāsa analyzer** | third-party Docker; Perl/OCaml/C | GPL-2.0 | no benchmark | Only candidate for compound analysis as a sidecar service; offline authoring aid at most. |
| Sanskrit Library (Scharf) | 11M-form lexicon | Java servlets, registration | no open license | — | Skip. |
| SanskritShala | neural toolkit | — | Apache-2.0 | abandoned 2023 | Skip. |

### 6.4 Recommendation

"Precompute, don't parse." Sutra serves a bounded canon, so a closed-vocabulary lookup is correct and honest: normalize the script, look the key up, render all readings. Concretely:

1. Transliteration and keys from two MIT libraries (§6.2), with golden-vector tests.
2. Forms index built offline: rule-based lemma + overrides for the glossary's own nominatives now; vidyut-prakriya paradigms over curated stems later; DCS attested forms and frequencies as a backstop and for ranking ambiguous readings.
3. Compound and expression splits authored, with proposals generated offline (Dharmamitra or Samsaadhanii) and human-reviewed, stored as `expression` entries.
4. No runtime NLP, no external API in the request path, no sandhi splitter built in-house.
5. Arbitrary pasted-verse segmentation is the one capability that genuinely needs a model. It stays out of scope until there is a licensed, contracted service. Design keeps it possible (expressions with parts, multi-token search) but nothing in the MVP depends on it.

### 6.5 Licensing summary that constrains the roadmap

- **Non-commercial only:** MW, Apte 1890, Macdonell, all three English-Sanskrit dictionaries, vidyut's published data bundle, `sanskrit_parser`'s bundled data. If Sutra ever charges, these must be replaced.
- **Commercial-safe:** DCS (CC BY 4.0), AMAR and MWinflect (CC BY-SA 4.0), the CC0 tables in `sanskrit/data`, sanscript and sanskrit-util (MIT), vidyut-prakriya code (MIT), AI4Bharat Indic Parler-TTS (Apache 2.0, for offline audio generation later).
- **Not open:** Apte 1957, Sanskrit Library, most Dharmamitra data repos, the Gambhirananda OCR already in the repo.

### 6.6 Pronunciation and audio

No open word-level Sanskrit pronunciation dataset exists. Google Cloud TTS does not support Sanskrit. The practical path later is batch-generating audio offline with AI4Bharat Indic Parler-TTS (Apache 2.0; Sanskrit native-speaker score reported near-perfect) for the headwords and serving files from Supabase Storage. Not in MVP.

## 7. Source Architecture

### 7.1 Model

```ts
interface Source {
  id: SourceId;          // "dayananda-glossary-2013", "mw-1899", "vivekacudamani", "bsb-sankara", "tadatmananda", "sutra-editorial", "user"
  kind: "primary" | "bhasya" | "prakarana" | "teacher" | "lecture" | "dictionary" | "grammar" | "editorial" | "user";
  title: string; author?: string; date?: string; edition?: string; url?: string;
  rights: "public-domain" | "cc-by-sa" | "cc-by-nc-sa" | "permission" | "restricted" | "own";
  shortLabel: string;    // "Swami Dayananda's glossary (2013)", "Monier-Williams (1899)"
}

interface Attribution {
  source: SourceId;
  mode: "quotes" | "paraphrases" | "synthesizes";
  locator?: string;      // "2.4.5", "verse 240"
}
```

The brief's distinction between "this text explicitly says X" and "Sutra is synthesizing to explain X" is the `mode` axis; `Source.kind` supplies the who. The two together cover all six categories the brief lists: direct textual evidence (`primary` + `quotes`), traditional commentary (`bhasya`), teacher explanation (`teacher` / `lecture` + `paraphrases`), dictionary and grammar (`dictionary` / `grammar` + `quotes`), editorial synthesis (`editorial` + `synthesizes`), user-created (`user`).

### 7.2 Granularity: the minimum that is not a lie

Attach provenance **per block** for prose (definition, each `vedanta` block, etymology), **per item** for relations, citations, and thread steps, with an **entry-level default** that blocks inherit. Per-entry-only is a lie because one entry mixes the Dayananda definition with the owner's synthesis. Per-sentence is unaffordable and unrenderable. Per-sense of the `;`-split definition is unnecessary because all senses of one definition share a source.

### 7.3 Rendering: one derived line, never authored copy

The UI label is computed from `(source.kind, mode, locator)`:

| Attribution | Rendered line |
|---|---|
| `primary` + `quotes` + locator | "Bṛhadāraṇyaka Upaniṣad 2.4.5" |
| `bhasya` + `paraphrases` | "Following Śaṅkara's commentary" |
| `teacher` + `paraphrases` | "As Swami Dayananda explains" |
| `dictionary` + `quotes` | "Monier-Williams (1899)" |
| `editorial` + `synthesizes` | "Sutra's synthesis" |
| `user` | "Your note" |

Placement: a muted single line beneath each block, replacing today's tooltip icons. A "Sources" disclosure at the bottom of the panel lists the entry's citations with text where rights allow. Nothing else. This is the same visual weight as the current "Monier-Williams, 1899" footer, applied consistently.

### 7.4 Rights enforcement at build

- If a `Source.rights` is `restricted`, any `Citation.text` or quoted `Block` over N characters fails the build. This keeps the Gambhirananda OCR from ever leaking into the product.
- `cc-by-nc-sa` sources (all Cologne dictionaries, see §6) are flagged so the About page renders the exact required attribution and so any future commercial decision can enumerate what would need replacing.
- Obtain written permission for the Dayananda/Warne glossary before 2.0 launches publicly. "Implicit" is a liability that grows with traffic and with the new prominence of provenance labels, which will name the source on every entry.

### 7.5 What is rigorous but not cumbersome about this

Authors write one `attribution` per entry and override it only on blocks that differ. Readers see one quiet line per block. The build refuses unattributed `vedanta` blocks and unlicensed quotations. That is the whole system.

---

## 8. Threads and Exploration

### 8.1 Unification

The brief lists ten names. They reduce to two content concepts and two session concepts:

| Name in the brief | Becomes |
|---|---|
| relationships | `Relation` rows on an entry, rendered as one "Related" section grouped by type with the note. Not a user-facing noun. |
| threads | `Thread` |
| custom threads | `Thread` with `owner = userId`, stored in Supabase. Same shape, different authority. |
| categories (existing) | 7 `Thread`s of shape `cluster`, no question. |
| Daily Relationship | a `featured` `Thread` selected by date. Not a content type. |
| tabs, open inquiries, workspaces | the **Board**: the existing open panels, now with a URL. One board. |
| recently explored, exploration history | the **Trail**: an append-only log of opens with a `from` pointer. |

Verbs that connect them: **open** (entry or thread → board), **save as thread** (board or trail → user thread), **reopen** (trail or thread → board).

### 8.2 What a thread is

An ordered set of entries with a guiding question. Not a graph neighborhood (that is "Related" on an entry) and not a free graph.

```ts
interface Thread {
  id: string;                                   // "three-orders-of-reality"
  title: string;
  question?: string;                            // "How does adhiṣṭhāna clarify mithyā?"
  shape: "sequence" | "cluster" | "comparison" | "chain" | "hierarchy";   // layout hint only
  steps: Array<{ entry: EntryId; label?: string; note?: string; depth?: number }>;
  edges?: Array<{ from: number; to: number; type: Relation["type"]; note?: string }>;  // optional decoration
  attribution: Attribution;
  owner: "sutra" | string;                      // user id for user threads
  featured?: boolean;                           // eligible for the daily surface
}
```

Sequence, cluster, comparison, causal chain, teaching progression, and hierarchy are all `steps` plus a layout hint; `depth` covers hierarchies; `edges` are optional for comparisons. Resist letting `shape` change the data shape. Curated threads live in `content/threads/*.json`; user threads in a Supabase `threads` table with the same JSON in a `jsonb` column and RLS.

Threads have their own provenance, which is what preserves the distinction the brief asks for: a curated thread following a teacher's progression is `teacher / paraphrases`; a synthesis is `editorial / synthesizes`; "Week 12" is `user`.

### 8.3 The board is the present; the trail is the past

- **Board.** The existing `openEntries` + `panelStates`, persisted as today, now URL-addressable (`?open=`). Do not add named multiple boards. Opening a thread pushes its steps onto the board (or opens a single thread panel that lists its steps; see §12). "Save as thread" is the only way user threads are created in the first version. No thread editor.
- **Trail.** `{entry | thread, from: EntryId | ThreadId | "search" | "daily", at}`. Because `from` is stored, it renders as the relational list the brief wants: `sākṣī ← three states ← subtle body ← pañca-kośa`. Local (localStorage, capped ~200) for anonymous users; a Supabase `trail` table for signed-in users. "Reopen" pushes onto the board. Not analytics: no counts, no charts, no "most viewed".
- **"Reopen an earlier inquiry and continue where I left off"** is satisfied by trail + save-as-thread, without a separate saved-inquiry object. A saved board is a user thread.

### 8.4 Daily Relationship

`featured` threads indexed by day (`dayIndex % featured.length`), or an explicit `schedule.json` when the owner wants control. Renders the question and the first two steps; opening it opens the thread. No server, no new type. It is the only browse surface in the product (§3.1 rule 3).

### 8.5 Where "Related" ends and threads begin

An entry's "Related" section shows its typed relations with notes, grouped by type, capped at a small number per group. It answers "what is near this word." A thread answers "how do these fit together." Per the owner's rule against stacking cross-reference sections, an entry panel shows Related and, when the entry belongs to threads, a single line "In threads: three states · sākṣī" beneath it. Not a second list.

## 9. MVP

The smallest Sutra 2.0 that demonstrates encounter → understand → context → relationship → return.

**In:**

1. **Content model migration** (§4, §7) with no visible change except provenance lines on Definition / In Vedānta / Related / Extended meanings, and Related grouped by relation type with notes. This alone makes Sutra honest about its sources.
2. **Search that resolves what a student actually encounters** (§5.1 steps 1-5): Devanāgarī input, tested keys, forms index for the glossary's own nominatives, multi-token and greedy segmentation labeled approximate, authored keywords for English, additive ranking, result cap, debounce. No fuzzy edit-distance, no embeddings, no external calls.
3. **Real URLs** (`/t/{id}`, `/th/{id}`, `?open=`), which also makes the board shareable and gives back/forward.
4. **Twelve curated threads**: the 7 categories as clusters plus 5 with real questions (śravaṇa → manana → nididhyāsana; jīva / jagat / Īśvara; three orders of reality; adhiṣṭhāna ↔ mithyā; pañca-kośa ↔ three bodies ↔ three states). Home = search + today's thread. Every thread step must have a `vedanta` block; this is the authoring plan that grows the curated corpus from 67 to roughly 120 entries.
5. **Trail**, local only (localStorage), rendered on Home and in the sidebar.
6. **A handful of authored expressions** (5-10) taken from texts the owner is reading, including `śuddha-buddha-svarūpaḥ tvam`, to prove the expression panel and the segmentation hint.
7. Deletions: `cooccurrence.json`, prose-scanned related terms, the `transliteration` field, the render-time transliterator, the localStorage share handoff, false claims in README/Info.
8. Notes sync merge fix (prerequisite for later per-user features).

**Out, and why:**

- User threads and "save as thread": prove curated thread rendering first; the verb is a follow-up.
- Trail sync to Supabase: one table, but it reuses the sync pattern that is currently wrong; ship after item 8 has soaked.
- Verse or phrase parsing, sandhi splitting: needs a model or service (§6.4). Multi-token lookup is the honest 20%.
- Full paradigm generation, DCS import, `gram` for all entries: lexical expansion, not thesis.
- MW pipeline rebuild, Apte/Macdonell, English-Sanskrit dictionaries: enrichment.
- New corpora ingestion (Gītā, Upaniṣads): needs licensed clean text and the owner's own <10-scriptures rule says do not ship source passages thin; Vivekacūḍāmaṇi citations alone ship as locators with text.
- Audio, Devanāgarī authored overrides for all entries, root/affix traditional glosses: content work that runs in parallel and lands when ready.
- Concept entity, multiple boards, graph visualization, thread editor: no instances that do not fit.
- About page beyond moving the modal's content: cosmetic.

## 10. Migration Strategy

**Principle: decouple data risk from UI risk.** The first structural move is a build script that generates the new model from today's files and asserts its integrity while the UI keeps reading the old shape. Only when the generated content passes validation does the UI switch to the loader.

### 10.1 Steps, in order

1. **Generate `content/` once from the existing sources.** `scripts/build-content.ts` reads `glossary.ts`, `roots.ts`, `morphemes.ts`, `categories.ts`, and `data-sources/generated/vivekachudamani.json`, and emits `content/entries/*.json`, `threads/*.json`, `sources.json`, `relations.json`, `citations/vivekacudamani.json`, `redirects.json`. Run the integrity tests. Fix what fails by hand. After this step `content/` is the source of truth and `glossary.ts` is deleted.
2. **Add the content loader** (`getIndex()`, `getEntry(id)`, `getThread(id)`, async) and a single shared hook that both `DesktopHome` and `MobileHome` consume for board state and entry loading. Replace `glossary` imports in `search.ts`, `WordPanel`, `EntryBody`, `t/[id]`, `sitemap.ts`. Panels gain a loading state. This is the only UI-wide step; doing it through one hook is what stops every later feature being built twice.
3. **URL state.** `/t/[id]` renders the app with the entry focused; `?open=` carries the board; `TermRedirect.tsx` and the `sutra-share-*` keys are deleted; `next.config` gains 301 redirects for merged ids.
4. **Provenance lines + grouped Related.** Pure rendering over the new model.
5. **Search layer** (§5): new normalization keys, Devanāgarī input, forms index, multi-token.
6. **Threads, home, trail** (§8, §12).
7. **Notes sync fix** (`updated_at` last-write-wins, per-user tombstones, ordered fetch) before the trail table reuses the sync pattern.

### 10.2 Risky migrations and how each is handled

| Risk | Handling |
|---|---|
| `notes.entry_id` for the 50 merged ids | One-time SQL `update notes set entry_id = canonical where entry_id in (...)`, plus `redirects.json` applied on read in the client so unsynced local notes migrate too. PK is `(user_id, id)`, so re-pointing cannot collide. |
| Old `/t/{merged-id}` share links | Keep them in `generateStaticParams`; serve 301s via `next.config` redirects. |
| localStorage board keys | `sutra-open-entries` already stores ids; apply redirects on read. `sutra-panel-states` is keyed by id; same. |
| `relatedTerms` strings → ids | Build fails on unresolved strings. Collisions between a stem and its nominative resolve through redirects and the forms index. Expect a few dozen manual fixes. |
| 107 bare-`h` headwords | Fix `headword` only; assert ids unchanged; assert the forms index gains the `ḥ` surface. |
| Devanāgarī moves from render to build | Round-trip test against the 6 authored entries and the forms index using the chosen library (§6), not the hand-rolled table. |
| Search behavior change | Snapshot the top-10 results for ~50 representative queries before the switch; diff after. |
| Copyrighted OCR in `data-sources/raw` | Leave out of runtime; the rights guard in the build makes accidental inclusion a build failure. Consider removing the BSB OCR from the repo entirely. |
| MW pipeline unreproducible | Rewrite `parse-mw.mjs` to fetch the Cologne file by URL + checksum; keep the output stable; add `lex` normalization. Not on the MVP critical path. |

### 10.3 Integrity tests (run in `npm run build` and `node --test` via `tsx`)

Every `Relation.to`, thread step, `etymology.root/affix/part`, citation entry, and redirect target exists and is not itself a redirect. Every `attribution.source` exists in `sources.json`. Every `vedanta` block has an attribution. No two entries of the same kind share a normalized form surface unless listed in overrides. No `restricted` source has quoted text over N characters. Entry and thread counts are asserted (catches silent drops). `index.json` has a size budget.

## 11. Phased Roadmap

The brief's order (groundwork → search → threads → lexical → accounts → parsing) is nearly right. Two changes from the repository analysis: URL state and the shared state hook belong in groundwork because every later feature is otherwise built twice; and the lexical expansion splits into a cheap part (forms index for the glossary's own nominatives, needed by search) and an expensive part (generated paradigms, DCS, grammar) that comes after threads because content, not grammar, is what the thesis is judged on.

| Phase | Work | New user capability | Authoring deliverable paired with it |
|---|---|---|---|
| **0. Groundwork** | `content/` model + build + integrity tests; loader + shared board hook; URL state; provenance lines; grouped Related; notes sync fix; truthful copy; Devanāgarī-capable font | Shareable board, back/forward, honest source labels, entry pages that render on first paint | Convert 800 relations, fix ~50 merges and 107 headwords, write `sources.json` |
| **1. Search** | Transliteration + key libraries; Devanāgarī input; forms index (rule-based); multi-token + greedy segmentation; keywords tier; ranking, cap, debounce; search snapshot tests | Search what you encountered, in any script, in any spelling, in the form it appeared | Author `keywords` for the ~120 curated entries; 5-10 expressions |
| **2. Threads** | `Thread` type, thread panel, `/th/{id}`, Home with today's thread, trail (local), "In threads" line on entries | See how concepts relate; a reason to open Sutra that is a study prompt, not a feed | 12 threads; ~50 new `vedanta` blocks with attribution |
| **3. Lexical expansion** | Reproducible MW pipeline with `lex` → `gram`; vidyut-prakriya paradigms for curated stems (offline) → forms JSON; DCS backstop for the canon; root/affix pages; authored Devanāgarī review | Grammar line on entries; inflected forms of curated stems resolve; etymology is navigable | Traditional root/affix glosses from the ashram; stem list for the canon |
| **4. Accounts** | Trail table; "save as thread"; user threads table; reopen | Continuity across devices; own study threads with the same provenance honesty | — |
| **5. Expressions and sources** | Offline compound-split proposals (Dharmamitra/Samsaadhanii) with review; licensed clean-text ingestion (Vivekacūḍāmaṇi first, then Gītā/Upaniṣads when clean sources are secured); citation text in panels; rights guard | Meet a compound in a verse and understand its parts; read the passage a claim rests on | Reviewed splits; a source-text ingestion checklist per text |
| **6. Beyond** | Offline audio generation; MW/English-Sanskrit fallback lookup; browser WASM derivation traces; a segmentation service only if a contracted one exists | Pronunciation; unknown-word dictionary fallback; paste a phrase | — |

Phases 0-2 are the MVP (§9). Each phase ends with the integrity tests green, the search snapshot diff reviewed, and the `verify` skill runbook driven through the affected flows on desktop and mobile.

## 12. UI / Information Architecture

### 12.1 Structure

| Surface | Route | Role |
|---|---|---|
| Home | `/` | Search first. Beneath it: today's thread (question + first two steps), then the trail if any, then one short orientation paragraph with a link to About. Signed-out users see the same page; sign-in is a small link in the top bar. No hero block in the app; marketing copy belongs on an About page. |
| App with board | `/?open=a,b,c` · `/t/{id}?open=…` · `/th/{id}?open=…` | The existing desktop panel board and mobile tab view, now URL-backed. |
| Entry | `/t/{id}` | One page for word and concept. SEO metadata already exists here. |
| Thread | `/th/{id}` | A panel like an entry panel: question, steps with labels and notes, provenance line, "Open all" and "Save as thread". |
| About | `/about` | Purpose, sources and orientation, licenses, keyboard shortcuts. Replaces the modal's content growth. |

No catalog of threads, no browse-by-category page, no history page. The trail is a section on Home and a small popover in the sidebar.

### 12.2 Universal search

One input, no mode switch. The results list groups by what matched, in this order and with a muted label per group when more than one group is present:

1. **Entries** matched by headword, form, or alias (the matched surface shown when it differs from the headword: `svarūpaḥ → svarūpa · nom. sg.`).
2. **Expressions** and multi-token segmentations (`śuddha · buddha · svarūpa · tvam`), labeled "parts" when approximate.
3. **By meaning**: entries whose authored keywords match (label shows the keyword: "matched: witness").
4. **Threads** whose title or question matches.

Rules: never render a single English→Sanskrit answer as "the translation"; show the distinguishing gloss for each candidate. Cap results; debounce input. Devanāgarī input is accepted and echoed as IAST beneath the box so the user sees how it was read.

### 12.3 Entry panel, top to bottom (fixed order, progressive disclosure)

1. Devanāgarī headword (in a Devanāgarī-capable font), IAST, grammar line when known (gender, part of speech, lemma when the headword is inflected).
2. Definition with provenance line.
3. Etymology (root, affixes, parts) as links, not text.
4. In Vedānta: the `vedanta` blocks, each with a label and provenance line. Present only for curated entries; the panel for `yuta` ends after step 3.
5. Related: grouped by relation type, notes shown, small caps. Plus one line "In threads: …".
6. Extended meanings (MW) collapsed, as today.
7. Sources disclosure: citations with text where allowed.
8. Notes and composer, as today.

Expressions use the same panel; step 3 becomes the part-by-part breakdown with the `etymology.note` explaining why the encountered form differs.

### 12.4 Exploration state

- Opening from a thread, a relation, search, or the daily surface records the `from` pointer. The trail renders as a quiet indented list; clicking any item reopens it.
- Desktop keeps the panel board and the full keyboard contract from `CLAUDE.md`; add `t` to open the trail popover and nothing else.
- Mobile keeps the tab-chip model; a thread is a tab like any other.
- Back button closes the most recently opened panel (pushState per open).

### 12.5 Account features

Sign-in unlocks: notes sync, trail sync, saved threads. Nothing else is gated. Account UI stays a small dropdown. No profile, no settings page beyond theme.

### 12.6 Interaction principles

- The first screen of any panel answers "what is this". Depth is below the fold and collapsed.
- One provenance line per block, one cross-reference section per panel, one browse surface in the product.
- Every surface has a way back to the source text: citation locators are the exit, not a dead end.
- Both UIs consume the same hooks for board, trail, loader, and search; the two Home files are layout only.

## 13. Open Questions

### Product

1. **Commercial intent.** Will Sutra ever charge or carry sponsorship? This single answer decides whether MW, Apte, Macdonell, the English-Sanskrit dictionaries, and vidyut's data bundle can be used (all non-commercial) or must be replaced by DCS, AMAR, and the CC0 tables.
2. **Thread panel vs "open all".** Does opening a thread open one panel that lists its steps, or push every step onto the board? Recommendation: one thread panel with per-step open, because a five-step thread pushing five panels defeats "return to study".
3. **Home for signed-out users.** Is the daily thread shown before sign-in? Recommendation: yes; sign-in gates only sync.
4. **Beginner default.** Should the grammar line and Devanāgarī-first header be on by default, or disclosed? Recommendation: Devanāgarī + IAST always; grammar line always when known; nothing else above the definition.
5. **Shabda boundary in practice.** "Save as thread" and the trail edge toward personal study tooling. Where is the line: private collections yes, review prompts no?

### Linguistic / Sanskrit

6. **Canonical headword form.** Keep the Dayananda nominative convention as the display form, with the stem as `lemma`? This plan assumes yes. The alternative (stems everywhere) touches every entry and every URL.
7. **Lemma rules and overrides.** Who reviews the rule-based `lemma` output for the ~1,150 inflected headwords, particularly consonant stems (`ātmā` → `ātman`) and feminines?
8. **Ambiguity display.** When a form has several readings (`ātmanaḥ`: ablative, genitive, nominative plural), show all, ranked by frequency, with no resolution. Acceptable?
9. **Scope of the sandhi table** for greedy segmentation: visarga and final-`m` only, or vowel sandhi too? Recommendation: start with the four rules in §5.1 and log misses.
10. **Which texts define the canon** for the stem list and DCS backstop? Proposed: Tattvabodha, Ātmabodha, Vivekacūḍāmaṇi, Dṛg-Dṛśya-Viveka, Aparokṣānubhūti, Bhagavad Gītā, the principal Upaniṣads, Brahma-Sūtra (sūtras only).

### Content / editorial

11. **Written permission** for the Dayananda/Warne glossary, and the exact attribution wording that must appear on every entry.
12. **Traditional root and affix glosses.** Timeline for consulting the ashram; until then roots ship labeled "Sutra's synthesis". Acceptable?
13. **Thread authorship policy.** Which threads are `teacher / paraphrases` (following a known teaching progression) versus `editorial / synthesizes`? Who signs off?
14. **Vivekacūḍāmaṇi text.** Is the sanskritdocuments.org ITRANS acceptable to display under its "personal study" note, or should a public-domain edition be re-keyed?
15. **Removing the Gambhirananda OCR from the repository** (it is copyrighted and unused at runtime).
16. **Keyword authoring.** English keywords are the entire English → Sanskrit story in MVP. Who writes them for ~120 entries, and against what vocabulary (the teacher's English usage)?

### Technical

17. **`content/` file granularity.** One JSON per entry (2,359 files) vs per-letter files. Recommendation: per entry; git handles it and diffs stay legible.
18. **Schema validation dependency.** Hand-rolled guards or one small library (zod)? Recommendation: zod, one dependency, used only in the build script.
19. **Loader boundary for offline.** Prefetch all `e/{id}.json` on install (~2-3 MB gzipped), or cache on first open only? Recommendation: cache on open, with an explicit "keep offline" action.
20. **`/t/[id]` rendering the app.** The app is client-only and viewport-split; the entry route will render the SEO body server-side and mount the client app with the entry pre-focused. Confirm this is acceptable versus keeping a redirect.
21. **Test runner.** `node --test` via `tsx` (no new dependency) vs vitest. Recommendation: `node --test` for integrity and key tables; the existing `verify` runbook for flows.
22. **Notes id scheme.** Keep `note-${Date.now()}-${counter}` or move to UUIDs when adding the trail table? Recommendation: UUIDs for new tables; leave notes as is.

---

## Next steps on approval

1. Check this document into the repo as `docs/sutra-2.0-plan.md` on this branch and open a PR so it can be refined in review.
2. Resolve open questions 1, 6, 11, and 20 before Phase 0 starts; the rest can be decided inside their phase.
3. Phase 0 begins with `scripts/build-content.ts` and its integrity tests, run against the existing data with no UI change, so the first PR is pure data migration and is reviewable as such.

### Verification approach per phase

- **Data:** integrity tests in `npm run build` (§10.3); entry and thread counts asserted; size budget on `index.json`.
- **Search:** golden vectors for keys and transliteration; a snapshot of top-10 results for ~50 representative queries (IAST, ASCII, Devanāgarī, English, multi-token) diffed before and after each change.
- **UI:** the existing `verify` skill runbook (build, start on port 4123, Playwright) extended with: `/t/{id}` renders the entry without redirect, `?open=` restores the board, back closes a panel, Devanāgarī query returns results, thread panel opens from Home, provenance line present under Definition, mobile tab view for a thread.
- **Notes sync:** a two-tab scenario (edit in tab A, reload tab B) confirming last-write-wins by `updated_at`; not headless-verifiable end to end, so documented as a manual step.
