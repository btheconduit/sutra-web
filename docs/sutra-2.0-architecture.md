# Sutra 2.0 — Architecture (revision 3.1)

Revision 3.1 is a convergence patch on the approved revision 3: card keys described as presentation identity; Passage vs Expression clarified; curated ranking softened to a signal; workspaces made explicitly disposable; grammar provenance surfaced at section level; the first milestone decoupled from full paradigms. No new objects, surfaces, or infrastructure.

Third pass. Revision 2 (the "reconsideration") separated broad Sanskrit reference knowledge from curated Vedānta knowledge and unified search across both; that work is kept. This revision corrects the user-facing product model: the user experiences Search, Cards, Workspaces, and Favorites, and the knowledge objects stay underneath. The first plan is kept as `docs/sutra-2.0-audit.md` for its repository audit and infrastructure research; where documents conflict, this one wins. Nothing has been implemented.

Grounding checks run today against the repo, relevant to what follows:

- The curated glossary cannot answer Encounter A on its own. `buddha` (the adjective), the stem `svarūpa`, and `tvam` are not glossary entries; only `svarūpam` and `śuddha` are. A broader reference layer is required, not optional.
- The full Monier-Williams sense for `svarūpa` literally contains the phrase "by nature", and MW glosses `buddha` as "conscious". Gloss-level retrieval over the reference layer can recover the example; the curated definitions alone cannot.
- Framework-like knowledge is thin as entries: `avasthātrayam` exists, but `śarīratrayam`, `pañcakośa`, `manomayakośaḥ`, `jagat`, and neuter/feminine forms of the three orders are absent. Frameworks are under-represented precisely because they are not words.

---

## 1. Product model

**Sutra 2.0 is a Sanskrit and Advaita Vedānta reference environment for understanding what you encounter while studying.**

The loop: Encounter → Search → Open → Understand → Connect → Return to study.

The user-facing model has four parts. Everything else in this document exists to support them.

| | What it is | What it is not |
|---|---|---|
| **Search** | One box over everything Sutra knows: Devanāgarī, IAST, forgiving romanization, English words and phrases, inflected forms as met in texts, compounds and phrases. Resolves across the reference layer and the curated layer without the user choosing. | Not modes, not a dictionary/glossary switch. |
| **Cards** | The unit of understanding, continuous with today's panels. A card composes whatever Sutra knows about the thing: script, transliteration, meaning, grammar, Vedānta context, connections, sources, notes. Connections open other cards in the same workspace. | Not an ontology the user must learn. |
| **Workspaces** | Persistent, disposable instances of the card environment. Several at once, each with its own cards, order, and state; switchable without loss; optionally named; synced later. Deleting one deletes nothing else. | Not knowledge: adjacency implies nothing. Not a note-taking product. Not something to organize. |
| **Favorites** | Pin a card or a workspace for easy return. | Not folders, collections, notebooks, or tags. |

The immediate product question: can someone encounter almost any relevant Sanskrit word, form, phrase, or Vedānta concept; find it quickly; understand it in context; follow useful connections; and keep several lines of inquiry organized without interrupting their study?

Removed from the core planning problem, and from every section below: homepage, daily relationship, featured content, onboarding, public thread browsing or catalogs, exploration feed or history as a surface, marketing and orientation experiences.

Knowledge objects (lexeme, form, term, concept, framework, expression, relationship, thread, passage) remain in the data model because they make Sutra's knowledge reliable. They never become navigation. A thread is met as a card and opens its constituents into the workspace; a framework is a card; an inflected form opens the lemma's card with the reading shown. §3 defines that mapping.

---

## 2. Knowledge layers

### 2.1 Two layers, different provenance, different lifecycles

| | Sanskrit reference knowledge | Curated Sutra knowledge |
|---|---|---|
| Content | Devanāgarī, IAST, lexical senses, grammar, lemma, root, inflected forms, dictionary sources, later compounds and pronunciation | Explanations, technical senses, teaching context, distinctions, relationships, frameworks, sources and passages, threads |
| Origin | Imported and generated (MW and other dictionaries, inflection generators, DCS) | Authored by the owner, or by tradition through the owner |
| Cardinality | Hundreds of thousands of lexemes; millions of forms | Hundreds to low thousands of objects |
| Editing | Corrections as overrides; never edited record by record | Edited continuously |
| Storage | Generated artifacts and lookup tables | Structured files under version control |

A word can exist in the reference layer with no curated counterpart. A significant term participates in both. The layers are joined by references, not by merging records.

**Product obligation of the reference layer: Sanskrit reference in service of Vedānta reading.** The layer may be broad (a full dictionary, forms for the words a reader meets) and it answers ordinary vocabulary encountered in texts. It is not a comprehensive Sanskrit linguistic platform. Which grammatical and linguistic capabilities get built, and in what order, is decided by what Vedānta reading requires: nominal forms before verbal, the canon's vocabulary before the dictionary's, recognition before generation, and never Vedic accent, meter, or historical linguistics unless a text in the canon demands it.

### 2.2 Objects that need their own identity

| Object | Layer | Why it is a stored object and not a view |
|---|---|---|
| **Lexeme** | reference | A dictionary headword with senses and grammar. Imported; has its own source; hundreds of thousands. |
| **Form** | reference | Surface string → lexeme + morphological tags. Generated. Not a page, but has a stable composite key so an expression analysis can point at "svarūpaḥ as nom. sg. of svarūpa". |
| **Root** | reference | Dhātu with meaning and class; lexemes point to roots; roots have pages because etymology is navigable. |
| **Term** | curated | The existing 2,359 glossary entries: a curated Sanskrit vocabulary item with the Dayananda definition, aliases, and a link to one or more lexemes. Kept as its own object because its source, lifecycle, and id space are already established and notes and URLs depend on it. |
| **Concept** | curated | A Vedānta concept with technical senses, teaching contexts, and distinctions, attributed block by block. Distinct from Term because naming is many-to-many: the concept "witness" is named by `sākṣī` and `sākṣi-caitanya`; `ātmā` the term names a concept that also has senses ("body", "self") that are not the concept. About 70 today. |
| **Framework** | curated | A named structure of concepts with roles and order: avasthā-traya, śarīra-traya, pañca-kośa, the three orders of reality, sādhana-catuṣṭaya, the pramāṇas. Distinct from Concept because members and roles are structural, and cross-framework correspondence (three bodies ↔ three states) is role-wise. |
| **Expression** | both | A word group, compound, or phrase as encountered, usually within a passage: surface in both scripts, segmentation into forms/lexemes/terms with per-part gloss, meaning in context, optional occurrence in a passage, related concepts. Authored when curated; **the same shape is produced ephemerally by analysis** and is stored only when saved or curated. This is the contract that lets parsing be added later. |
| **Source** and **Passage** | curated | A work, and a textually located unit of it (a verse, a sūtra, a sentence of bhāṣya) with text and translation where rights allow. A verse's identity is a passage, not an expression. Passages are objects because expressions occur in them and concepts are illuminated by them. |
| **Relationship** | curated | A typed assertion between any two objects above, with a note and attribution. The unit of truth for connections. |
| **Thread** | curated | A curated traversal: a question and commentary over selected relationships and objects. Owns no truth. |
| **Workspace** | user | A persistent instance of the card environment holding card keys. Not knowledge. |

Each type has its own id namespace (`lex:`, `form:`, `root:`, `term:`, `concept:`, `fw:`, `expr:`, `src:`, `passage:`, `thread:`). User data (workspaces, favorites, notes) holds **card keys** (§3.2), not raw object ids, so the user's data survives the seam between the layers and the addition of object types.

### 2.3 What stays a projection

- **The card for ātman.** A view composing the lexeme, the term, the concept, its forms, expressions containing it, passages, and relationships. One card, several objects (§3).
- **A search result.** A projection that names which object matched and how.
- **"Related", "Part of", "Appears in", "In threads".** Views over relationships and memberships, grouped by predicate.
- **Senses.** Blocks inside a lexeme or concept, addressable as `concept:atma#2` when a relationship needs to point at one sense. Not objects.
- **Teaching contexts, distinctions.** Attributed blocks on a concept; distinctions also appear as `distinguished-from` relationships when they connect two concepts.
- **Categories.** Today's seven groupings become frameworks where they are one (states of experience) and are otherwise dropped.

### 2.4 Where the first plan was too aggressive, and where it was right

Too aggressive: one `Entry` with `kind`; concept as a layer; framework as a thread; form as a pure index with no identity; expression as an entry variant. Each of these would have forced the ātman page, the three-orders framework, and the pasted-phrase analysis into shapes they do not have.

Still right: forms are not pages; senses are not objects; relationships are the unit of truth; provenance attaches per block and per assertion; ids are permanent; the existing term ids survive unchanged.

---

## 3. Cards: the presentation layer over the knowledge objects

### 3.1 What a card is

A card is the thing the user is examining, rendered with the existing panel chrome (header, sections, collapsed/default/expanded states, drag, keyboard). Underneath it gathers whatever objects Sutra decides belong on that card across both layers: typically one word's lexeme(s), its curated term, the concept(s) it names, its forms, and what connects to them. A card is a presentation decision, not a lexical claim. The user never sees object types as navigation; at most a quiet kind word in the header ("word", "phrase", "concept", "framework", "question", "passage").

### 3.2 Card keys and anchor resolution

A **card key** is a stable Sutra presentation identity: the permanent name of a card, not the identity of any lexeme, term, or concept. It is minted once and never re-derived from the objects behind it. A card may intentionally gather several underlying objects; that gathering never asserts that they are one lexical object. Stress-tested before implementation (§3.6); the rules:

1. **Existing keys are frozen.** The 2,359 current ids stay the keys of their cards. Notes, `/t/{id}`, and localStorage remain valid with no rewrite.
2. **New word cards get a lossless slug of the word** (IAST stem rendered in a reversible ASCII scheme, so `kāla`, `kalā`, and `kala` are three keys). Minted deterministically at build for reference words, so the key exists before anyone has curated anything and is the same on every device.
3. **Non-word cards** (concepts without a headword, frameworks, questions, expressions, passages) get an editorial slug in the same namespace, chosen when authored.
4. **Curated content adopts existing keys.** When a term or concept is later authored for a word that already has a card, it is authored under that key. Identity never moves at the seam between layers.
5. **The card's contents are a mapping from key to objects**, built at build time: `key → { term?, lexemes[], concepts[], frameworks[], … }`. Homonymous lexemes (`cit` 1 and 2) are shown on one card, each labeled with its own identity and senses, because that is what a reader who searched `cit` wants. This is a presentation choice; the lexemes remain distinct objects, and relationships and citations continue to point at the specific lexeme or sense.
6. **An encountered form never has its own card**: it resolves to its lemma's key, and the card opens with an "encountered" strip showing the surface and its readings (§4).
7. **Redirects exist only for explicit editorial merges** (for example folding the nominative entry `atma` into a stem card, or the 50 duplicate pairs), never for growth of the knowledge behind a card. Redirects are applied on read to user data.

Resolution is a pure function `resolveCard(key) → CardModel` implemented once and used by both UIs. It gathers: the reference lexeme (if any), the curated term (if any), the concept(s) named by it, frameworks it belongs to, relationships where it is subject or object, expressions containing it, passages citing it, and the user's notes.

### 3.3 Card composition

Sections appear only when there is content, always in this order:

| Section | Populated from | Present on |
|---|---|---|
| **Header** | Devanāgarī, IAST, kind word, grammar line (part of speech, gender, lemma when the headword is inflected, root) | every card |
| **Encountered** | the searched surface and its grammatical readings, when the user arrived via a form or a segmentation | cards opened from an encountered form or expression part |
| **Meaning** | curated definition first; reference senses beneath, collapsed when a curated definition exists; expression meaning-in-context for phrases | every word, phrase, concept card |
| **Grammar and forms** | lemma, root, affixes, declension or conjugation disclosure (§4); for expressions, the part-by-part breakdown with sandhi notes | words, expressions |
| **In Vedānta** | curated concept blocks, each with its one-line source | curated cards |
| **Connections** | relationships grouped by predicate with notes; framework membership ("Part of"); threads that pass through ("Questions") | any card with connections; one section, never several |
| **Sources** | passages with text where rights allow | cards with citations |
| **Notes** | the user's notes | every card, as today |

An ordinary Sanskrit word is a header, meaning, and grammar card. `ātman`, `mithyā`, `sākṣī` are rich because reference and curated knowledge converge.

### 3.4 Cards for non-word objects

- **Framework card** (pañca-kośa, three orders of reality): header with the name in both scripts where a Sanskrit name exists; a members list with roles and order; connections; sources. Each member opens its own card.
- **Question card** (a thread): the question, the commentary in the author's order, each stop a link that opens a card into the current workspace; "open all" as one action.
- **Phrase card** (an expression, curated or ephemeral): header with both scripts; the breakdown; meaning in context; occurrence; connections to concepts. Each part opens a card.
- **Passage card** (later): text, translation where allowed, locator, the concepts it illuminates.

### 3.5 Connections are embedded

Following any connection opens the target as a new card in the current workspace, positioned after the source card, with the source recorded as `from`. Nothing opens elsewhere. If the target is already in the workspace it is focused and highlighted, as today.

### 3.6 Card-key identity: stress test and recommendation

The question: should a card key be a permanent presentation-level identity, or the id of whichever object currently anchors the card (curated term if one exists, else lexeme), with redirects as knowledge is added? Checked against the repo:

- The current lossy id scheme already hides vowel length: `kala` is kalā and `kalah` is kālaḥ. Extended to a 286k-word reference layer it collides constantly (kāla, kalā, kala). A lossless slug has zero collisions across the glossary. So reference-word keys cannot reuse today's derivation; they need a lossless scheme regardless of which option is chosen.
- `ātman` (the stem) is not a curated term; only `ātmā` is. Under "curated id wins", the ātman card would be keyed `lex:…` today and would change identity the day a stem term is authored, rewriting every workspace and favorite that holds it. That is the failure mode the review anticipated, and it is not hypothetical: it would happen for every reference word that later gains curation, which is exactly the words users care about most.
- Reference lexeme ids are not owned by Sutra. If the import changes (another dictionary, a merged lexicon), lexeme ids change; keys derived from them would too.

| Option | Pros | Cons |
|---|---|---|
| A. Anchor-derived keys with redirects (revision 3 as written) | No new concept; term ids as today | Identity moves at the seam; key derivation depends on curated state at mint time, so two devices can mint different keys for the same word before sync; keys inherit dictionary ids Sutra does not own; redirects accumulate with every act of curation |
| B. Opaque permanent ids with a registry | Fully independent identity | Needs a registry row for every reference word ever shown (unbounded), unreadable URLs, no user benefit |
| **C. Permanent word-slug keys (recommended)** | The card is named after the word, minted once, deterministic, readable, dictionary-independent; curated content adopts keys; redirects only for editorial merges | Two encodings coexist forever (frozen lossy legacy ids, lossless new ones); a slug-minting function with a collision policy must be written and tested; homonyms appear on one card by presentation choice, so the card body must label them distinctly |

**Recommendation: C.** It is the "permanent presentation-level identity" the review asked for, achieved by naming the card after the word rather than after any object, so no registry is needed for the reference layer. The key identifies the card; it says nothing about lexical identity. Migration cost is nil for existing keys. The one open detail, the lossless encoding, is deferred (§12) but must be chosen before the first reference word is shown, because the choice is permanent.

---

## 4. Grammar and forms

### 4.1 What the card shows

- **Grammar line** in the header: part of speech, gender, lemma when the headword is inflected, root when known. Only when known; never guessed.
- **Encountered strip**: for `आत्मनः` the card for `ātman` opens with "you searched ātmanaḥ: genitive singular · ablative singular · nominative plural (masculine)". All readings are listed; none is chosen.
- **Declension disclosure** for nouns, adjectives, and pronouns: the paradigm (cases × numbers, per gender) with the encountered reading highlighted. Verbs later: conjugation or, at minimum, the form's reading (tense, person, number, root). One lightweight display control toggles the table between Devanāgarī and IAST; the preference persists. Tables show pausa forms (pre-sandhi).

- **Provenance, quietly.** The grammar section carries one muted line at section or table level ("Monier-Williams inflection tables" / "generated by Pāṇinian derivation, not yet reviewed"), expandable to detail. Individual forms and readings do not each carry an attribution line. The underlying data keeps full provenance per reading, including generated versus reviewed status. Philosophical explanations, relationships, distinctions, and scriptural claims keep their explicit per-block attribution (§7, audit doc §7); grammar is the one place where honesty is served by a single quiet line.

This is reference, not practice. No drills, quizzes, or repetition.

### 4.2 Infrastructure required to do this accurately

| Need | Source | Notes |
|---|---|---|
| **Recognize a form** | A forms index: surface → (lemma, readings[], source). First from MWinflect (288k nominal rows, CC BY-SA 4.0) and from paradigms generated with vidyut-prakriya (MIT) for curated stems; later ranked with DCS attested frequencies (CC BY 4.0) | Ambiguity is returned as a list. Consonant stems (`ātman`), pronouns, and irregulars come from a Pāṇinian generator or a curated table, not from suffix stripping. Every reading carries its source in the data; the card shows it at section level. |
| **Generate a paradigm** | vidyut-prakriya run offline over every reference stem that has gender and part of speech, emitting compact tables; the browser WASM build (about 1 MB) as an on-demand fallback for stems not precomputed | Interface `getParadigm(lexeme, gender)`; whether tables are static per-stem files, Postgres rows, or WASM at request time is decided by measurement. |
| **Know the gender** | MW `lex` (normalized: `m`, `f`, `n`, `mfn`), Amarakośa gender codes, DCS | Tables are generated per gender; `mfn` stems get three tables; stems with unknown gender show "gender not recorded" and no table. |
| **Trust the table** | Full provenance in the data (source, generated or reviewed status, reviewer) for every reading and table; on the card, one quiet section-level line with the status, expandable. Cross-checking against MWinflect and DCS, a review file, and an overrides file are hardening steps that follow, not prerequisites | Trustworthy usefulness over exhaustive coverage: a correct table for the words a reader meets, honestly marked, beats a validated table for every stem. |
| **Handle sandhi** | At boundaries, in segmentation (§6), not in paradigms | The table shows `ātmanaḥ`; the encountered strip explains `ātmanaḥ + tvam → ātmanastvam`. |
| **Verbs** (later) | vidyut-prakriya tiṅanta and kṛdanta generation for roots appearing in the canon | Out of the slice. |

Scale and priority: on the order of 170k nominal stems × 24 forms is too much for the client and more than Vedānta reading needs. Precompute paradigms for curated stems and for the vocabulary of the canon; generate others on demand or not at all. The forms index for recognition is server-side first, with a pruned client-side subset for offline recognition of forms of curated stems. Perfect morphology coverage is not a prerequisite for anything in §11.

---

## 5. Search

### 5.1 Shape

One query box; no mode. Search sits above the knowledge model as four stages:

1. **Query understanding.** Detect script and language: Devanāgarī, IAST, ASCII romanization, or English. Ambiguous Latin input (`sat`, `buddha`) runs both the Sanskrit and English paths. Tokenize; for Sanskrit compute the normalization keys (audit doc §5.1, which stands); for English lemmatize and drop stopwords.
2. **Retrievers**, each over both layers where it applies, each returning ranked typed results with a reason:
   - **Sanskrit surface.** Exact, prefix, and substring over curated term surfaces, concept and framework names, expression surfaces, and reference lexeme headwords and forms.
   - **Segmentation.** For unspaced or multi-token Sanskrit, the analyzer pipeline of §6 producing an ephemeral expression whose parts resolve to terms and lexemes.
   - **English lexical.** BM25+ over gloss documents: curated definitions, Vedānta blocks, concept, framework, and expression descriptions, thread questions, and the English senses of reference lexemes. One document per sense, pooled to the object.
   - **English compositional.** Map each query content word to candidate Sanskrit stems using English→Sanskrit dictionaries and the reverse of the reference glosses; then retrieve and rank **attested** lexical items, compounds, expressions, passages, and concepts by how many query words their constituents cover, in order. Sutra never generates a Sanskrit compound as an answer. When no attested whole expression covers the query, the result says so and shows the constituent matches grouped by query word.
   - **Semantic** (deferred, gated). Vector similarity over precomputed gloss embeddings, used only when the tiers above return too little.
3. **Fusion.** Reciprocal rank fusion across retrievers with fixed weights. Curated relevance is a positive ranking signal, weighted more heavily for technical Vedānta queries (a curated In Vedānta block or concept name matching), not an unconditional override: strong lexical evidence in the reference layer can outrank a thin curated result. Both layers are always searched; the user never sees a mode.
4. **Result composition.** Every result is a card to open, resolved through the card key rules of §3.2 so that a form, its lemma, its term, and its concept collapse into one result. Results are annotated with how they matched: the matched surface when it differs from the headword, the query word a gloss matched, "approximate" on segmentations, "no attested whole expression found" when an English phrase resolves only to constituents. Kind is shown as one quiet word at most. Uncertainty is communicated, never hidden.

### 5.2 English retrieval: what makes it real without authored keywords

The research measured the current corpus: the word "pure" occurs in 25 of the 2,166 MW-enriched entries and "conscious" in 21, and `śuddha-buddha-svarūpa` exists nowhere as a record. So two things are required, and neither is a keyword list or a model:

- **Evidence.** Import at build time the CDSL English→Sanskrit dictionaries (Apte English-Sanskrit `ae`, 11,359 English headwords; Borooah `bor`, 24,609; MW English-Sanskrit `mwe`, 32,378, license to be verified) whose records already list Sanskrit equivalents per English lemma and sense, and the full MW Sanskrit→English (286,525 records) so that `buddha` is glossed "conscious" and `svarūpa` "own nature… 'by nature'". This yields on the order of 60k English→Sanskrit edges with zero editorial work. At build time, expand gloss content words through Open English WordNet 2025 (CC BY 4.0, 9.5 MB, never shipped) into a low-boost field so "witness" reaches "observer" and "eye-witness".
- **Constituent coverage over attested evidence.** Content words → candidate stem sets; attested compounds, expressions, passages, and concepts in both layers scored by coverage × stem IDF × order agreement. When nothing attested covers the whole query, Sutra shows the constituent matches grouped by query word and states that no attested whole expression was found. It retrieves evidence; it does not manufacture Sanskrit.

Worked example, "pure consciousness by nature":

| Step | Result |
|---|---|
| Content words | pure, consciousness, nature |
| Candidate stems from `ae`/`bor`/MW reverse | pure → śuddha, viśuddha, nirmala; consciousness → cit, caitanya, buddha, bodha, saṃjñā; nature → svarūpa, svabhāva, prakṛti |
| Lexical tier | `caitanyam` (definition "awareness, consciousness"), `śuddha`, `svarūpam` (MW: "by nature"), `cit` |
| Compositional, attested | `jñānasvarūpam` (covers "nature" only, low); no attested object covers all three, so the result states "no attested whole expression found" |
| If the expression is curated | `śuddhabuddhasvarūpastvam` matches on its meaning block and its constituents, and outranks everything |

Before the expression is authored, the user gets the constituent candidates grouped by their English words, with the honest statement that no attested whole expression covers the phrase. After it is authored (from Aṣṭāvakra 1.16), the exact expression is first. Either way nothing was typed as a keyword, and nothing was invented.

Other required examples resolve at the lexical tier with expansion: "witness" → `sākṣī` (MW: eye-witness, observer), "material cause" → `upādānakāraṇam` (definition), "subtle body" → `sūkṣma` + constituents, becoming exact once `sūkṣmaśarīram` exists as a term or concept.

### 5.3 Where each index lives

| Index | Content | Placement | Approximate size |
|---|---|---|---|
| Curated Sanskrit surfaces + keys | terms, concepts, frameworks, expressions | client, offline | small |
| Curated English lexical (MiniSearch BM25+, prebuilt, serialized) | ~12k gloss documents today | client, offline | ~250-350 KB gzipped |
| English → stem map (from `ae`/`bor`, pruned to stems present in the reference key set) | ~60k edges | client, offline | ~100 KB gzipped |
| Constituent index | curated compounds → stems | client, offline | ~60 KB |
| Reference lexeme headwords and forms | 286k MW headwords; forms from MWinflect or generated | server (Postgres) first; a pruned key set client-side for segmentation, sized by measurement | decided in the slice |
| Reference English senses | full MW senses | server (Postgres full-text search via one RPC) | server only |
| Vectors | entry-level int8 or binary | deferred | ~0.1-0.9 MB if ever |

Library choice from the research: MiniSearch (BM25+, MIT, ~7 KB, documented JSON serialization, per-field boosts, pluggable term processing). Stemming via a Porter stemmer at index and query time; lemmatization at build. Reciprocal rank fusion is a few lines of code, not a dependency. Postgres full-text search is the authoritative server index for the reference layer and for evaluation, not the default user path, because the PWA must work offline for the curated product.

### 5.4 Sanskrit side

audit doc §5.1 steps 1-5 stand unchanged, extended to the reference layer: keys from tested tables with golden vectors; Devanāgarī → IAST at query time; forms index; greedy segmentation over curated and reference keys with a small boundary-sandhi table; additive ranking; grouping by object with the matched surface shown.

### 5.5 Failure modes to design for

- The English→Sanskrit dictionaries are Victorian: "awareness", "non-dual", "embodiment" are absent. WordNet expansion and the modern curated glosses bridge some of it; the rest needs curated concept descriptions, which is editorial work that also serves readers.
- Constituent-only results can look like an answer. The "no attested whole expression found" line is mandatory, and constituents are grouped under the query word they matched, not presented as a phrase.
- Ambiguity is enumerated, not resolved: `ātmanaḥ` lists its readings.
- Client and server rankings diverge; the client is authoritative for what the user sees.
- Licensing of the CDSL artifacts is contested between the repository LICENSE (CC BY-SA 4.0) and per-dictionary headers (CC BY-NC-SA 3.0). Provisional until verified against the exact files redistributed.

---

## 6. Phrase and expression understanding

### 6.1 The contract

`analyze(surface) → Expression` is a pipeline with replaceable analyzers, all producing the same `Expression` shape:

```ts
interface Expression {
  id?: string;                         // present only when curated or saved
  surface: { deva: string; iast: string };
  parts: Array<{
    surface: string;                   // the segment as it appears after splitting
    form?: FormRef;                    // "svarūpaḥ" → svarūpa, nom. sg.
    lexeme?: LexemeRef; term?: TermRef; concept?: ConceptRef;
    gloss?: string;                    // meaning of this part here
    sandhi?: string;                   // "svarūpaḥ + tvam → svarūpastvam (visarga → s)"
    confidence: "curated" | "lookup" | "approximate";
  }>;
  meaning?: Block;                     // meaning in context, attributed
  occurrence?: PassageRef;             // where it was encountered
  analysis: { method: "curated" | "lexicon-trie" | "external:<name>"; alternatives?: number };
}
```

### 6.2 Analyzers, in the order they will exist

1. **Curated lookup.** The surface (normalized in either script) matches an authored expression. Confidence `curated`.
2. **Lexicon trie with boundary sandhi.** Greedy and beam segmentation over a trie of curated term surfaces, reference forms, and lexeme stems, with a small table of external sandhi at boundaries (visarga → `s`/`r`/`o`, final `m` → anusvāra, common vowel joins). Closed vocabulary, so it says nothing when it cannot cover the string. Confidence `lookup` for parts that resolve, `approximate` for the split itself. This is the first analyzer to build after the slice's core flow works.
3. **External segmentation** (later). A contracted or self-hosted segmenter (ByT5-Sanskrit class) called offline in batch, or at request time behind a cache, producing the same shape with `method: "external:…"`. Because the shape is fixed, adding it touches no consumer.
4. **Human curation.** Any ephemeral analysis can be saved as an expression, corrected, attributed, and linked to a passage. This is how the corpus of expressions grows from what users actually paste.

### 6.3 What makes the future not awkward

- A workspace card can carry an **inline expression payload**, so a pasted phrase survives as a phrase card without ever being stored server-side.
- A verse or other textually located unit is a **passage**. Word groups, compounds, and phrases encountered within it are **expressions**. A whole passage may be passed through the `analyze` contract when segmentation of the entire line is useful, and the result may contain nested expressions, but that does not make Expression the passage's identity. No separate verse object.
- Forms have identity, so analyses point at grammatical readings rather than at strings, and ambiguity is a list of readings, never a guess.
- No text library, verse navigation, annotation system, or reading progress is implied by any of this.

---

## 7. Relationships, frameworks, threads (knowledge, not navigation)

### 7.1 Definitions

- **Relationship.** `(subject, predicate, object, note, attribution)`. Subject and object are typed references to any knowledge object, optionally to a sense. Predicates are a controlled vocabulary with declared direction semantics: `synonym-of` (symmetric), `contrasts-with` (symmetric), `distinguished-from` (symmetric, with the distinction in the note), `depends-on`, `form-of`, `derived-from`, `part-of`, `member-of` (framework membership with role), `corresponds-to` (role-wise across frameworks), `explains` / `used-to-explain`, `appears-in` (occurrence in a passage), `leads-into` (teaching progression), `aspect-of`. The vocabulary grows by adding a predicate with its semantics, never by overloading `see-also`.
- **Framework.** A named, bounded structure of concepts with roles and, where the tradition gives one, an order. Stored knowledge. It can be the object of relationships (`mithyā —explained-by→ three orders of reality`) and is what `corresponds-to` relationships traverse role-wise. A framework may have a Sanskrit name that is also a term (`avasthātrayam`), or not (three orders of reality has an English name and Sanskrit members).
- **Thread.** A curated traversal: a guiding question and commentary over a selected set of relationships and objects, in the order the author wants them met. A thread cites relationships by id; it never asserts one. Its rendering is derived from the predicates it traverses (a chain of `leads-into` renders as a sequence; a set of `corresponds-to` renders as a correlation), so the thread does not fix the knowledge model to a renderer. Exact shape is deferred (§12) until the relationship vocabulary is settled on real content.

### 7.2 Stress tests with real Vedānta content

| Case | Knowledge (stored) | Thread (traversal) |
|---|---|---|
| śravaṇa → manana → nididhyāsana | Framework "the threefold means" with ordered members; relationships `śravaṇa —leads-into→ manana`, `manana —leads-into→ nididhyāsana`, each `distinguished-from` the others with notes; `appears-in` Bṛhadāraṇyaka 2.4.5 as a passage | "Why are they distinguished?" traverses the `distinguished-from` notes in framework order and ends at the passage |
| satyam → mithyā → adhiṣṭhāna | Concepts for all three; `mithyā —depends-on→ adhiṣṭhāna`, `mithyā —contrasts-with→ satyam`; framework "three orders of reality" with pāramārthika, vyāvahārika, prātibhāsika as ordered members; `mithyā —explained-by→ three orders of reality`; the rope-and-snake as a passage or illustration `used-to-explain` | "How does adhiṣṭhāna clarify mithyā?" traverses `depends-on`, the illustration, then the framework. A different thread, "How do the three orders of reality clarify mithyā?", traverses the same relationships from the framework side. Neither owns them. |
| jīva ↔ jagat ↔ Īśvara | Framework "the triad" with three members and no order; relationships between each pair with attributed notes (which text says what about their relation); `jagat` must first exist as a term (it does not today) | "What is the relationship between jīva, jagat, and Īśvara?" traverses the three pairwise relationships |
| three bodies ↔ three states ↔ sākṣī | Three frameworks (śarīra-traya, avasthā-traya, pañca-kośa) with roles; `corresponds-to` relationships between roles (sthūla-śarīra ↔ jāgrat ↔ viśva); `sākṣī —aspect-of→ ātmā`; `sākṣī —witnesses→ each state` | A correlation thread traverses `corresponds-to` across the frameworks and ends at the invariant. This case is why frameworks need roles: correspondence is between roles, not between lists. |
| ātman | Lexeme (MW senses: breath, self, body…); Term `ātmā` (Dayananda); Concept with technical senses and teaching contexts; `ātmā —contrasts-with→ anātmā`; `sākṣī —aspect-of→ ātmā`; identity with brahman as a relationship attributed to a mahāvākya passage; expressions containing forms of ātman | Threads pass through it; none is needed to render its page |

What the stress tests show: relationships carry the assertions; frameworks carry structure and roles; threads carry questions and order. Removing any one of the three forces its content into one of the others, which is what the first plan did with `steps[]`.

### 7.3 How they surface

Only through cards. Relationships appear as the Connections section of the cards they touch. A framework is a card and a "Part of" line on its members' cards. A thread is a question card and a "Questions" line on the cards it passes through. There is no graph view, no thread catalog, no framework browser. Placing two cards side by side in a workspace asserts nothing.

---

## 8. Workspaces

### 8.1 Model

A workspace is a persistent instance of the card environment: the horizontally arranged cards the product already has, with a name and an identity.

```ts
interface Workspace {
  id: string;                        // local uuid; server id when synced
  name?: string;                     // "Aṣṭāvakra 1.16"; unnamed is allowed
  cards: WorkspaceCard[];            // order is the display order
  focus?: number;                    // index of the focused card
  favorite?: boolean;
  createdAt: number; updatedAt: number;
}

interface WorkspaceCard {
  key: CardKey;                      // §3.2; today's term ids are valid keys
  state: "collapsed" | "default" | "expanded";
  encountered?: { surface: string; readings?: string[] };   // what the user actually searched, for the strip
  inline?: Expression;               // an unsaved phrase analysis, carried with the card
  from?: CardKey | "search";         // which card it was opened from; data only, no surface
  addedAt: number;
}

interface WorkspaceStore {           // one per device, later per user
  workspaces: Workspace[];           // order is tab order
  activeId: string;
}
```

Cards hold keys, not content, so a workspace never goes stale and never copies knowledge. Card state (collapsed/default/expanded) moves from the global `panelStates` map into the workspace card, which is where it belongs: the same word can be expanded in one workspace and collapsed in another.

### 8.2 Behaviour

- **Multiple, persistent, switchable.** Any number of workspaces; switching is instant and lossless; a reload restores all of them and the active one.
- **Search adds to the active workspace**, after the focused card. Selecting a result focuses the new card; a modifier (⌘-click, long-press) adds without focusing. Results already present are marked and, when selected, focused and highlighted as today.
- **Following a connection** adds the target card to the active workspace after the source card (§3.5).
- **A question card** (thread) adds only itself; "open all" adds its stops after it.
- **Naming** is inline on the tab; unnamed workspaces show their first card's headword in muted text.
- **Closing** the last card leaves an empty workspace, which is fine; deleting a workspace asks once.
- **Persistent and disposable.** Workspaces persist so an inquiry is never lost by accident, not so that every study session becomes something to organize. Deleting a workspace deletes nothing else: no knowledge, no cards, no card notes, no favorites. Workspace accumulation is not solved now; when it becomes a problem the answer will be judged then, and it will not be folders, archives, tags, or another hierarchy.
- **Not knowledge.** Adjacency asserts nothing. No automatic connections between cards in a workspace.

### 8.3 Desktop and mobile

- **Desktop:** a thin tab row above the existing card environment (tabs, "+", inline rename, close). The sidebar, panels, drag, and the full keyboard contract are unchanged. Two additions to the contract only: switch workspace (`Cmd+Shift+[` / `]`) and new workspace (`Cmd+Shift+N`).
- **Mobile:** the same model, translated. The existing chip strip is the active workspace's cards; a workspace row above it (current name, tap to switch, "+"). One card visible at a time, swipe between cards, as today.

### 8.4 Persistence and identity

- **Anonymous:** the `WorkspaceStore` in localStorage. Migration: today's `sutra-open-entries` and `sutra-panel-states` become workspace[0], unnamed; the per-user localStorage copies are folded in on sign-in. Nothing is lost.
- **Signed-in (later):** a `workspaces` table (`id`, `user_id`, `doc jsonb`, `updated_at`), RLS, last-write-wins by `updatedAt`, local-first; built only after the notes sync merge is fixed, because it reuses that pattern.
- **URLs (later):** `/w/{id}` for the active workspace with `#key` for focus; a snapshot link that reproduces a workspace for a recipient as a new local one. `/t/{id}` keeps working and adds the card to the active workspace. Not needed to prove the interaction.

### 8.5 What workspaces are not

No notes on workspaces (notes stay on cards), no descriptions, no collaboration, no permissions, no folders, no archives, no tags, no history surface. A name, an ordered list of cards, and their state.

### 8.6 Future possibility, not designed

A workspace could eventually surface relationships Sutra already knows between the cards currently open in it: existing knowledge that happens to connect the user's present objects of attention. Adjacency would still create nothing; the workspace would only reveal what the relationship table already holds. Not on the roadmap, not in the slice, not designed here.

---

## 9. Favorites

- A user can favorite a **card** (by card key) or a **workspace** (the `favorite` flag).
- Storage: a favorites list beside the workspace store; synced with the same user-data pattern later.
- Surface: one small list reachable from the sidebar (desktop) and the header (mobile), and favorited workspaces pinned first in the tab order. Favorited cards open into the active workspace. That is the whole feature.
- No folders, collections, notebooks, or tags. If favorites grow unwieldy, naming workspaces is the answer, not a hierarchy.

---

## 10. Content architecture: separate concerns, recommended boundaries

| Concern | Recommendation now | Boundary that preserves optionality |
|---|---|---|
| **Curated authoring store** | Version-controlled structured files. Prose-heavy objects (concepts, frameworks, expressions, threads, sources) as Markdown with front matter, one file each; there are hundreds, not thousands. Tabular objects (terms, relationships, redirects, overrides) as one line-per-record file each (JSONL or TSV), which diffs well and is editable in a spreadsheet. The 2,359-file layout from the first plan is withdrawn; per-object files are for objects a human writes as documents. | A `content` reader module is the only code that knows the file formats. Everything downstream consumes typed objects. |
| **Reference datasets** | Imported inputs kept out of the runtime; build scripts produce compact artifacts with an overrides file for corrections. Pipelines fetch by URL + checksum so they are reproducible. | `getLexeme`, `lookupForm`, `getRoot` interfaces; whether they read static shards or a Postgres table is hidden. |
| **Runtime delivery** | Curated objects and a compact search index shipped as static JSON, cached by the service worker, so the curated product works offline. The full reference layer is too large for the client; it is served from Supabase Postgres (read-only public tables) or static shards, decided in the slice by measurement. | Same interfaces as above. |
| **User data** | Supabase: notes now; workspaces and favorites when synced; nothing else. | Card keys in user rows, with the redirect table applied on read, so object types can grow. |
| **Future editorial interface** | Not built. Because curated content is files and the reader is one module, an internal editor can be a local tool that reads and writes those files (or a GitHub-backed form), and later an editorial database with export to files if volume demands. | Do not let runtime storage and authoring storage be forced to coincide; the build step is the seam. |

The answer to "who is this optimized for": the authoring store is optimized for the owner editing content by hand today and through a tool later; the runtime artifacts are optimized for the reader; the reference layer is optimized for reproducibility. They meet at the build.

---

## 11. Vertical slice

**Goal:** prove the core interaction before any migration:

Search → open card → inspect meaning, grammar, context → follow a connection into another card → keep both in a workspace → switch to another workspace → return with state intact.

Tested with three primary encounters: `आत्मनः` (form recognition and grammatical/lexical understanding), `witness` (English discovery of Sanskrit and Vedānta knowledge), and `mithyā` (conceptual relationships and navigation), plus the workspace tests. The 2,359 entries, notes, auth, `/t/[id]`, and the existing panel UIs are reused as they are.

### 11.1 Must build (proves the flow)

| Piece | Work | Reuses |
|---|---|---|
| **Transliteration and keys** | The two MIT libraries (or vendored); Devanāgarī → IAST at query time; `normalize()` replaced by tested keys behind the same signature; golden-vector tests | `lib/search.ts` call sites |
| **Reference layer, minimal** | One build script imports MW headwords with normalized gender and part of speech, and senses, into a Supabase table with read-only public select. A `getLexeme` interface hides the storage | `scripts/` pattern, Supabase client |
| **Form recognition** | Import MWinflect into a `forms` table (surface key → lemma, readings, source); readings also derived from the generated paradigms below; rule-based fallback for the glossary's own nominatives; `lookupForm(surface)` returns all readings with their source. Must resolve `ātmanaḥ` to `ātman` with its three readings | Search index for curated keys |
| **Paradigms for a seed set** (not a prerequisite for the core flow) | vidyut-prakriya run offline over the curated stems with known gender, emitting static per-stem JSON with provenance; `getParadigm(key, gender)`; the table carries the section-level status line. If generation becomes a delaying dependency, the slice validates the card experience with encountered-form recognition first and adds the table immediately afterward. No cross-validation in the slice | `lib/mw.ts` lazy-load pattern |
| **English lexical tier** | MiniSearch BM25+ over curated definitions, Vedānta blocks, existing MW senses, and the new curated objects, with build-time WordNet expansion and the `ae`/`bor` English → stem map; results show the matched gloss so the user sees why | `mw-enrichment.json`, `SearchSidebar` |
| **Card resolver and composition** | `resolveCard(key)` implemented once; `EntryBody` becomes the card body rendering the sections of §3.3 from a `CardModel`: header grammar line, encountered strip, meaning with reference senses beneath, grammar and forms with the declension disclosure and script toggle, In Vedānta, Connections, Sources, Notes | `WordPanel`, `EntryBody`, `MwSection`, `Notes` |
| **Curated micro-corpus** | A `content/` folder beside `glossary.ts`, not a migration: concepts for mithyā, satyam, adhiṣṭhāna, sākṣī, ātmā, anātmā; one framework (three orders of reality); about ten typed relationships with notes and one attributed source line each; one question (thread) "How does adhiṣṭhāna clarify mithyā?". Concepts link to existing term ids | Term ids |
| **Framework and question cards** | Rendered with the same card chrome; members and stops open cards into the active workspace | Card chrome |
| **Workspaces** | `WorkspaceStore` in localStorage; migration of `sutra-open-entries` and `sutra-panel-states` into workspace[0]; desktop tab row; mobile workspace row; search adds to the active workspace; the two new shortcuts; card state per workspace | `page.tsx`, `DesktopHome`, `MobileHome` tab strip |
| **Result composition** | Results resolved to card keys (form → lemma card with the encountered strip), matched-surface hints, one quiet kind word; Devanāgarī echoed as IAST | `SearchSidebar`, mobile results list |

### 11.2 Should build (search breadth, same slice if time allows)

- **Compositional tier** over attested evidence, so "pure consciousness by nature" yields constituent matches grouped by query word and the "no attested whole expression found" line, and "material cause" → `upādānakāraṇam`.
- **Segmenter v1** (§6.2 step 2) so `śuddhabuddhasvarūpastvam` yields a phrase card with parts; requires a pruned client key set sized by measurement.

### 11.3 Not in the slice

Content migration of the 2,359 entries; the full provenance model; migration of the 800 `relatedTerms` (they render as today beneath the typed Connections, marked legacy); notes changes; workspace URLs and sync; favorites; MW pipeline rebuild; verb conjugation; semantic tier; any parsing service; homepage, daily, About, onboarding, history.

### 11.4 Pass criteria

**Linguistic encounter.**
1. Search `आत्मनः` (and `ātmanaḥ`, `atmanah`). The first result is the card for `ātman`, shown with "you searched ātmanaḥ" and its readings (genitive singular, ablative singular, nominative plural).
2. Open it. The header shows Devanāgarī, IAST, "noun, masculine, stem ātman". Meaning shows the curated definition of `ātmā` with MW senses beneath. Grammar and forms lists all known readings of `ātmanaḥ` honestly, with the section's quiet provenance line. When the paradigm is available, the declension table opens with the `ātmanaḥ` cells highlighted and the script toggle switches it between Devanāgarī and IAST with the choice persisting; the table is required by the end of the slice, not by the first milestone. In Vedānta shows the curated blocks with their source line.
3. Connections lists `anātmā` (contrasts with) and `sākṣī` (aspect of) with notes. Open `sākṣī`; it appears after `ātman` in the same workspace.

**English encounter.**
4. Search `witness`. `sākṣī` is at or near the top, annotated with why: the matched gloss ("witness"; MW "eye-witness, observer") and its Vedānta line. Opening it shows the definition, the curated In Vedānta block with its source line, and connections to `ātmā` and `caitanyam`. `draṣṭā` or other attested witnesses may follow; nothing constructed appears.
5. Search `pure consciousness by nature` (should-build tier): constituent matches grouped under pure / consciousness / nature and the line "no attested whole expression found".

**Vedānta encounter.**
6. Search `mithyā`. Open it. Connections shows `adhiṣṭhāna` (depends on) and `satyam` (contrasts with) with notes, "Part of: three orders of reality", and the question "How does adhiṣṭhāna clarify mithyā?".
7. Open `adhiṣṭhāna`, then the framework card; its members open into the workspace.

**Workspaces.**
8. Name the workspace. Create a second workspace, search and open `śuddha`, `svarūpam`, `cit`. Switch back: the first workspace's cards, order, focus, expanded states, and open declension table are intact. Switch forward: the second is intact.
9. Reload: both workspaces and the active one are restored. Sign-in and sign-out do not disturb them.
10. On mobile: the same steps with the workspace row and chip strip.

**Quality bars.** Curated search under ~50 ms per keystroke and working offline; reference lookups and paradigms degrade with a clear "offline" state rather than an error; no card section renders without content; the grammar section carries its provenance and review status at section level, and the data carries it per reading; explanations, relationships, and scriptural claims carry explicit attribution; no Sanskrit appears in results that is not attested in a source.

### 11.5 What the slice decides

Reference-layer storage (Postgres, static shards, or both); how paradigms are delivered (precomputed, per-stem fetch, or WASM); whether the card resolver lets both UIs share one body without a redesign; whether the workspace tab row and per-workspace card state feel right on mobile; whether the English tiers make the reference layer feel searchable enough to defer embeddings; whether workspace URLs are needed before sync.

---

## 12. Decisions we can defer

- Whether the 2,359 terms eventually merge into lexeme + concept, or remain a third object indefinitely.
- The exact thread shape and its renderers, until at least five questions exist over a settled relationship vocabulary.
- Reference-layer storage: Postgres vs static shards vs both. Decide after measuring the slice.
- Paradigm delivery: precomputed for all stems, per-stem fetch, or in-browser WASM generation.
- Verb conjugation tables and the scope of kṛdanta coverage.
- Whether the script preference is one global control or per table.
- The lossless ASCII encoding for new card keys (permanent once chosen; must be fixed before the first reference word is shown).
- How workspace accumulation is handled, if it ever needs handling. Not with a hierarchy.
- Whether a workspace ever surfaces known relationships between its open cards (§8.6).
- File formats per curated object type, and whether relationships live in one file or beside their subjects.
- Provenance granularity beyond one attributed source line per block; the full model in audit doc §7 remains the candidate.
- Whether a semantic retrieval tier is needed at all, until the lexical and compositional tiers have been measured on real queries.
- Any parsing service, its vendor, and whether it runs at request time or offline only.
- Workspace and favorites sync, their tables, and the notes id scheme.
- Workspace URLs and snapshot links; SEO surfaces for concepts and frameworks.
- Headword convention (nominative vs stem), the 50 duplicate merges, and the 107 malformed visargas. None blocks the slice.
- Every licensing conclusion in audit doc §6, which is provisional until the exact artifacts to be redistributed are verified.

---

## 13. Where the simplified product model conflicts with the proposed architecture

| Conflict | Resolution |
|---|---|
| **Typed object ids as user-facing references** (revision 2 had workspaces, notes, and URLs hold `term:` / `concept:` / `lex:` refs) vs. cards that hide the ontology | User data holds **permanent card keys** (§3.2, §3.6) minted once from the word; object ids stay internal; redirects only for editorial merges. A word that gains a curated term later keeps its card identity. |
| **"New panel kinds" per object type** vs. one card | One card chrome and one resolver; kind affects only which sections have content and one quiet header word. Framework, question, phrase, and passage cards are the same component with different section content. |
| **Forms with identity** (kept for expression analysis) vs. "an encountered form opens the lemma's card" | Both hold: forms are addressable data for analyses and the encountered strip, but never a card. |
| **Search results grouped by object type** vs. results as cards | Group by what matched, resolve every hit to a card key, collapse form/term/concept hits into one result. |
| **Exploration trail and `from` pointers** vs. no history surface | The `from` field remains on workspace cards as data (it costs nothing and positions new cards); no trail UI, no history table. |
| **"A workspace may reveal useful connections between its cards"** (revision 2) vs. adjacency asserts nothing | Not in scope. Kept only as a future possibility (§8.6): revealing relationships Sutra already knows, never creating them. Connections live on cards. |
| **Global `panelStates` keyed by entry id** vs. per-workspace card state | State moves into `WorkspaceCard`; migration folds the existing map into workspace[0]. |
| **Reference cards need the network** vs. offline PWA | Accepted for the reference layer; curated cards stay offline. The card shows an explicit offline state for reference sections. A pruned client subset for forms of curated stems keeps the common case offline. |
| **Declension tables require gender** vs. MW `lex` being incomplete and inconsistently normalized | The reference schema carries `gender[]` and `pos` with a source; tables render only when gender is recorded; `mfn` yields three tables; unknown gender says so. |
| **Separate mobile and desktop trees** (owner's decision) vs. "the same conceptual model on mobile" | Kept: separate layout components, one shared resolver, one workspace store, one search module. The bar is that mobile renders every card section, including the declension table and script toggle. |
| **Revision 2 slice built around Devanāgarī compound search and threads** vs. the corrected core flow | Re-centered on the inflected-form and Vedānta flows (§11); compound segmentation and the English tiers move to "should". |
| **Homepage, daily, history, About in the roadmap** (audit doc §11, §12) | Removed from the current architecture and roadmap. the audit document's phases 2 and 4 are superseded by §11 and §12 here. |

---

## 14. What from the first plan still stands

From the audit (audit doc §1), independent of architecture:

- Devanāgarī search does not exist despite three places claiming it; the normalizer is an untested regex chain; multi-word Sanskrit queries cannot match headwords.
- The whole product is keyed by one id space; there is no URL state; `/t/[id]` launders its id through localStorage.
- Related terms merge curated, prose-scanned, and co-occurrence links into one unlabeled list; 318 of 800 curated edges are one-directional; relations are strings, not ids.
- There is no provenance in the data; 5,409 citations are orphaned; the Brahma-Sūtra-Bhāṣya corpus in the repo is a copyrighted translation.
- Headwords are mostly nominative-singular forms with 50 stem/form duplicates and 107 malformed visargas; only 67 entries carry any Vedānta layer.
- Notes sync silently drops remote edits and re-uploads everything on mount; tombstones are not per-user. This must be fixed before any other per-user data syncs.
- The MW pipeline cannot be regenerated; `lex` is inconsistently normalized.
- Desktop and mobile duplicate state as well as markup; any new feature is built twice unless the state layer is shared.
- Content authoring, not code, is the bottleneck for the curated layer.

From the infrastructure research (audit doc §6), provisional on license verification:

- Import data at build; never put an academic server in the request path. The INRIA Heritage CGI is now unreachable to programs.
- DCS (CC BY 4.0) is the most valuable low-risk dataset; vidyut-prakriya (MIT) generates paradigms offline and in WASM; MW and its derivatives are non-commercial.
- Two MIT libraries cover transliteration and normalization keys; no npm package does Sanskrit morphology.
- Runtime NLP is not needed for anything in the slice; a segmentation model is needed only for arbitrary pasted text, and the Expression contract keeps that addable.

---

## 15. Implementation-readiness review

**Settled.** The user-facing model (Search → Cards → Workspaces → Favorites) and its separation from the internal knowledge objects; the two knowledge layers, with the reference layer obligated to Vedānta reading; unified search across both layers with no constructed Sanskrit; the card resolver as the single composition point for both UIs; permanent word-slug card keys (§3.6); the workspace store and its migration from today's localStorage; grammar with provenance and visible uncertainty rather than coverage; the three acceptance encounters plus the workspace tests; content in version-controlled files with generated indexes; no runtime NLP and no external API in the request path.

**Genuinely risky.**
1. Licensing of the exact artifacts to be redistributed (MW, `ae`/`bor`/`mwe`, MWinflect, vidyut data files) is contested between repository licenses and per-dictionary headers and is unresolved until verified.
2. The lossless key encoding is a one-way door; it is the only decision in the slice that cannot be undone.
3. Form recognition for consonant stems and irregulars depends on MWinflect coverage plus generated paradigms for curated stems; `ātmanaḥ` must be verified in the first days, not assumed.
4. English retrieval over Victorian dictionary glosses may feel thin for modern Vedānta English ("awareness", "non-dual"); expansion helps, but the real fix is curated concept text, which is editorial time.
5. The card resolver is the largest refactor of existing code (`EntryBody`, `WordPanel`, both Home files) and must not regress the keyboard contract or panel states.
6. Reference cards need the network; offline they show a clear "offline" state and nothing more.

**Assumptions the slice tests.** That form → lemma card with an encountered strip is the right shape for linguistic encounters; that one card body scales from a plain dictionary word to `ātman` without redesign; that BM25+ over glosses with expansion makes English discovery feel real without a semantic tier; that per-workspace card state and a tab row feel right on desktop and translate to mobile; that Postgres is an acceptable home for the reference layer and forms; that a "generated, not yet reviewed" mark on paradigms is acceptable to a careful reader.

**First milestone: "ātmanaḥ opens the ātman card."** Transliteration and keys with golden vectors; the lossless key encoding chosen and tested; MW imported into Supabase (`lexemes` with normalized gender and part of speech); MWinflect imported (`forms`) so that encountered forms resolve reliably to a lemma card with all known readings shown honestly; the card resolver and card body with header, encountered strip, meaning (curated over reference), and a grammar section listing the readings with its quiet provenance line; search results resolved to card keys; the workspace store with migration and the desktop tab row. Paradigm generation for a seed set of curated stems starts in parallel and the declension table with its script toggle lands immediately after, inside the slice, but it is not a gate for this milestone. Done when pass criteria 1 through 3 (table clause excepted) and 8 through 9 hold on desktop and the existing `verify` flows still pass. Milestone two: declension table, micro-corpus, framework and question cards, the English lexical tier, mobile (criteria 2 in full, 4, 6, 7, 10). Milestone three: §11.2.

## Next steps on approval

1. Check this document into the repo as `docs/sutra-2.0-architecture.md` (with the audit document as `docs/sutra-2.0-audit.md`) so it can be refined in review. No code changes.
2. Before the slice starts, verify the licenses of the exact artifacts to be redistributed: CDSL `mw`, `ae`, `bor`, `mwe` (repository LICENSE vs per-dictionary headers), MWinflect, Open English WordNet 2025, vidyut-prakriya's data files, and the two MIT libraries.
3. Confirm three decisions the slice depends on: the reference layer and forms index start in Supabase Postgres; workspaces stay localStorage-only; the micro-corpus lives in a `content/` folder beside, not instead of, `glossary.ts`.
4. Build the slice in the order of §11.1, then §11.2 as time allows, measuring §11.4 with the existing `verify` runbook extended for Devanāgarī and inflected-form queries, the card sections, the declension toggle, and workspace switching on desktop and mobile.
