# Reference: SEO & GEO strategy

## Target keywords per page

| Page             | Primary keyword                               | Secondary / GEO                |
| ---------------- | --------------------------------------------- | ------------------------------ |
| `/` (home)       | maquillaje de caracterización FX              | Pola de Siero, Asturias        |
| `/makeup`        | maquillaje profesional novias                 | boda, eventos, Asturias, Siero |
| `/maquillaje-fx` | maquillaje FX, personajes, efectos especiales | Asturias, Siero                |

## GEO targets (every new page should attempt ≥1)

- **Events**: bodas, eventos, novias, invitadas, celebraciones
- **Professional makeup**: maquillaje profesional, maquillaje de alta gama
- **Character/FX**: maquillaje de personajes, FX, efectos especiales, actores
- **Geolocalised Asturias**: Pola de Siero, Siero, Asturias, norte de España

## On-page rules

- `useHead()` on every page: `title` (50–60 chars), meta `description` (120–160 chars)
- `og:title`, `og:description`, `twitter:card`, `canonical`
- `<html lang="es">` — do not remove
- `sitemap` in `nuxt.config.ts` — add every new route
- `robots.txt` — allow all crawling (indexable)

## Content rules

- Spanish only; no filler Latin.
- Natural keyword placement: H1, first paragraph, alt text, "ubicación" block.
- Short paragraphs, mobile-first; mention location once or twice in local content.

## Measurement

- Lighthouse / Pagespeed Web Vitals on Vercel preview URL.
- Manual audit of `sitemap.xml` and `robots.txt` on the preview.
- Human review: is the site discoverable in Spanish for the target keywords?
