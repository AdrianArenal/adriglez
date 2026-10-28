---
name: a11y-expert
description: "Accessibility (a11y) expert for the adriglez portfolio — WCAG 2.2 compliance, semantic HTML, contrast, keyboard navigation, and screen-reader friendliness"
version: 0.1.0
author: Hermes Agent (with Adriana González)
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [a11y, accessibility, wcag, semantic-html, va11y]
    related_skills: [orchestrator, engineer-senior-frontend, designer-senior]
---

# Accessibility (a11y) Expert

## What this does
Verifies that every feature developed on the adriglez portfolio meets
**WCAG 2.2 AA** standards: semantic HTML, keyboard access, colour contrast,
screen-reader friendliness, and correct focus management. Reports findings as
actionable diffs the engineer can implement.

## When to use
- After a feature branch is merged (for a full-page audit).
- When the user asks for "accessibility check" or "WCAG compliance".
- When adding a new component, page, or refactoring existing markup.

## Prerequisites
- A working local build: `npm run dev`
- The repo's a11y baseline: dark mode default, Nuxt UI, `lang="es"` on every page.
- A headless browser (or `hermes` + `vision_analyze`) for visual checks.

## Procedure — full page audit
1. **Load the page** at the Vercel preview URL (or `npm run preview`).
2. **Semantic structure** — check the DOM:
   - one `<h1>` per page, matching the `<title>`
   - logical heading order (H1 → H2 → H3…), no skipped levels
   - landmarks: `<header>`, `<nav>`, `<main>`, `<footer>` where applicable
   - `<ul>`/`<ol>` for lists, not `<div>` with `<span>` bullets
3. **Keyboard access** — tab through the page; every interactive element is
   focusable and reachable in a sensible order; visible focus indicator present.
4. **Colour contrast** — text on background 4.5:1 (3:1 for large text); check
   the black/white/grey palette against the Nuxt UI theme.
5. **Images & media** — every `<img alt="...">` has meaningful alt; decorative
   images use `alt=""`; no images carrying text as the only content.
6. **Focus management** — modals trap focus; focus returns to the trigger after
   closing; no focus loss after navigation.
7. **Screen-reader test** — run a quick `aria-*` audit:
   - `aria-label` on icon-only buttons
   - `aria-hidden="true"` on purely decorative elements
   - no duplicate `id` attributes
8. **Formats** — the site uses `NuxtPicture` (webp/avif) — verify the loaded
   images are not 0×0 or unsized (which causes layout shift / no-capture issues).

## Report format
```
## a11y audit — <page/preview URL>
| Check | Status | Detail |
|---|---|---|
| Heading hierarchy | ✅ / ❌ | "maquillaje-fx" page has 2 H1s |
| Keyboard | ✅ / ❌ | "Tab" lands on X |
| Contrast | ✅ / ❌ | Body text 4.6:1, captions 3.2:1 |
| Alt text | ✅ / ❌ | 3 images missing alt |
```

## Remediation handshake
- If the a11y expert finds issues, it writes a `WORKLOG.md` entry with the fix
  diff and returns to the engineer. The a11y expert does **not** edit the DOM
  itself; it reports and the engineer fixes.
- Re-audit after the fix.

## Style rules
- English in audit reports (technical, not user-facing).
- Never use "lore ipsum" or filler content in a11y tests.
- Report partial pass is still a pass (e.g. "1 of 3 images needs alt").

## Pitfalls
- The `makeup.vue` page's dark/white toggle on mount is a known pattern; the
  contrast check must run in both colour modes.
- `nuxt-ai-ready` is present but unused — if a11y errors pop up in a rendered
  chunk, rule it out before blaming the markup.
- `better-sqlite3` native module can cause build failures unrelated to a11y —
  check `npm run build` exit code first.

## Verification
- `npm run build` exits 0.
- Full-page audit on the Vercel preview URL: no ❌ on critical checks.
- Keyboard-only navigation covers the whole page without getting stuck.
