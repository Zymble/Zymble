# PRD — Site de marketing ClipyRush

## 1. Objetivo
Site público global (clipyrush.com) que apresenta a ClipyRush, gera confiança e **captura cadastros na lista de espera (early access)**. Quando o app for lançado, os mesmos CTAs passam a levar para `app.clipyrush.com` com uma flag de configuração, sem refazer páginas.

**Métrica principal:** taxa de conversão visitante → cadastro na waitlist.
**Secundárias:** cliques em "Paste a stream link" no hero, tráfego orgânico (SEO) para blog/comparativos/casos de uso.

## 2. Público
| Persona | Dor | O que o site precisa provar |
|---|---|---|
| Streamer (Twitch, YouTube, Kick) | Lives de horas, sem tempo de editar cortes | Acha o lance **e a reação**, e quem decide o corte é ele |
| Editor / clipper | Retrabalho, legenda, enquadramento vertical | Controle fino de In/Out, legenda e enquadramento editáveis |
| Agência / gestor de vários canais | Aprovação, versões, fusos, calendário | Fila de revisão compartilhada, versões explícitas, agendamento por fuso |

## 3. Posicionamento e diferencial
> **Atualização 19/11/2026 (decisão do dono):** o site passa a ser de dois lados. O streamer encontra seu clipador; o clipador clipa ao vivo e posta com o momento ainda quente. Gancho: **"Não perca o momento. Clipe ao vivo."** A tagline "Your stream. Your cut." vira assinatura (fechamento e rodapé). CTA principal = duas portas: "Eu faço live → Achar meu clipador" e "Eu clipo → Clipar ao vivo". Confirmar com o repo do app que clipe ao vivo e a conexão streamer↔clipador fazem parte do produto.

- Tagline: **Your stream. Your cut.** Alternativas: *Find the moment. Make the cut.* / *Give the best part a replay.*
- Diferencial contra OpusClip/Eklipse/StreamLadder/Medal: **a IA sugere, o criador decide**. As alças In/Out (do símbolo da marca) aparecem no hero, nas seções e no editor como prova visual.
- Foco em **streams/VODs longos**, não em "qualquer vídeo".

## 4. Mapa do site
Idiomas: `/` (en), `/pt-br/`, `/es/`. Todas as páginas existem nos três.

**Navegação principal:** Features ▾ · Use cases ▾ · Pricing · Resources ▾ · [Sign in] · **[Get early access]**
(Sign in fica oculto até `APP_LIVE=true`.)

| Rota | Página |
|---|---|
| `/` | Home |
| `/features/` | Hub de recursos |
| `/features/ai-moments/` | Detecção de momentos (fala, picos de áudio, chat) |
| `/features/in-out-editor/` | Editor In/Out (diferencial) |
| `/features/captions/` | Legendas automáticas e editáveis |
| `/features/vertical-reframe/` | Reenquadramento 9:16 |
| `/features/scheduling/` | Agendamento TikTok / Shorts / Reels, com fuso |
| `/features/analytics/` | Desempenho dos cortes |
| `/use-cases/streamers/` · `/editors/` · `/agencies/` | Casos de uso por persona |
| `/pricing/` | Planos (Creator, Editor, Agency), mensal/anual, FAQ de cobrança |
| `/blog/` + `/blog/[slug]/` | Blog (MDX), categorias e tags |
| `/compare/` + `/compare/[competitor]/` | Comparativos factuais (ver regras de honestidade) |
| `/changelog/` | Novidades do produto |
| `/about/` | Sobre, missão, contato |
| `/brand/` | Press kit: logos, cores, download do kit |
| `/early-access/` | Página dedicada da waitlist (também usada pelos anúncios) |
| `/contact/` | Formulário de contato |
| `/legal/terms/` · `/privacy/` · `/cookies/` · `/acceptable-use/` | Jurídico (texto base marcado para revisão de advogado) |
| `/404` | Erro com atalho para home e waitlist |

## 5. Home — seções em ordem
1. **Hero** — título "Your stream. Your cut.", subtítulo da promessa, campo **"Paste a stream link"** + botão **"Get early access"**. Antes do lançamento, o link colado vai junto no cadastro da waitlist ("we'll clip it first when we launch"). Depois do lançamento, redireciona para `app.clipyrush.com/import?url=`. Ao lado: vídeo `brand/mockups/night-stage.mp4` (mudo, loop, legenda `.vtt`, poster `.jpg`) dentro de uma moldura com as alças In/Out.
2. **Plataformas suportadas** — Twitch, YouTube, Kick, upload de arquivo (texto + ícones neutros; só listar o que o app realmente vai suportar, vindo de um arquivo de config).
3. **Como funciona (3 passos)** — Import → Review suggested clips → Save & schedule. Usa os ícones `upload`, `trim`, `calendar` do kit.
4. **Diferencial In/Out** — timeline animada mostrando a IA sugerindo e o criador ajustando início/fim (alças do símbolo). Seção principal da página.
5. **Grade de recursos** — 6 cards ligando para as páginas de features.
6. **Por persona** — abas Streamer / Editor / Agency com uma frase da voz da marca para cada.
7. **Prova social** — logos, depoimentos e números. **Vazia e oculta até haver dados reais aprovados.**
8. **Prévia de preços** — 3 planos resumidos + link para `/pricing/`.
9. **FAQ** — 6 a 8 perguntas (o que é, quais plataformas, idiomas de legenda, direitos sobre o conteúdo, privacidade, quando lança). Com JSON-LD `FAQPage`.
10. **CTA final** — repete o campo de link + waitlist.
11. **Footer** — Product (Features, Pricing, Changelog) · Use cases · Resources (Blog, Compare, Brand kit) · Company (About, Contact) · Legal (Terms, Privacy, Cookies, Acceptable use, preferências de cookies) · seletor de idioma · redes (TikTok, YouTube, X, Discord, Instagram) · tema claro/escuro.

## 6. Páginas de recurso — modelo
Hero curto com uma frase concreta da etapa → demo visual (mock de UI baseado no protótipo) → 3 benefícios → "como funciona" detalhado → FAQ do recurso → CTA waitlist → links para recursos relacionados. Um modelo de layout, conteúdo em MDX por idioma.

## 7. Waitlist
- Campos: e-mail (obrigatório), perfil (Streamer / Editor / Agency), plataforma principal, link do canal (opcional), link de stream colado no hero (oculto), idioma e UTM (ocultos).
- Antispam: honeypot + Cloudflare Turnstile.
- Confirmação por e-mail (double opt-in) no idioma do usuário.
- Consentimento explícito de marketing (LGPD/GDPR), com link para a política de privacidade.
- Mensagens de erro na voz da marca ("We couldn't save your spot. Check your email and try again.").

## 8. Conteúdo e SEO
- Palavras-chave alvo: "twitch clip maker", "stream to shorts", "ai clips from streams", "cortes de live", "clipes para tiktok de live", "recortes de stream" (en/pt/es).
- Blog começa com 6 artigos-pilar (2 por idioma no início, tradução depois), na voz da marca, sem promessa de viralizar.
- Comparativos: só fatos públicos com fonte e data; atualizar a cada 90 dias.

## 9. Fora do escopo deste repo
Login, upload/processamento real, editor funcional, cobrança, publicação nas redes, dashboard. Tudo isso fica no repo do app.

## 10. Critérios de lançamento
- [ ] Domínio clipyrush.com com HTTPS, `www` redirecionando para o apex
- [ ] Home, features, use cases, pricing, early-access, about, brand, legal em 3 idiomas
- [ ] Waitlist funcionando com double opt-in e antispam
- [ ] OG images por página e idioma, sitemap, robots, hreflang, JSON-LD
- [ ] Analytics com eventos de conversão
- [ ] Textos jurídicos revisados por advogado
- [ ] Lighthouse e acessibilidade dentro das metas
