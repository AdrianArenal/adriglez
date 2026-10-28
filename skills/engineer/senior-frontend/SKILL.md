---
name: engineer-senior-frontend
description: "Senior frontend engineer skill for the adriglez Nuxt portfolio — owns code, components, pages, and build"
version: 0.1.0
author: Hermes Agent (with Adriana González)
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [engineering, frontend, nuxt, vue, TypeScript]
    related_skills: [orchestrator, designer-senior, seo-geo-expert, qa-performance-engineer]
---

# Senior Frontend Engineer — Nuxt

## What this does
Owns the production code of the adriglez portfolio: pages, components, Nuxt
config, TypeScript types, and the build. It does **not** own design decisions
(designer's domain) or copy/SEO (SEO's domain), but it is responsible for
integrating those inputs into working code.

## When to use
- Adding a new page, route, or component to the Nuxt app.
- Changing the Nuxt config, modules, or build pipeline.
- Refactoring existing code while a feature is in progress.
- Reviewing whether a proposed change is implementable within the current stack.

## Prerequisites
- Node 20+ (see `.nvmrc` — currently Node 20)
- `npm ci` to install dependencies
- The repo is a Nuxt 4 project: `nuxt`, `@nuxt/ui`, `@nuxt/image`, `@vueuse/motion`,
  `@nuxtjs/seo`, `nuxt-ai-ready`, `better-sqlite3`, TypeScript (strict).

## How to run
```bash
cd /path/to/adriglez
npm run dev          # dev server
npm run build        # type-check + build
npm run lint         # ESLint
npm run format       # Prettier
```

## Procedure — adding a new feature/page
1. **Scope** — understand the feature and which pages/components it touches.
2. **Route** — add the route in `app/pages/` (or a nested folder if hierarchical).
3. **Component** — create the component in `app/components/` if the template is
   large (>60 lines) or reused.
4. **Meta** — wire `useHead()` (title + meta description) per the SEO skill.
5. **Images** — use `NuxtPicture`, always with `alt`, `format="webp"`, and `sizes`.
6. **Test** — run `npm run build` (type check), `npm run lint`, then `npm run dev`
   and eyeball the page.
7. **Log** — write a one-line summary to `WORKLOG.md` at the repo root.

## Style rules
- **TypeScript strict** — no `any` without a `// eslint-disable` comment and a
  reason.
- **Nuxt UI first** — prefer `UButton`, `UContainer`, `UModal`, `UPage`, `UAlert`,
  `UIcon`, etc. Hand-roll only when the component doesn't exist or doesn't fit.
- **Components small** — a component should be <150 lines of template ideally;
  extract when bigger.
- **Templates** — Vue 3 `<script setup lang="ts">`; single-file components.
- **Route params** — use `useRoute()`; prefer `<NuxtLink>` over `<a href>` for
  internal navigation.

## Pitfalls
- `nuxt-ai-ready` is present in `package.json` but **unused in the current pages**.
  Do not assume it is wired in; check `nuxt.config.ts` before using it.
- `@nuxtjs/seo` exposes `useHead` — do not mix with the `<head>` template tag.
- `better-sqlite3` is a native module — do not add `npm run build` on a system
  without the Node headers; it may fail to compile.
- `app/assets/css/main.css` holds global styles; check it before adding page
  local CSS.
- `NuxtPicture` from `@nuxt/image` automatically serves webp/avif — do not
  manually precompress images for production.

## Verification
- `npm run build` exits 0 (type-check + build).
- `npm run lint` exits 0.
- The page renders in `npm run preview` without console errors.
