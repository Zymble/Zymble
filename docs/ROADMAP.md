# Roadmap — Site ClipyRush

Cada fase = 1 branch + 1 PR + 1 link de preview. Pelo celular, mande o prompt da fase e aprove o plano antes da implementação.

---

## Fase 0 — Fundação
- [x] Projeto Astro 5 + TS strict + Tailwind v4 + Svelte + MDX + sitemap + adaptador Vercel
- [x] `global.css` importando tokens e components do kit; Inter self-hosted; favicons e ícones
- [x] i18n (en raiz, pt-br, es), `t()`, LocaleSwitcher, hreflang
- [x] BaseLayout com SEO, tema claro/escuro sem flash, skip link
- [x] Header + Footer completos (links podem apontar para páginas "em breve")
- [x] ESLint, Prettier, `astro check`, Playwright + axe, Lighthouse CI no GitHub Actions
- [x] `.env.example`, `docs/DECISIONS.md`, README de como rodar

**Prompt:**
> Leia CLAUDE.md e todos os arquivos de docs/. Execute a Fase 0 do ROADMAP. Comece em plan mode e me mostre o plano em até 15 linhas antes de implementar.

---

## Fase 1 — Home + waitlist (MVP publicável)
- [x] Todas as seções da Home (PRD §5), com a prova social oculta enquanto vazia
- [x] InOutTimeline (ilha Svelte): IA sugere, usuário arrasta as alças In/Out (teclado também)
- [ ] WaitlistForm + `/api/waitlist` (Resend, Turnstile, honeypot, double opt-in, consentimento)
- [ ] `/early-access/` e página de confirmação
- [ ] Eventos Plausible: `hero_link_paste`, `waitlist_submit`, `waitlist_confirmed`
- [ ] OG image da home nos 3 idiomas

**Prompt:**
> Execute a Fase 1 do ROADMAP seguindo PRD-SITE §5 e §7. Use o protótipo brand/mockups/index.html como referência visual da UI. Plan mode primeiro.

---

## Fase 2 — Recursos e casos de uso
- [ ] FeatureLayout + 6 páginas de recursos (MDX, 3 idiomas)
- [ ] Hub `/features/`
- [ ] 3 páginas de casos de uso (streamers, editors, agencies)
- [ ] Mocks de UI baseados no protótipo (HTML/CSS com tokens, sem prints falsos de métricas)

**Prompt:**
> Execute a Fase 2 do ROADMAP. Escreva a copy em inglês primeiro seguindo brand/strategy/brand-voice.md, depois pt-br e es. Me mostre a copy da página in-out-editor antes de fazer as outras.

---

## Fase 3 — Preços, Sobre, Brand, Contato, Jurídico
- [ ] `/pricing/` lendo `plans.yaml`, toggle mensal/anual, selo "Early access", FAQ de cobrança
- [ ] `/about/`, `/contact/` (+ `/api/contact`), `/brand/` com download do kit
- [ ] Páginas legais com texto base marcado "DRAFT — legal review required"
- [ ] Banner/preferências de cookies só se algum script exigir

**Prompt:**
> Execute a Fase 3 do ROADMAP. Os valores de preço ficam em plans.yaml com placeholders que eu vou definir; me pergunte os valores no fim.

---

## Fase 4 — Conteúdo e SEO
- [ ] Blog (listagem, post, categorias, RSS por idioma, tempo de leitura)
- [ ] Changelog
- [ ] Comparativos (schema com `sources[]` e `checkedOn` obrigatórios)
- [ ] OG images geradas para todas as páginas
- [ ] JSON-LD completo, revisão de títulos/descrições, links internos
- [ ] 6 artigos-pilar em rascunho (`draft: true`) para minha revisão

**Prompt:**
> Execute a Fase 4 do ROADMAP. Para os comparativos, pesquise só fatos públicos e cite a fonte com data; deixe tudo como draft para eu revisar.

---

## Fase 5 — Polimento e lançamento
- [ ] Auditoria de acessibilidade completa e Lighthouse em todas as rotas
- [ ] Páginas 404/erro, estados vazios, mensagens de erro na voz da marca
- [ ] Domínio clipyrush.com na Vercel, redirects, headers de segurança (CSP, HSTS)
- [ ] Checklist do PRD §10 completo

**Prompt:**
> Execute a Fase 5 do ROADMAP e me entregue o checklist do PRD §10 marcado, com o que ainda depende de mim.

---

## Depois do lançamento do app
- [ ] `PUBLIC_APP_LIVE=true`: CTAs viram Sign up / Sign in; hero manda o link para `app.clipyrush.com/import?url=`
- [ ] Ativar a prova social com dados reais aprovados
- [ ] Página de status/integrações conforme o app realmente suportar
