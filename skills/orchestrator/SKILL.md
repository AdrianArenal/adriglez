---
name: orchestrator
description: 'Orchestration protocol for the adriglez subagent ecosystem coordinating feature development'
version: 0.1.0
author: Hermes Agent (with Adriana González)
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [orchestration, multi-agent, coordinator]
    related_skills:
      [engineer-senior-frontend, designer-senior, seo-geo-expert, qa-performance-engineer]
---

# Subagent Orchestrator Skill

## What this does

Defines the coordination protocol for the subagent ecosystem around the
**adriglez** Nuxt portfolio (Adriana González, FX & makeup artist).

A **parent agent** (the user, or an orchestrator subagent) spawns subagents,
routes context, reviews their diffs, and merges winning changes. Subagents never
talk to each other directly.

## When to use

- Starting a new feature on the adriglez site.
- Reviewing a PR or feature branch for coherence across roles.
- Adding or adjusting the subagent skill set.

## Roles

| Skill                                          | Role                            |
| ---------------------------------------------- | ------------------------------- |
| `skills/engineer/senior-frontend/SKILL.md`     | Senior frontend engineer (Nuxt) |
| `skills/designer/senior/SKILL.md`              | Designer (UX/UI consistency)    |
| `skills/seo-geo-expert/SKILL.md`               | SEO + GEO specialist            |
| `skills/qa-performance-engineer/SKILL.md`      | QA + performance engineer       |
| `skills/content-strategist/local-seo/SKILL.md` | Content strategist (local SEO)  |

## Workflow protocol

1. **Plan** — parent defines the feature scope, success criteria, and target branch.
2. **Spawn** — parent spawns the relevant subagents via `delegate_task`, each with
   its skill loaded and a short context note referencing the relevant files.
3. **Work** — each subagent works on the feature, writing/editing files under the
   feature branch, and logs its changes in a `WORKLOG.md` at the repo root.
4. **Review** — parent collects diffs, routes each subagent's contribution to the
   others for cross-review (e.g. SEO sends a review of the copy; QA sends a
   review of the markup), and merges the working files.
5. **Verify** — parent runs lint, type-check, build, and (if preview URL exists)
   a QA pass via `skills/qa-performance-engineer`.
6. **Deliver** — parent commits, pushes, opens a PR on GitHub, and reports to the user.

## Process safety: build/CI pitfalls

This is critical for the adriglez project. Multiple overlapping `npm run build` +
`npm run preview` + `npm run dev` processes cause Node/Nitro lock conflicts that
result in:
- `nuxt build` failing with "Another Nuxt build is already running" (PID + lock)
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

## Context routing rules

- **Engineer** owns the code. It owns `app/`, `nuxt.config.ts`, `package.json`.
- **Designer** owns visual consistency, component structure, accessibility of
  markup. It sends proposed class names / component structure to the engineer.
- **SEO/GEO** owns `useHead()`, meta description, sitemap entries, content copy,
  alt text. It reviews the copy the engineer writes and nudges.
- **QA** owns performance (LCP, CLS, INP), CWV scores on the Vercel preview URL,
  and accessibility basics.
- **Content strategist** (if active) owns the local-SEO content: Asturias/Siero
  references, event coverage, blog post angles.

## Shared conventions

- Spanish for user-facing copy (site is `lang="es"`).
- Nuxt UI components by default; only hand-roll when the component doesn't exist.
- Every page gets `useHead()` with title + meta description.
- Every image gets `NuxtPicture` with `alt` and `format="webp"`.
- No `any` in TypeScript (strict mode).
- Dark mode is the default colour mode.

## Failure handling

- If a subagent's work conflicts (e.g. two roles change the same component), the
  orchestrator decides by the priority: **engineer > designer > seo > qa > content**.
- If the preview URL cannot be provisioned on Vercel, QA falls back to local
  `npm run build && npm run preview` + a manual Lighthouse pass, and logs the
  limitation.
