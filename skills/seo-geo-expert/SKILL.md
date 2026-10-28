---
name: seo-geo-expert
description: "SEO and GEO specialist for the adriglez portfolio — targets events, wedding makeup, FX/character makeup, and Asturias/Pola de Siero geolocation"
version: 0.1.0
author: Hermes Agent (with Adriana González)
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [seo, geo, local-seo, content, argentina]
    related_skills: [orchestrator, engineer-senior-frontend, content-strategist/local-seo]
---

# SEO + GEO Expert

## What this does
Owns how the adriglez portfolio is discoverable. Ensures every page and piece of
content is written and marked up to rank for the services and geographies the
client cares about: **events, wedding/bridal makeup, professional makeup,
character/FX makeup**, and **geolocalised Asturias** (Pola de Siero, Siero
municipality, Asturias, northern Spain).

## When to use
- Before any new page or section is built.
- When reviewing copy, meta descriptions, or image alt text.
- When proposing new content (blog posts, service pages, local pages).
- When auditing the sitemap or `robots.txt`.

## Prerequisites
- The site uses Nuxt + `@nuxtjs/seo` + `useHead()`.
- Site `defaultLocale: 'es'`, `lang="es"` on pages.
- `nuxt.config.ts` sitemap: `/`, `/maquillaje-fx`, `/makeup`.
- Current URL target: `https://adriglez.com`.

## Procedure — on a new feature or page
1. **Audit existing meta** — read `useHead()` in every page. Verify each has:
   - a unique `title` (50–60 chars ideal)
   - a meta `description` (120–160 chars) containing the primary keyword
   - a `lang="es"` page with `<html lang="es">`
2. **Keyword map** — assign target keywords per page:
   | Page | Primary keyword | Secondary / GEO |
   |---|---|---|
   | `/` | maquillaje de caracterización FX | Pola de Siero, Asturias |
   | `/makeup` | maquillaje profesional novias | boda, Asturias, Siero |
   | `/maquillaje-fx` | maquillaje FX, maquillaje de personajes, efectos especiales | Asturias |
3. **On-page markup** — check `useHead()` includes `og:title`, `og:description`,
   `twitter:card`, `canonical`, and `article:modified_time` where relevant.
4. **Content** — review copy for semantic keyword usage (not stuffing). The
   flow should read naturally in Spanish.
5. **Media** — verify every `<img alt="...">` is descriptive and relevant; the
   SEO skill will send a review of the copy the engineer writes.
6. **Log** — write a one-line summary to `WORKLOG.md`.

## GEO target checklist
The site must attempt coverage of these GEO signals (partial coverage is fine,
but every new page should tick at least one):

- **Events** — weddings, bridal events, single-event makeup. Mention "eventos",
  "bodas", "novias", "invitadas" in copy + alt text.
- **Professional makeup** — "maquillaje profesional", "maquillaje de alta gama".
- **Character/FX makeup** — "maquillaje de personajes", "FX", "efectos especiales",
  "maquillaje para actores".
- **Geolocalised Asturias** — "Pola de Siero", "Siero", "Asturias", "Asturias
  norte", "municipio de Siero", "Golfo de Trabo".

## Style rules
- Copy is in **Spanish** (site `defaultLocale: 'es'`).
- No English filler; no Latin placeholder text.
- Keywords appear naturally in: H1, first paragraph, alt text, meta description,
  and (optionally) a short "ubicación" note on contact pages.

## Pitfalls
- Do **not** add English unless a translation strategy is agreed with the user.
- Do not over-optimize — content must read like a real practitioner wrote it.
- The sitemap is hand-maintained in `nuxt.config.ts` — every new route must be
  added there, or the sitemap will not include the page.
- `robots.txt` currently allows all crawling; do not accidentally disallow pages.

## Verification
- `sitemap.xml` contains the new route (on Vercel preview).
- Each page has a unique, descriptive `<title>` and meta description.
- Running these on the preview URL: `curl -s https://<preview>/robots.txt` →
  no Disallow; `curl -s https://<preview>/sitemap.xml` → route present.
- Human review: the site reads well in Spanish and the services/geography are
  discoverable without search.
