# Sutra — Claude Instructions

## Role

You are building a minimal, high-clarity web application called Sutra.

This is not a general-purpose app. It is a focused tool for Vedanta students.

All decisions must prioritize clarity, simplicity, and correctness.

---

## Core Product Understanding

Sutra is a Sanskrit lookup tool for Vedanta study.

It helps users quickly:
- search Sanskrit terms
- discover relations between terms
- understand their meaning in context
- share terms with others
- return to study without distraction

Do not introduce features that interfere with this.

---

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Supabase (auth + notes storage)
- Tailwind CSS 4
- TypeScript

---

## Architecture

- **Static glossary data** — 650+ entries embedded in `glossary.ts`, loaded client-side. No database for term data.
- **Separate mobile/desktop UIs** — `MobileHome` and `DesktopHome` components, chosen by viewport. Do not try to make one layout scale to both.
- **Supabase** is used only for email OTP auth and user notes (one table, RLS). No other backend.
- **No API routes** — everything is client-side except `/t/[id]` which is a server component for OG metadata.
- **Shareable URLs** at `/t/[id]` — server component generates OG meta tags, then redirects to the main app with the term pre-opened.
- **State** is managed via React state + localStorage, passed through props. No state management library.

---

## Design Principles

- Simplicity over features
- Clarity over completeness
- Silence over stimulation
- Correctness over speed

---

## UI Guidelines

- Minimal layout
- Generous spacing
- No clutter
- Smooth clear use of animations
- Typography should be calm and readable
- Keyboard accessible — all core actions reachable without a mouse

Avoid:
- dashboards
- complex navigation
- gamification elements
- excessive color

---

## Functional Scope

Core:

1. Search input with transliteration support
2. Search results list
3. Word detail panels (multiple open, draggable, collapsible)
4. Personal notes on entries (per-user, via Supabase auth)
5. Email OTP sign-in (via Supabase)
6. Shareable word URLs with OG metadata (`/t/[id]`)
7. Copy word content to clipboard
8. Keyboard navigation between panels

Do NOT build:
- comments, reactions, or social feeds
- user profiles or public accounts
- AI-generated content
- complex filtering systems
- analytics dashboards

---

## Keyboard Shortcuts

Desktop keyboard shortcuts that must be preserved:

- `f` — focus search input (when not in an input)
- `Cmd/Ctrl+B` — toggle sidebar collapsed/expanded
- `Escape` — blur search input, collapse sidebar, or clear panel focus (context-dependent; does not propagate when pressed in a notes textarea)
- `i` — toggle info panel
- `o` — toggle dark/light mode
- `Arrow Left/Right` — navigate focus between open word panels
- `Enter` (on focused panel) — open note input
- `Space` (on focused panel) — cycle panel state: default → expanded → collapsed → default
- `Delete/Backspace` (on focused panel) — close the panel

Clicking a panel also focuses it. Clicking empty space clears focus.

---

## Data Handling

- Use structured JSON for glossary data
- Prioritize exact matches, then fuzzy matches
- Support transliteration search
- Monier-Williams enrichment data loaded from JSON

---

## Performance

- Results must appear quickly
- Avoid heavy frameworks if unnecessary
- Keep the app lightweight

---

## Behavior Constraints

When unsure:
- choose the simpler implementation
- do not speculate on meanings
- do not invent Sanskrit interpretations

---

## Iteration Approach

Refine incrementally:
- speed
- clarity
- usability
- accessibility

---

## Tone of the Product

The app should feel:
- quiet
- precise
- trustworthy

It should not feel:
- playful
- busy
- distracting
- overly "tech"

---

## Final Guideline

This tool supports a living tradition.

Do not design it as a product for engagement.

Design it as a support for understanding.
