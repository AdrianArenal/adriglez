---
name: qa-performance-engineer
description: 'QA engineer skill for the adriglez portfolio — tests performance, Core Web Vitals, and quality on the Vercel preview URL'
version: 0.1.0
author: Hermes Agent (with Adriana González)
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [qa, performance, lighthouse, cwv]
    related_skills: [orchestrator, engineer-senior-frontend]
---

# QA & Performance Engineer

## What this does

Verifies that every feature developed on the adriglez portfolio meets quality
standards, with a focus on **Core Web Vitals** and render performance on the
Vercel preview URL.

## When to use

- After a feature branch is merged and a Vercel preview is available.
- When a performance regression is suspected.
- Before the parent agent declares a feature "done".

## Prerequisites

- A Vercel preview URL for the feature branch (e.g.
  `https://adriglez-branch-feature-name.vercel.app/`).
- `npm run build` locally passes.
- Lighthouse CLI (installed via `npm i -g @lhci/cli` if not present).

## How to run

1. Open the preview URL in a headless browser (or `hermes` + `vision_analyze`).
2. Run Lighthouse CLI:
   ```bash
   # With a preview URL (headless Chrome recommended)
   lhci autorun --url=https://<preview>.vercel.app --collect.staticDistDir=/tmp
   ```
   Or use the web version:
   [https://pagespeed.web.dev/](https://pagespeed.web.dev/) (enter the preview URL).
3. Record CP, CLS, INP, and overall score.

## Pass criteria

| Metric            | Target                                                        |
| ----------------- | ------------------------------------------------------------- |
| LCP               | < 2.5 s                                                       |
| CLS               | < 0.1                                                         |
| INP               | < 200 ms (or < 500 ms as a floor for this content-heavy site) |
| FCP               | < 1.8 s                                                       |
| Total bundle size | No regression vs. main branch                                 |

## Procedure

1. **Baseline** — record current scores from the Vercel preview of `main`.
2. **Feature test** — run the same checks against the feature branch preview.
3. **Diff** — compare LCP/CLS/INP. A regression >20% on any metric fails.
4. **Diagnostics** — if a metric fails:
   - LCP: image sizes, lazy-loading placement, webp format, font fetch blocking.
   - CLS: missing `width`/`height` on images, late-injected styles, dynamic
     content reflow.
   - INP: heavy JS, large Nuxt bundle, third-party scripts.
5. **Fix** — the engineer fixes the root cause; the QA re-tests.
6. **Log** — write a one-line summary to `WORKLOG.md`.

## Style rules

- Record raw numbers, not just pass/fail, in `WORKLOG.md`.
- Report the preview URL used.
- If a metric is hard to improve without a redesign, flag it to the orchestrator
  and the user — do not silently accept the regression.

## Pitfalls

- `npm run dev` scores are meaningless — **always test on the Vercel preview**.
- The `makeup.vue` page is intentionally dense (grid, fixed background, shadows).
  If CLS is high there, it is a known pattern — report it as a caveat, not a
  blocker.
- Images are served by `@nuxt/image` (webp/avif) — verify the preview actually
  serves the correct format.
- Third-party content (embeds, external links) must not break CWV.

## Verification

- `lhci` or Pagespeed report stored with the pass criteria.
- Parent agent confirms all metrics meet targets before marking the feature done.
