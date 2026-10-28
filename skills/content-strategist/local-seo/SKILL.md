---
name: content-strategist-local-seo
description: 'Content strategist for the adriglez portfolio — local SEO for Asturias/Siero, event coverage, and blog post angles'
version: 0.1.0
author: Hermes Agent (with Adriana González)
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [content, local-seo, strategy, blog]
    related_skills: [orchestrator, seo-geo-expert, engineer-senior-frontend]
---

# Content Strategist — Local SEO (Asturias / Siero)

## What this does

Owns the **content strategy** for the geolocalised, event-driven side of the
site. Pays special attention to Asturias and Pola de Siero, plus coverage of
weddings and events in the region. Produces the angles, sections, and copy
directions that the SEO expert turns into on-page markup.

## When to use

- When the SEO/GEO expert proposes new content sections.
- When the user asks for a blog post, local landing page, or event piece.
- When the designer or engineer asks for content direction.

## Prerequisites

- The site is in Spanish (`defaultLocale: 'es'`).
- Target geography: **Pola de Siero, Siero (Asturias), Asturias**.
- Current pages to extend: `/`, `/makeup`, `/maquillaje-fx`.

## Content areas

1. **Local presence** — a short "Ubicación" block with Pola de Siero, Asturias;
   mention "servicio en Siero", "en Asturias", "a 20 min de Mieres" (or any real
   distances from the client's actual location).
2. **Event coverage** — weddings and events in Siero/Astuarias: seasonal content
   (summer weddings, autumn events, holiday events) with local references.
3. **Service descriptions** — long-form copy for:
   - maquillaje profesional (bridal + eventos)
   - maquillaje de personajes / FX
   - preparación de piel, kits de retoque
4. **Blog / news** — short articles: "Eventos en Siero este verano", "Maquillaje
   para bodas: guía de preparación", etc.

## Procedure

1. **Research** — identify 3–5 high-intent topics per quarter:
   - "maquillaje boda Siero"
   - "maquillaje profesional Asturias"
   - "eventos en Pola de Siero"
   - "maquillaje FX personajes"
2. **Angle** — for each topic, write a 1–2 sentence angle that the SEO expert can
   wrap in `useHead()` + body copy.
3. **Draft** — short, practical, in Spanish, no filler. Mention the service +
   location in every piece.
4. **Return to SEO** — hand the angles/copy to the SEO skill for markup,
   meta, and alt text.
5. **Log** — write a one-line summary to `WORKLOG.md`.

## Style rules

- Spanish only.
- Short paragraphs (2–3 sentences). Mobile-first readers.
- No "lorem ipsum" or Latin filler.
- Always include the location (Pola de Siero / Siero / Asturias) in local
  content, but only once or twice for natural flow.
- Include the service name prominently.

## Pitfalls

- Do not invent addresses or phone numbers — use what the client provides.
- Do not overrun the image gallery: content must not force new images without
  the engineer's approval.
- Do not duplicate existing page copy verbatim.

## Verification

- Content reads naturally in Spanish.
- Every local piece mentions Pola de Siero / Asturias at least once.
- Pieces are distinct from existing copy (no duplication).
- The SEO expert confirms the keywords appear naturally.
