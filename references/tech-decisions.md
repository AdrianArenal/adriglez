# Reference: Tech decisions

## Why Nuxt 4
- File-system routing (`app/pages/`) maps directly to URLs — fast iteration.
- `nuxt generate` produces a static site deployable anywhere (Vercel included).
- `@nuxt/ui` + `@nuxt/image` are first-class Nuxt modules.

## Why Nuxt UI (VAU)
- Consistent component library across the site.
- Already in use on every page — keeps new pages in the same design system.

## Why @nuxt/image
- Automatic webp/avif; responsive `srcset` generation; lazy-loading.
- Cuts Lighthouse image-related CLS and LCP issues.

## Why TypeScript strict
- Portfolio is small; strict mode catches regressions early.
- `typeCheck: false` in `nuxt.config.ts` — type-checking is done by `tsc` via
  `npm run build` only when needed.

## Why @vueuse/motion
- Declarative page transitions; used on every page for entrance animations.

## Why @nuxtjs/seo + sitemap
- No extra server; `useHead()` per page is the source of truth for meta.
- Sitemap is hand-maintained in `nuxt.config.ts` (three routes).

## Why nuxt-ai-ready exists but is unused
- Added as an experiment in an earlier iteration. Leave unused unless the user
  asks for AI-ready features.

## Why better-sqlite3
- Possible future local data store (e.g. bookings or subscriptions).
- Native module; keep it out of CI builds unless the Node headers are available.

## Why dark mode is default
- The brand is black + white; dark mode is the "gallery wall" experience.
- The site toggles to light only on `/makeup`.
