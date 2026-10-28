---
name: designer-senior
description: "Senior designer skill for the adriglez portfolio — owns design consistency, UX, and visual quality"
version: 0.1.0
author: Hermes Agent (with Adriana González)
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [design, ux, ui, visual-system]
    related_skills: [orchestrator, engineer-senior-frontend, seo-geo-expert, qa-performance-engineer]
---

# Senior Designer — UX/UI Consistency

## What this does
Owns the visual language and UX of the adriglez portfolio. It does **not** own
the code (engineer's domain) or the conversion copy (SEO's domain), but it is
responsible for: design consistency, component structure, layout quality,
typography, colour, and the overall "feel" of the site.

## When to use
- Reviewing a proposed layout or component structure before engineering.
- Refactoring the visual design of a section.
- Checking that a new page stays visually consistent with the existing site.
- Reviewing whether a proposed component is good UX.

## Prerequisites
- The repo's design system is:
  - **Colour:** black + white + grey; dark mode is default
  - **Fonts:** Playfair Display (serif, headings) + Poppins (sans, body)
  - **Components:** Nuxt UI (VAU) + Tailwind utility classes
  - **Brand:** black circular "NEW" badges on the makeup page; black logo treatment
- Visual references are live at https://adriglez.vercel.app/

## How to run
No external tools. Review via the browser at the preview URL, and via the
engineers' files in `app/` and `public/`.

## Procedure — reviewing a design
1. **Compare** the proposed layout against the existing pages (index, makeup,
   maquillaje-fx) for consistency of:
   - grid systems and spacing
   - heading scales and font weights
   - button / link treatments
   - card and gallery layouts
   - colour accents and white space
2. **UX check** — is the user journey clear? (e.g. on index: hero → browse →
   contact). Are call-to-actions obvious and sufficiently spaced?
3. **Accessibility of markup** — is the HTML semantic? (check with QA's help; the
   designer flags where headings, landmarks, or contrast need attention).
4. **Suggested changes** — present a diff of proposed class names / component
   structure to the engineer in a concise format (before/after snippets).

## Style rules
- Consistency over novelty: match the existing visual rhythm.
- Don't fight the component library: ask the engineer before hand-rolling a
  component that already exists in Nuxt UI.
- Prefer CSS utilities (Tailwind) over new global CSS.
- The site is `lang="es"` — use Spanish text for any design-time mock content,
  not filler Latin.

## Pitfalls
- The `makeup.vue` page has unusual dark-light switching behaviour on mount
  (`colorMode.preference = 'light'`). Don't copy this pattern everywhere.
- `app/assets/css/main.css` is shared — check it before adding page-local
  styles that could bleed.
- The black "NEW" badge pattern on `makeup.vue` is a local pattern — don't spread
  it unless a global "new / exclusive" pattern is intentional.

## Verification
- Open the feature page on the preview URL; visually consistent with the rest of
  the site.
- No layout jumps, no broken grids, no orphaned whitespace.
- Heading hierarchy is logical (one H1 per page, H2s under it, etc.).
