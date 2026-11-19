# CLAUDE.md — RushClippy marketing site

You are building the **public marketing website** for RushClippy (rushclippy.com): an AI tool that finds the best moments in long streams/videos and turns them into short vertical clips the creator fine-tunes before posting. Tagline: **"Your stream. Your cut."**

This repo is ONLY the marketing site (landing, features, use cases, pricing, blog, changelog, legal, waitlist). The SaaS app lives in a separate repo and will be served at `app.rushclippy.com`. Never build app features (auth, video processing, billing) here.

## Read before any task
1. `docs/PRD-SITE.md` — what the site is, sitemap, every page and section.
2. `docs/ARQUITETURA.md` — stack, folder layout, i18n, SEO, performance, deploy.
3. `docs/ROADMAP.md` — phases. Work on ONE phase per branch/PR.
4. `brand/README.md` — the brand kit is the visual source of truth.

## Working rules
- **Talk to me in Brazilian Portuguese.** Code, comments, commits, branch names and PR titles in English.
- I work mostly **from my phone**. So: keep replies short, always end a task with (1) what changed, (2) the preview URL from the PR deploy, (3) what I need to decide, if anything.
- Start each phase in **plan mode**: show the plan, wait for my "ok", then implement.
- One phase = one branch `phase-N-short-name` = one PR. Small commits. Never push to `main` directly.
- Before opening a PR run: `npm run check`, `npm run build`, `npm run lint`, and the Lighthouse/a11y script. Paste the scores in the PR description.
- If something in the docs is ambiguous, ask ONE question with your recommended default, don't guess big decisions.
- Update `docs/ROADMAP.md` checkboxes when a phase is done. Log notable decisions in `docs/DECISIONS.md` (date + decision + why).

## Brand rules (non-negotiable)
- Use ONLY tokens from `brand/tokens/variables.css` and `brand/tokens/tailwind-theme.css`. No hard-coded hex colors, no new fonts. Font: Inter Variable from `brand/fonts/`.
- Name: the product is **RushClippy** (renamed on 2026-11-19 from ClipyRush). `brand/` still has the old lettering in the logo files; the header/footer use a temporary wordmark (official symbol + name in Inter) until the new official SVGs arrive.
- Logos: use the official SVGs from `brand/logo/` as files. Never redraw, stretch, recolor or rebuild the logo. Follow `brand/guidelines/brand-guidelines.pdf` (clear space, min sizes, correct/incorrect uses).
- Orange (`--cr-palette-orange`) = brand + primary action only. Cyan = playhead/focus. Respect contrast pairs in `brand/colors/palette.md` (WCAG AA minimum).
- Component behavior/states: `brand/components/specifications.md` + `components.css`.
- Motion: durations from tokens; respect `prefers-reduced-motion` (apply end state immediately).
- Voice: `brand/strategy/brand-voice.md` and `positioning.md`. Energetic in campaigns, precise in product copy. The creator decides the cut — the AI suggests.
- Visual reference for product screenshots/mock UI: `brand/mockups/index.html` (13-screen prototype).

## UX library: UI UX Pro Max
- Installed at `.claude/skills/ui-ux-pro-max/` (from npm `uipro-cli@2.2.3`, installed offline). Use it for UX patterns, layout, accessibility and pre-delivery checklists: `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux|landing|web-interface` or `--stack astro|svelte|html-tailwind`.
- Its palettes, fonts and styles are NOT used: brand tokens and Inter win. Ignore its conversion tactics that break the honesty rules (waitlist counters, testimonials, stat counters, unsourced percentages, countdown urgency).

## Localization (CX per market)
- Copy is written per market, not translated: `en` = United States creators, `pt-br` = Brazilian creators, `es` = Spanish-speaking creators. See `docs/LOCALIZATION.md` for voice, glossary and rules.

## Honesty rules (non-negotiable)
- **Never invent** testimonials, customer logos, user counts, follower counts, "trusted by X", ratings, awards, security badges (SOC 2 etc.), press mentions, or performance claims ("10x faster", "go viral").
- Sections that need social proof are built with a typed data file that starts EMPTY; the section renders nothing in production until real, approved entries exist.
- No virality or reach promises. No percentages without a source.
- Comparison pages (vs competitors) only state verifiable public facts, each with source link and "checked on" date, neutral tone.
- Pricing shown before launch is labeled "Early access — pricing may change".

## Tech defaults (see ARQUITETURA.md for details)
Astro 5 + TypeScript strict + Tailwind CSS v4 + MDX content collections. Svelte islands only where interactivity is needed. Deployed on Vercel with preview deploy per PR. i18n: `en` (default, root), `pt-br`, `es`.

## Secrets
Never commit secrets. Use `.env` (gitignored) + `.env.example` with every variable documented. Ask me to add values in Vercel; never print them.

## Definition of done (every PR)
- Builds with zero errors/warnings in `astro check`.
- Lighthouse mobile: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100 on the pages touched.
- Works at 360 px, 768 px, 1280 px; light and dark theme; keyboard-only navigation; reduced motion.
- All new strings exist in the three locales (es can be marked `// TODO review` for a human translator).
- Preview URL tested and pasted in the PR.
