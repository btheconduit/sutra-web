---
name: verify
description: Build, launch, and drive the Sutra web app to verify changes end-to-end with Playwright.
---

# Verifying Sutra

App lives in `sutra-web/` (repo root is docs + data scripts).

## Build & launch

```bash
cd sutra-web
npm run build                 # Next.js 16, ~30s incl. 2,364 SSG pages
npm run start -- -p 4123 &    # production server; wait for 200 on :4123
```

Dev server (`npm run dev`) also works but SSG/share-route behavior is only faithful in prod.

## Drive (Playwright)

Playwright 1.61+ with cached Chromium is available via a scratch dir:
`mkdir /tmp/x && cd /tmp/x && npm init -y && npm i playwright` then a `.mjs` script with `chromium.launch()`.

Gotchas learned the hard way:
- On the empty desktop home the search input is **auto-focused** — pressing `f` types an "f" into the query. Use `page.click("input[type=text]")` + `fill` instead of relying on the shortcut.
- "Click empty space to clear panel focus" must avoid panel footers: the note composer sits at the bottom of each panel and a stray click opens it, after which `i`/`o`/Space are (correctly) swallowed by the input. Click in the top strip of the panel container, or `page.keyboard.press("Escape")` first.
- Panel widths verify the Space state cycle exactly: default 320px → expanded 512px → collapsed 64px (`[draggable]` elements).
- Sidebar width: expanded 288px, collapsed 48px (the `--sidebar-w` container).
- MW lazy-load check: record `page.on("request")`, open a panel (no new chunk should load), click "Extended meanings" → exactly one large chunk (~830KB, the mw-enrichment JSON module) fetches.
- Mobile: new context with `viewport 390x844, isMobile, hasTouch` renders MobileHome.
- Signed-out note composer shows a sign-in prompt; full notes sync needs real Supabase email OTP — not verifiable headless.
- `_vercel/insights` 404 console errors are expected locally; filter them out.

## Worth driving after changes

Search (type → results → ArrowDown/Enter opens panel), related-term links open second panel, `i` info / `o` theme / `Escape` (blur → collapse sidebar) / `Cmd+B` / panel `Enter`/`Space`/`Delete`, `/t/<id>` share route redirects home and opens the panel, mobile search + detail view.
