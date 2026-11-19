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
| 2026-11-19 | UI UX Pro Max skill adopted as UX reference only (no palettes/fonts/fake social proof) | Better UX patterns and checklists without breaking brand or honesty rules |
| 2026-11-19 | Copy is written per market (US, BR, Spanish-speaking), see docs/LOCALIZATION.md | Owner works as CX for each market; translation alone reads foreign |
| 2026-11-19 | Animation stack: CSS keyframes + CSS scroll-driven animations (0 KB) and Svelte 5 islands; no GSAP/Lottie/Motion for now | Lighthouse mobile ≥ 95 with a rich hero (measured 98). Motion (motion.dev) is the fallback if we need JS-driven sequences |
| 2026-11-19 | Hero = looping 14 s "story" (live → AI finds moment → 9:16 + captions → scheduled), synced with rotating questions; pause button, paused off-screen, static frame with reduced motion | Shows the product promise before reading; meets WCAG 2.2.2 |
| 2026-11-19 | Mobile sticky CTA appears after the hero form scrolls away and hides at the final CTA | Keeps the CTA in reach while scrolling ("CTA descendo") |
| 2026-11-19 | Pricing preview shows plans without prices ("Price announced at launch") | Prices not defined yet; no invented numbers |
| 2026-11-19 | Redesign v2 ("less template"): no pills, no eyebrows, no icon-tile cards, no glow. Editorial layout with hairline rules, big tabular numbers, feature index rows, In/Out brackets as the only ornament | Owner feedback: v1 looked AI-generated |
| 2026-11-19 | Hero H1 is a concrete local-language line ("Sua live teve quatro horas. O corte tem 38 segundos."); the English tagline moves to the closing band and footer | A BR/ES visitor understands the product in the first line; tagline stays as signature |
| 2026-11-19 | Hero always dark (broadcast feel) with a mock editor: LIVE→CLIP tag, chat overlay, In/Out brackets, 9:16 reframe, timecoded log synced to the 14 s loop | Shows the product instead of describing it |
| 2026-11-19 | Scroll progress line under the header in cyan (playhead), pure CSS scroll-driven | Page reads as a timeline; zero JS |
| 2026-11-19 | No "VOD" in copy: "live gravada" / "past broadcast" / "stream grabado"; player-style time "02:14:07 / 4:12:33" | Owner feedback: most creators don't know the term |
| 2026-11-19 | Hero 9:16 crop, In/Out brackets and chat overlay positioned for the demo clip (car at ~48–97% of the frame) | The reframe has to show the action, not the empty road |
| 2026-11-19 | Theme control: contrast icon in the desktop header; "Light / Dark" segmented control in the mobile menu and footer | Clearer than sun/moon glyphs; fewer icons in the mobile header |
| 2026-11-19 | Mobile menu: 4 top-level rows, groups collapsed (details), PT/EN/ES and theme as compact controls | Owner feedback: menu had too many items |
| 2026-11-19 | New use case `use-cases/clippers` and a home section for clippers with a multi-channel queue mock and the finished 9:16 clip; honest triggers only (identity, real pain, specificity, product view) | Clipping is a growing profession; no earnings/virality promises (CLAUDE.md honesty rules) |
