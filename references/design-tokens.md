# Reference: Design tokens

## Colour

| Token              | Value                         | Usage                                     |
| ------------------ | ----------------------------- | ----------------------------------------- |
| --color-bg         | `#0B0B0B` / `var(--color-bg)` | Page background (dark default)            |
| --color-surface    | `#161616`                     | Card / panel background                   |
| --color-border     | `#2A2A2A`                     | Borders, dividers                         |
| --color-text       | `#F2F2F2`                     | Primary text                              |
| --color-text-muted | `#9C9C9C`                     | Secondary text, captions                  |
| --color-accent     | `#FFFFFF`                     | Primary action, headings on dark          |
| --color-new-badge  | `#1A1A1A`                     | Black circular "NEW" badge on makeup page |

## Fonts

| Purpose  | Family           | Weight  |
| -------- | ---------------- | ------- |
| Headings | Playfair Display | 400–700 |
| Body     | Poppins          | 300–600 |

## Spacing

- Base unit: `4px`
- Common gaps: `gap-4` / `gap-6` / `gap-8`
- Page padding: `pt-4 pb-16` on `UContainer` wrappers

## Components

| Component     | Style notes                                                    |
| ------------- | -------------------------------------------------------------- |
| `UButton`     | Accent colour (white on dark); subtle variant in grey          |
| `UContainer`  | Max width ~ `5xl`; used on every page                          |
| `NuxtPicture` | Always `format="webp"`; `alt` required                         |
| Gallery       | `grid-cols-1 md:grid-cols-6 grid-flow-dense auto-rows-[18rem]` |
| Badge "NEW"   | `absolute`, `w-24 h-24 md:w-32 md:h-32`, `bg-black`, circular  |

## Page rhythm

- Hero sections use a two-column grid (`md:grid-cols-2`, image left / text right).
- Section headings: `text-3xl md:text-4xl lg:text-5xl font-light`.
- Featured "NEW" markers: `tracking-widest`, `font-bold`, `1-2px` dots.
- All pages: `<UContainer class="pt-4 pb-16">` for vertical padding.
