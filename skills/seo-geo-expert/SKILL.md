---
name: seo-geo-expert
description: 'SEO and GEO specialist for the adriglez portfolio — targets events, wedding makeup, FX/character makeup, and Asturias/Pola de Siero geolocation'
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
   | Page             | Primary keyword                                             | Secondary / GEO         |
   | ---------------- | ----------------------------------------------------------- | ----------------------- |
   | `/`              | maquillaje de caracterización FX                            | Pola de Siero, Asturias |
   | `/makeup`        | maquillaje profesional novias                               | boda, Asturias, Siero   |
   | `/maquillaje-fx` | maquillaje FX, maquillaje de personajes, efectos especiales | Asturias                |
3. **On-page markup** — check `useHead()` includes `og:title`, `og:description`,
   `twitter:card`, `canonical`, and `article:modified_time` where relevant.
4. **Content** — review copy for semantic keyword usage (not stuffing). The
   flow should read naturally in Spanish.
5. **Media** — verify every `<img alt="...">` is descriptive and relevant.
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

## Structured data verification (critical lesson from PR #120)

**Claim ≠ implementation.** During review of PR #120, the commit messages and
PR description claimed JSON-LD structured data, GEO optimization, and AI-ready
content, but the diff did NOT implement any of them. Always verify claims
against the actual diff, not the commit message. Technique:
1. `git fetch origin pull/<PR>/head`
2. `git diff main..FETCH_HEAD --stat` — does the diff actually touch the files
   mentioned in the description?
3. Read the actual file contents at `git show FETCH_HEAD:<file>` — do the claims
   (JSON-LD, schema.org, Structured Data, useHead, etc.) appear in the code?

**Structured data must use `nuxt-schema-org`, not `@nuxtjs/seo` alone.**
- `@nuxtjs/seo` (package: `@nuxtjs/seo`) is a **meta-tags** module only: it
  provides `useHead()` helpers for `og:*`, `twitter:*`, `robots`, `description`,
  etc. It does **not** emit JSON-LD/Schema.org.
- `nuxt-schema-org` is a **separate module** (`nuxt-schema-org`) that must be
  **installed and configured** (add to `modules:` array in `nuxt.config.ts`).
- The correct API is the `useSchemaOrg()` composable (imported from `#imports`):
  ```ts
  import { useSchemaOrg } from '#imports'
  useSchemaOrg([
    {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'Person'],
      ...  // See references/schema-org-nodes.md for the full node list
    }
  ])
  ```
- `nuxt-schema-org` was **not installed** in the PR #120 dependencies — confirming
  the structured data was not actually implemented. If the PR says "JSON-LD",
  "Structured Data", "Organization/Person/Service schemas", or "LocalBusiness"
  but `nuxt-schema-org` is not in `package.json` and configured, the claim is
  unfulfilled.
- `useSchemaOrg()` must be called at the **top of the `<script setup>` block**,
  before `definePageMeta()` or any other code (ESLint enforces `import/first`).

**Page-level `useHead()` overrides.** `og:url` set at site level in `nuxt.config.ts`
applies to all pages — `/makeup` and `/maquillaje-fx` inherit the home page's OG.
Add page-specific `useHead()` overrides in each page file for `og:title`,
`og:description`, `og:url`, `og:image` per page.

## Security (critical lessons from PR #120)

- **Never put email in `csrf` meta.** `<meta name="csrf" content="adrianagonzfdez@gmail.com">`
  exposes the owner's email under a CSRF name — a security anti-pattern. Remove or
  change this metadata.
- **robots module conflict.** When `@nuxtjs/robots` is installed, configure `robots`
  through the module, not manually in `app.head`. Manual `robots` + `googlebot`
  meta tags "fight over the tag" (nuxt-seo-utils warning).
- **`og:image:alt` is not a standard OG property.** The standard Twitter-only
  property is `twitter:image:alt`. Remove `og:image:alt`.

## Build/CI verification (critical lessons from PR #120)

**Multiple overlapping `npm run build` processes cause lock conflicts.** During
review of PR #120, multiple subagents ran `npm run build` concurrently and hit:
- "Another Nuxt build is already running" (PID + lock)
- `npm run generate` hanging silently with no output
- Server (`node .output/server/index.mjs`) returning 500 on startup

**Always run these before any build or preview:**
```bash
# Kill all nuxt/node build processes (macOS/Linux)
pkill -9 -f "nuxt" 2>/dev/null
pkill -9 -f "node .*index.mjs" 2>/dev/null
sleep 3
# Verify no nuxt processes remain
ps aux | grep -i "[n]uxt"
```

**Do not chain `npm run build` with `&&` in the same command** — if one step fails
or lingers, subsequent steps inherit the lock. Run builds as separate commands
and check exit codes explicitly.

**Vercel preview 500 on startup** is a known issue on this repo:
- `npm run build` may exit 0 while the built server returns 500 on `node .output/server/index.mjs`.
- After deploying to Vercel, if the preview returns 500, investigate the Nitro server
  startup, not the build config. Check `.output/server/logs` for the actual error.
- The QA subagent must catch this and flag it — a "Ready" Vercel deployment that
  returns 500 is not deployable.

**Vue SFC compiler errors** — template syntax errors cause build failures on line
`Tokenizer.parse` at `onclosetag`: the parser expects a closing tag it cannot find.
Common causes (the PR #120 build failure was `onclosetag` with `NuxtPicture` and
`UIcon` tags):
- Unclosed HTML tags (missing `</div>`, `</p>`, etc.)
- `useHead()` with `domProps` not supported by the compiler (`_html`, etc.)
- Self-closing tags with wrong syntax (`<img/>` vs `<img>`, `<br/>` vs `<br>`)
- Self-closing components without `/>` (e.g. `<UIcon ...>` instead of `<UIcon ... />`)

**ESLint import/first rule.** `useSchemaOrg()` imports must be at the **top** of the
`<script setup>` block, before `definePageMeta()` or any other code (ESLint `import/first`).
If lint fails with `Import in body of module; reorder to top`, move the import up.

**jsdom/browser tools** — browser executors and vision_analyze may fail on Chrome
version mismatches or network errors (e.g. `BILLING_ERROR` from cloud browser providers).
When a review times out or the browser fails, fall back to `git diff` + `npm run build`
(client) for static verification, and re-dispatch the QA subagent if needed.

- `sitemap.xml` contains the new route (on Vercel preview).
- Each page has a unique, descriptive `<title>` and meta description.
- Running these on the preview URL: `curl -s https://<preview>/robots.txt` →
  no Disallow; `curl -s https://<preview>/sitemap.xml` → route present.
- Human review: the site reads well in Spanish and the services/geography are
  discoverable without search.
