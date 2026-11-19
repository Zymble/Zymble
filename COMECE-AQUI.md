# Comece aqui (pra você, não pro Claude Code)

## 1. Montar o repositório (uma vez)
1. Crie um repo novo no GitHub, por exemplo `Zymble/rushclippy-site` (separado do repo do app).
2. Suba o conteúdo desta pasta: `CLAUDE.md`, `docs/`, `brand/`, `COMECE-AQUI.md`.
3. Conecte o repo na Vercel (Import Project). Cada PR ganha um link de preview que abre no celular.
4. Registre o domínio `rushclippy.com` (e, se der, `.com.br` e `.gg` para proteger a marca).

## 2. Primeira conversa com o Claude Code (pelo celular)
Abra o Claude Code apontando para o repo e mande:

> Leia CLAUDE.md e todos os arquivos de docs/. Execute a Fase 0 do ROADMAP. Comece em plan mode e me mostre o plano em até 15 linhas antes de implementar.

Depois, uma fase por vez, usando os prompts que já estão em `docs/ROADMAP.md`.

## 3. Ritmo que funciona no celular
- **Uma fase por conversa.** Ao terminar, abra o preview, comente e faça o merge.
- Para ajustar algo: "No preview da home, o hero está apertado em 360px. Corrija só isso no mesmo PR."
- Se ele perguntar algo, responda curto: "ok, segue com o padrão".
- Decisão importante tomada? Peça: "registre isso em docs/DECISIONS.md".

## 4. O que depende de você
- Contas: GitHub, Vercel, Resend (e-mail), Cloudflare (Turnstile), Plausible.
- Os valores de preço dos planos.
- A revisão dos textos jurídicos por um advogado.
- Depoimentos e logos **reais**, com autorização, quando existirem.
