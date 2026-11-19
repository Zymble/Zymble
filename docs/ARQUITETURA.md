# Arquitetura — Site RushClippy

## Stack
| Camada | Escolha | Por quê |
|---|---|---|
| Framework | **Astro 5** (static-first, `output: 'static'` + endpoints server só onde precisa) | Site de marketing rápido, ótimo SEO, e o kit já traz `ClipImport.astro` |
| Linguagem | TypeScript `strict` | Menos bug, autocomplete para o Claude Code |
| Estilo | **Tailwind CSS v4** + `brand/tokens/*.css` + `brand/components/components.css` | Exatamente o que o kit documenta |
| Interatividade | Ilhas **Svelte 5** (`client:visible`) | Timeline In/Out, abas, toggle de preço, formulário. O kit traz `ClipImport.svelte` |
| Conteúdo | Astro Content Collections + MDX, com schema Zod | Blog, changelog, features, comparativos, FAQ e depoimentos tipados |
| i18n | Roteamento i18n nativo do Astro: `en` na raiz, `pt-br`, `es` | Global desde o primeiro dia |
| Deploy | **Vercel** (`@astrojs/vercel`) com preview por PR | Você testa cada PR pelo link no celular |
| Waitlist | Endpoint `/api/waitlist` → provedor de e-mail (padrão: **Resend** Contacts + e-mail de confirmação), atrás de uma interface `WaitlistProvider` | Dá pra trocar o provedor sem mexer no front |
| Antispam | Cloudflare Turnstile + honeypot + rate limit simples | |
| Analytics | **Plausible** (sem cookies) com eventos de conversão; adaptador para trocar por PostHog depois | Privacidade com menos atrito de banner |
| Imagens | `astro:assets` (AVIF/WebP, tamanhos responsivos) | Performance |
| OG images | Geradas no build (Satori/`@vercel/og` ou `astro-og-canvas`) com o template do kit `marketing/open-graph-1200x630.png` como referência | Uma por página e idioma |
| Qualidade | ESLint, Prettier, `astro check`, Playwright (smoke + axe), Lighthouse CI | Metas do CLAUDE.md |

## Estrutura de pastas
```
/
├─ CLAUDE.md
├─ docs/                     PRD-SITE, ARQUITETURA, ROADMAP, DECISIONS
├─ brand/                    kit de marca (somente leitura; não editar)
├─ public/
│  ├─ favicon.svg, favicon.ico, app icons (copiados de brand/logo)
│  ├─ media/night-stage.mp4|.jpg|.vtt
│  └─ downloads/rushclippy-brand-kit.zip
├─ src/
│  ├─ styles/global.css       importa tailwind + tokens + components
│  ├─ config/site.ts          nome, URLs, APP_LIVE, redes, plataformas suportadas
│  ├─ i18n/
│  │  ├─ ui.ts                strings de interface por idioma
│  │  └─ utils.ts             t(), getLocalizedPath(), hreflang
│  ├─ components/
│  │  ├─ layout/              Header, Footer, LocaleSwitcher, ThemeToggle, SkipLink
│  │  ├─ brand/               Logo (troca de arquivo por tema), InOutFrame
│  │  ├─ sections/            Hero, Platforms, HowItWorks, InOutShowcase, FeatureGrid,
│  │  │                       Personas, SocialProof, PricingPreview, FAQ, FinalCTA
│  │  ├─ islands/             *.svelte (WaitlistForm, InOutTimeline, PricingToggle, Tabs)
│  │  └─ seo/                 SEO.astro, JsonLd.astro
│  ├─ content/
│  │  ├─ blog/{en,pt-br,es}/*.mdx
│  │  ├─ features/{en,pt-br,es}/*.mdx
│  │  ├─ use-cases/{en,pt-br,es}/*.mdx
│  │  ├─ compare/{en,pt-br,es}/*.mdx     (campos obrigatórios: sources[], checkedOn)
│  │  ├─ changelog/*.mdx
│  │  ├─ faq/{en,pt-br,es}.yaml
│  │  ├─ pricing/plans.yaml               (flag earlyAccess)
│  │  └─ testimonials/*.yaml              (começa VAZIO; campo approved: true obrigatório)
│  ├─ layouts/               BaseLayout, PageLayout, FeatureLayout, PostLayout, LegalLayout
│  ├─ lib/
│  │  ├─ waitlist/            provider.ts (interface), resend.ts, validation.ts (Zod)
│  │  └─ analytics.ts         track('waitlist_submit') etc.
│  └─ pages/
│     ├─ index.astro, features/…, use-cases/…, pricing.astro, blog/…, compare/…,
│     │  changelog.astro, about.astro, brand.astro, early-access.astro, contact.astro,
│     │  legal/…, 404.astro
│     ├─ pt-br/…  es/…        (via rotas dinâmicas [locale], sem duplicar arquivos)
│     └─ api/waitlist.ts, api/contact.ts   (prerender = false)
├─ tests/                    playwright smoke + axe
├─ .env.example
└─ astro.config.mjs
```

## Variáveis de ambiente (`.env.example`)
```
PUBLIC_SITE_URL=https://rushclippy.com
PUBLIC_APP_URL=https://app.rushclippy.com
PUBLIC_APP_LIVE=false
PUBLIC_PLAUSIBLE_DOMAIN=rushclippy.com
PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
RESEND_API_KEY=
RESEND_AUDIENCE_ID=
WAITLIST_FROM_EMAIL=hello@rushclippy.com
CONTACT_TO_EMAIL=
```

## SEO técnico
- `<SEO>` em todo layout: title/description por idioma, canonical, `hreflang` para en/pt-br/es + `x-default`, OG/Twitter cards.
- `@astrojs/sitemap` com i18n; `robots.txt`; previews da Vercel com `noindex`.
- JSON-LD: `Organization`, `WebSite`, `SoftwareApplication` (home/pricing), `FAQPage`, `BlogPosting`, `BreadcrumbList`.
- URLs em minúsculas, com barra final, sem querystring em links internos.

## Performance e acessibilidade
- Zero JS por padrão; ilhas só com `client:visible`/`client:idle`.
- Vídeo do hero: `preload="none"` + poster; carrega com IntersectionObserver; pausa com reduced motion.
- Fonte Inter Variable self-hosted com `font-display: swap` e preload.
- WCAG 2.1 AA: foco visível em ciano, skip link, landmarks, `aria` dos componentes conforme `brand/components/specifications.md`, alvos de toque ≥ 44 px.
- Tema: segue o sistema; toggle persiste e aplica antes da primeira pintura (script inline no `<head>`).

## Integração futura com o app
- Todos os CTAs leem `PUBLIC_APP_LIVE`. `false` → waitlist. `true` → `PUBLIC_APP_URL` (`/signup`, `/import?url=`).
- O campo de link do hero usa o mesmo contrato do `ClipImport` do kit (POST com o campo `url`), facilitando apontar para o app depois.
- Domínios: `rushclippy.com` (este repo) e `app.rushclippy.com` (repo do app). Cookies de analytics não são compartilhados entre os dois sem consentimento.
