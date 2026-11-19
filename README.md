# RushClippy — marketing site

Public site for [rushclippy.com](https://rushclippy.com). The SaaS app lives in a separate repo
(`app.rushclippy.com`). Read `CLAUDE.md` and `docs/` before contributing.

## Stack

Astro 5 · TypeScript strict · Tailwind CSS v4 · Svelte 5 islands · MDX · Vercel.
Brand tokens, components and fonts come from `brand/` (read-only).

## Run locally

```bash
npm install
cp .env.example .env      # fill only what you need; nothing is required for local dev
npm run dev               # http://localhost:4321 (live reload)
npm run serve             # production build served like Vercel, http://localhost:4321
```

## Quality gates

```bash
npm run check             # astro check (types)
npm run lint              # eslint + prettier --check
npm run build
npm run test:e2e          # Playwright smoke + axe at 360/768/1280, light and dark (needs a build)
npx @lhci/cli autorun     # Lighthouse mobile budgets (lighthouserc.json)
```

The same steps run in GitHub Actions (`.github/workflows/ci.yml`) on every PR.

## How pages work

- Every route is listed in `src/config/routes.ts` with a status: `soon` renders a noindex
  placeholder, `live` is indexable and goes into the sitemap.
- `src/pages/[...path].astro` generates each route for `en` (root), `/pt-br/` and `/es/`.
- UI strings: `src/i18n/ui.ts` (Spanish marked for native review).
- CTAs read `PUBLIC_APP_LIVE`: waitlist before launch, app after.
- Only `VERCEL_ENV=production` builds are indexable; previews and local builds are noindex
  and `robots.txt` disallows everything.

## Fonts

`src/assets/fonts/InterVariable-latin.woff2` is a Latin subset of `brand/fonts/InterVariable.woff2`
(SIL OFL 1.1, see `OFL.txt`). Regenerate with `scripts/subset-font.sh`.

## Private preview on claude.ai (while there is no Vercel preview)

```bash
npm run build
python3 scripts/preview-artifact.py .vercel/output/static /tmp/rushclippy-preview
```

Produces every page as flat files (`index.html` = pt-br home, `pt-br-clippers.html`, …) with working
internal links; the waitlist API is stubbed so the form can be tried without sending email.

## Waitlist (Phase 1)

`POST /api/waitlist/` validates, checks the honeypot and Turnstile, stores a pending contact in Resend
and emails a signed confirmation link (`/api/waitlist/confirm/`, valid 7 days). Required in Vercel:
`RESEND_API_KEY`, `RESEND_AUDIENCE_ID`, `WAITLIST_FROM_EMAIL`, `WAITLIST_SIGNING_SECRET`; optional
`PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` and `CONTACT_TO_EMAIL` (team notification).
Locally, without keys, the endpoint answers with a dry run.
