# DEVELOPMENT.md

## How the subagent ecosystem works in this project

The adriglez site is developed by a **parent agent** that coordinates **subagents**.
Each subagent has a skill under `skills/` and works on a feature branch.

## Running a feature from scratch

1. **Plan** — the user (or orchestrator) defines the feature scope and
   success criteria.
2. **Spawn** — the parent spawns the relevant subagents via `delegate_task`,
   each with its skill loaded and a short context note.
3. **Work** — each subagent edits files on a feature branch (e.g.
   `feat/seo-makeup-events`), writes a one-line entry to `WORKLOG.md`.
4. **Review** — the parent collects diffs, routes each contribution to the
   others for cross-review, and merges winning changes.
5. **Verify** — the parent runs `npm run lint`, `npm run build`, and (if a
   Vercel preview exists) the QA skill's performance checks.
6. **Deliver** — the parent commits, pushes, opens a PR, and reports to the user.

## Subagent roles
| Skill | Role |
|---|---|
| `skills/engineer/senior-frontend/SKILL.md` | Senior frontend engineer (Nuxt) |
| `skills/designer/senior/SKILL.md` | Designer (UX/UI consistency) |
| `skills/seo-geo-expert/SKILL.md` | SEO + GEO specialist |
| `skills/qa-performance-engineer/SKILL.md` | QA + performance engineer |
| `skills/content-strategist/local-seo/SKILL.md` | Content strategist (local SEO) |

## Shared conventions
- Spanish for user-facing copy (site is `lang="es"`).
- Nuxt UI components by default.
- Every page gets `useHead()` with title + meta description.
- Every image gets `NuxtPicture` with `alt` and `format="webp"`.
- No `any` in TypeScript (strict mode).
- Dark mode is the default colour mode.

## Key commands
```bash
npm run dev          # local dev
npm run build        # type-check + build
npm run generate     # SSG
npm run preview      # preview generated site
npm run lint         # ESLint
npm run format       # Prettier
```

## File inventory for AI context
| File | Purpose |
|---|---|
| `AGENTS.md` | Root instructions for AI agents (auto-loaded by Hermes) |
| `skills/` | Per-role subagent skills |
| `references/tech-decisions.md` | Tech decision rationale |
| `references/design-tokens.md` | Design tokens |
| `references/seo-strategy.md` | SEO/GEO strategy |
| `WORKLOG.md` | (created per feature) subagent work log |

## Adding a new subagent role
1. Create `skills/<category>/<name>/SKILL.md` following the existing pattern
   (frontmatter + When to Use + Procedure + Pitfalls).
2. Register it in `AGENTS.md`'s subagent table and in `skills/orchestrator/SKILL.md`.
3. Commit to the repo.
