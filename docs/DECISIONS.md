# Decisions

| Data | Decisão | Por quê |
|---|---|---|
| 2026-11-19 | Repo separado só para o site de marketing; app em outro repo | Ciclos de deploy e riscos diferentes |
| 2026-11-19 | Astro 5 + Tailwind v4 + Svelte, deploy Vercel | Kit já tem exemplos Astro/Svelte e tokens Tailwind v4 |
| 2026-11-19 | Site built inside `Zymble/Zymble` for now (session could not create a new repo); the unrelated FlowGenda file `src/scenes/` is excluded from TS/lint | Unblock Phase 0; move to `Zymble/clipyrush-site` when GitHub access allows |
| 2026-11-19 | Pinned Astro 5.18 (not the latest 7.x) | PRD/ARQUITETURA specify Astro 5; upgrade later as a dedicated PR |
| 2026-11-19 | Same English slugs in every locale (`/pt-br/pricing/`) | Simpler routing and hreflang; localized slugs can come later with redirects |
| 2026-11-19 | All routes generated from `src/config/routes.ts`; unfinished pages render a noindex placeholder | Header/footer links never 404 and the sitemap only lists finished pages |
| 2026-11-19 | Kit `components.css` imported inside `@layer components` | Unlayered kit styles were overriding Tailwind utilities (e.g. `hidden` on `.cr-btn`) |
| 2026-11-19 | Latin subset of Inter Variable (56 KB vs 345 KB), CSS inlined | Lighthouse mobile Performance 94 → 100 (LCP 3.1 s → 1.7 s); full font stays as fallback |
| 2026-11-19 | Header CTA uses a short label and hides below 640 px (it stays in the menu and hero) | Avoid horizontal scroll at 360 px |
| 2026-11-19 | Only `VERCEL_ENV=production` is indexable | Previews must never be indexed |
| 2026-11-19 | Local preview uses `scripts/serve-static.mjs` | The Vercel adapter does not support `astro preview` |
