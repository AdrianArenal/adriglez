# AGENTS.md

Project context for AI coding agents working on **adriglez** — the portfolio of
Adriana González, FX & makeup artist based in Pola de Siero, Asturias.

This file is auto-loaded by Hermes (and read by other agent tooling) when working
in this repository. It is supplementary to the role-specific skills in
`skills/` — consult those for behaviour during feature development.

---

## 1. Project overview

A lightweight, image-heavy portfolio built with Nuxt 4 + Vue 3 + TypeScript,
using:

| Area       | Technology                                             |
| ---------- | ------------------------------------------------------ |
| Framework  | Nuxt 4.5.x                                             |
| Language   | TypeScript (strict)                                    |
| UI library | Nuxt UI 4 (Tailwind + VAU components)                  |
| Images     | @nuxt/image (webp/avif, lazy, responsive)              |
| Motion     | @vueuse/motion                                         |
| SEO        | @nuxtjs/seo                                            |
| AI-ready   | nuxt-ai-ready                                          |
| Styling    | Tailwind CSS + custom CSS in `app/assets/css/main.css` |

The site is a static (SSG) site: pages live in `app/pages/` and the site is
generated with `nuxt generate` for deployment on Vercel.

---

## 2. Dev commands

| Command            | Purpose                            |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Start dev server (port 3000)       |
| `npm run build`    | Type-check + build                 |
| `npm run generate` | SSG into `.output/`                |
| `npm run preview`  | Preview the generated site locally |
| `npm run lint`     | ESLint                             |
| `npm run format`   | Prettier                           |

---

## 3. Project structure

```
adriglez/
├── app/
│   ├── components/     # Vue components (Hero, Feed, AppHeader, ScrollToTop)
│   ├── layouts/        # Layouts (default.vue)
│   ├── pages/          # Page routes: index, makeup, maquillaje-fx
│   └── assets/css/     # Global CSS
├── public/             # Static assets (logos, favicon)
├── public/images/      # Portfolio images (40+ files, avif + webp)
├── .github/skills/     # skilld-managed package skills (do not hand-edit)
├── skills/             # CUSTOM subagent skills (author per feature)
├── references/         # AI context: tech decisions, design tokens, SEO strategy
└── nuxt.config.ts      # Site: url, site metadata, sitemap, colorMode, modules
```

---

## 4. Design system

- **Default colour mode:** dark (config `colorMode.preference: 'dark'`, fallback dark).
- **Fonts:** Playfair Display (serif, headings) + Poppins (sans, body) from Google Fonts.
- **Brand:** black + white + grey; black circular "NEW" badges on the makeup page.
- **Component library:** Nuxt UI (`UButton`, `UContainer`, `UModal`, `UPage`, `UIcon`, etc.).
- **Images:** `NuxtPicture` from @nuxt/image everywhere; always pass `alt`,
  `format="webp"`, and sensible `sizes`.

---

## 5. SEO / GEO requirements

- **Every page** must use `useHead()` with a `title` and a meta `description` in
  Spanish.
- The `sitemap` in `nuxt.config.ts` is hand-maintained — add new routes there.
- `robots.txt` disallows nothing (indexable). Keep it that way.
- **GEO targets** (content must attempt coverage of these):
  - Events (bodas, wedding-related), professional makeup (maquillaje profesional),
  - character / FX makeup, geolocalised Asturias and specifically **Pola de Siero**.
- Keep the site language `es` (defaultLocale) — do not add English unless a
  translation strategy is agreed.
- Every new page, blog post, or section must include:
  - a distinct meta description (120–160 chars),
  - an H1 that matches the page title,
  - a unique `alt` on every image.

---

## 6. Image guidelines

- `public/images/` holds 40+ portfolio images. Add new images there; generate
  avif + webp through @nuxt/image (always use `NuxtPicture`).
- Never commit large uncompressed images — keep avif/webp at <300KB per image
  where possible.
- Always pass `alt` and a `sizes` attribute.

---

## 7. Multi-agent workflow

A feature is developed by a **parent agent** that coordinates **subagents**.
Each subagent has its own skill under `skills/`:

| Skill file                                     | Subagent role                   |
| ---------------------------------------------- | ------------------------------- |
| `skills/engineer/senior-frontend/SKILL.md`     | Senior frontend engineer (Nuxt) |
| `skills/designer/senior/SKILL.md`              | Designer (UX/UI consistency)    |
| `skills/seo-geo-expert/SKILL.md`               | SEO + GEO specialist            |
| `skills/qa-performance-engineer/SKILL.md`      | QA + performance engineer       |
| `skills/content-strategist/local-seo/SKILL.md` | Content strategist (local SEO)  |
| `skills/orchestrator/SKILL.md`                 | Orchestration protocol          |

Communication between subagents happens **through the repo**:

- Each subagent creates or changes files under a feature branch.
- The orchestrator reviews diffs and merges the winning changes into the feature branch.
- No subagent communicates directly — the orchestrator routes context.

See `skills/orchestrator/SKILL.md` for the full protocol.

---

## 8. Code style

- TypeScript strict mode — no `any` without a comment.
- ESLint + Prettier are enforced; run `npm run lint` + `npm run format` before
  committing.
- Components stay small and single-purpose.
- Pages use Vue 3 `<script setup lang="ts">`; prefer Nuxt UI components.
