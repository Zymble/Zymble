# Localization — CX por mercado

Cada idioma é escrito para o seu público, não traduzido palavra por palavra. A fonte da verdade de tom é `brand/strategy/brand-voice.md`.

| Locale | Mercado | Tom | Notas |
|---|---|---|---|
| `en` | Estados Unidos (padrão, x-default) | Direto, energético, frases curtas | Ortografia americana (color, favorite). Datas `Nov 19, 2026`, hora `7:00 PM`. |
| `pt-br` | Brasil | Próximo, "você", vocabulário de criador | Hora `19h`, datas `19 de nov. de 2026`, moeda `R$`. |
| `es` | Hispanohablantes (a definir: LatAm neutro ou Espanha) | "Tú", claro e neutro | Até a decisão, evitar regionalismos. Revisão nativa obrigatória (`TODO review`). |

## Glossário

| Conceito | en | pt-br | es (neutro) |
|---|---|---|---|
| Stream ao vivo | stream, livestream | live | stream, directo |
| VOD | VOD | VOD / gravação da live | VOD |
| Corte curto | clip | corte | clip |
| Ponto de entrada/saída | In / Out | In / Out (início / fim) | In / Out (inicio / fin) |
| Legenda | captions | legendas | subtítulos |
| Lista de espera | early access list | lista de acesso antecipado | lista de acceso anticipado |
| Agendar | schedule | agendar | programar |

## Regras
- A tagline **"Your stream. Your cut."** fica em inglês em todos os idiomas (marca), com a explicação no idioma local.
- Botões: verbo + objeto, no máximo 3 palavras no header (`Early access` / `Acesso antecipado` / `Acceso anticipado`).
- Mensagens de erro explicam a recuperação ("Confira o e-mail e tente de novo").
- Nada de promessa de viralizar ou número sem fonte, em nenhum idioma.
- Toda string nova entra nos 3 idiomas no mesmo PR.
