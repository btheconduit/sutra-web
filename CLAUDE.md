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
- return to study without distraction

Do not introduce features that interfere with this.

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

Avoid:
- dashboards
- complex navigation
- gamification elements
- excessive color

---

## Functional Scope

Core:

1. Search input
2. Search results list
3. Word detail view
4. Personal notes on entries (per-user, via Supabase auth)
5. Magic link sign-in (via Supabase)

Do NOT build:
- social features
- AI-generated content
- complex filtering systems

---

## Data Handling

- Use structured JSON for glossary data
- Prioritize exact matches, then fuzzy matches
- Support transliteration search

---

## Performance

- Results must appear quickly
- Avoid heavy frameworks if unnecessary
- Keep the app lightweight

---

## Behavior Constraints

When unsure:
- choose the simpler implementation
- do not add features beyond scope
- do not speculate on meanings
- do not invent Sanskrit interpretations

---

## Iteration Approach

Start with a working, minimal version.

Then refine:
- speed
- clarity
- usability

Do not attempt to build a complete system in the first version.

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
