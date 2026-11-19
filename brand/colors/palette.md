# Cor e acessibilidade

Laranja #FF6B00 é a cor institucional. O azul-noite #101828 sustenta a interface e a assinatura principal. O branco suave #F8FAFC oferece a base clara. Ciano #22D3EE é reservado ao foco, playhead e informação no escuro. No tema claro, #006675 cumpre o mesmo papel. Usar #A84000 para links ou linhas finas de seleção sobre superfícies claras. O azul-noite sobre laranja mede 6,22:1. Branco sobre o mesmo laranja mede 2,86:1.

**Semântica.** Para usar o laranja vivo no botão, aplicar texto e contorno com os tokens on-action e action-edge. Usar o estado ativo também por forma, texto ou espessura. A borda rule separa conteúdo de forma decorativa; a borda edge identifica campos e controles. Gráficos usam rótulos, linha/padrão ou valores além da cor. Alertas e badges associam texto e ícone.

**Critérios.** Texto normal ≥ 4,5:1. Texto grande ≥ 3:1 (24 CSS px regular ou aproximadamente 18,67 CSS px em negrito). Informação gráfica essencial e limites necessários ≥ 3:1 em relação à cor adjacente. Foco com 3 px de contorno e 3 px de afastamento. Os controles desabilitados têm exceção normativa; mantivemos a meta voluntária de leitura. Valores sRGB opacos. Verificação por par e papel; revalidar se houver transparência, imagem ou composição diferente.

| Tema | Uso | Tokens | Cores | Razão | Meta |
|---|---|---|---|---:|---:|
| light | Texto principal | text / bg | #101828 / #F8FAFC | 16,96:1 | 4,50:1 |
| light | Texto em painel | text / surface | #101828 / #FFFFFF | 17,75:1 | 4,50:1 |
| light | Texto complementar | muted / bg | #536178 / #F8FAFC | 5,99:1 | 4,50:1 |
| light | Legenda | muted / surface | #536178 / #FFFFFF | 6,27:1 | 4,50:1 |
| light | Legenda elevada | muted / raised | #536178 / #EDF1F5 | 5,52:1 | 4,50:1 |
| light | Link | link / bg | #A84000 / #F8FAFC | 5,91:1 | 4,50:1 |
| light | CTA normal | on-action / action | #101828 / #FF6B00 | 6,22:1 | 4,50:1 |
| light | CTA hover | on-action / action-hover | #101828 / #FF8533 | 7,31:1 | 4,50:1 |
| light | CTA active | on-action / action-active | #101828 / #E65E00 | 5,04:1 | 4,50:1 |
| light | Limite do CTA normal | action-edge / surface | #101828 / #FFFFFF | 17,75:1 | 3,00:1 |
| light | Foco no canvas | focus / bg | #006675 / #F8FAFC | 6,36:1 | 3,00:1 |
| light | Foco na superfície | focus / surface | #006675 / #FFFFFF | 6,65:1 | 3,00:1 |
| light | Foco na área elevada | focus / raised | #006675 / #EDF1F5 | 5,86:1 | 3,00:1 |
| light | Contorno do controle | edge / bg | #69768B / #F8FAFC | 4,40:1 | 3,00:1 |
| light | Contorno de input | edge / surface | #69768B / #FFFFFF | 4,60:1 | 3,00:1 |
| light | Contorno elevado | edge / raised | #69768B / #EDF1F5 | 4,05:1 | 3,00:1 |
| light | Cursor | playhead / raised | #006675 / #EDF1F5 | 5,86:1 | 3,00:1 |
| light | Alças e intervalo | selected / raised | #A84000 / #EDF1F5 | 5,44:1 | 3,00:1 |
| light | Série principal | chart-main / surface | #A84000 / #FFFFFF | 6,18:1 | 3,00:1 |
| light | Série secundária | chart-compare / surface | #006675 / #FFFFFF | 6,65:1 | 3,00:1 |
| light | Leitura de controle inativo | disabled-text / disabled-bg | #536178 / #EDF1F5 | 5,52:1 | 4,50:1 |
| light | success em bg | success / bg | #186343 / #F8FAFC | 6,91:1 | 4,50:1 |
| light | success em surface | success / surface | #186343 / #FFFFFF | 7,23:1 | 4,50:1 |
| light | success em raised | success / raised | #186343 / #EDF1F5 | 6,37:1 | 4,50:1 |
| light | warning em bg | warning / bg | #755100 / #F8FAFC | 6,84:1 | 4,50:1 |
| light | warning em surface | warning / surface | #755100 / #FFFFFF | 7,16:1 | 4,50:1 |
| light | warning em raised | warning / raised | #755100 / #EDF1F5 | 6,31:1 | 4,50:1 |
| light | error em bg | error / bg | #A12639 / #F8FAFC | 7,04:1 | 4,50:1 |
| light | error em surface | error / surface | #A12639 / #FFFFFF | 7,36:1 | 4,50:1 |
| light | error em raised | error / raised | #A12639 / #EDF1F5 | 6,49:1 | 4,50:1 |
| light | info em bg | info / bg | #006675 / #F8FAFC | 6,36:1 | 4,50:1 |
| light | info em surface | info / surface | #006675 / #FFFFFF | 6,65:1 | 4,50:1 |
| light | info em raised | info / raised | #006675 / #EDF1F5 | 5,86:1 | 4,50:1 |
| dark | Texto principal | text / bg | #F8FAFC / #0B1220 | 17,89:1 | 4,50:1 |
| dark | Texto em painel | text / surface | #F8FAFC / #101828 | 16,96:1 | 4,50:1 |
| dark | Texto complementar | muted / bg | #B8C3D4 / #0B1220 | 10,52:1 | 4,50:1 |
| dark | Legenda | muted / surface | #B8C3D4 / #101828 | 9,97:1 | 4,50:1 |
| dark | Legenda elevada | muted / raised | #B8C3D4 / #1B2739 | 8,45:1 | 4,50:1 |
| dark | Link | link / bg | #FF8533 / #0B1220 | 7,72:1 | 4,50:1 |
| dark | CTA normal | on-action / action | #101828 / #FF6B00 | 6,22:1 | 4,50:1 |
| dark | CTA hover | on-action / action-hover | #101828 / #FF8533 | 7,31:1 | 4,50:1 |
| dark | CTA active | on-action / action-active | #101828 / #E65E00 | 5,04:1 | 4,50:1 |
| dark | Limite do CTA normal | action-edge / surface | #FF6B00 / #101828 | 6,22:1 | 3,00:1 |
| dark | Foco no canvas | focus / bg | #22D3EE / #0B1220 | 10,36:1 | 3,00:1 |
| dark | Foco na superfície | focus / surface | #22D3EE / #101828 | 9,82:1 | 3,00:1 |
| dark | Foco na área elevada | focus / raised | #22D3EE / #1B2739 | 8,32:1 | 3,00:1 |
| dark | Contorno do controle | edge / bg | #8493A8 / #0B1220 | 5,99:1 | 3,00:1 |
| dark | Contorno de input | edge / surface | #8493A8 / #101828 | 5,68:1 | 3,00:1 |
| dark | Contorno elevado | edge / raised | #8493A8 / #1B2739 | 4,81:1 | 3,00:1 |
| dark | Cursor | playhead / raised | #22D3EE / #1B2739 | 8,32:1 | 3,00:1 |
| dark | Alças e intervalo | selected / raised | #FF6B00 / #1B2739 | 5,27:1 | 3,00:1 |
| dark | Série principal | chart-main / surface | #FF6B00 / #101828 | 6,22:1 | 3,00:1 |
| dark | Série secundária | chart-compare / surface | #22D3EE / #101828 | 9,82:1 | 3,00:1 |
| dark | Leitura de controle inativo | disabled-text / disabled-bg | #B8C3D4 / #1B2739 | 8,45:1 | 4,50:1 |
| dark | success em bg | success / bg | #73D6A2 / #0B1220 | 10,58:1 | 4,50:1 |
| dark | success em surface | success / surface | #73D6A2 / #101828 | 10,03:1 | 4,50:1 |
| dark | success em raised | success / raised | #73D6A2 / #1B2739 | 8,50:1 | 4,50:1 |
| dark | warning em bg | warning / bg | #F0C269 / #0B1220 | 11,26:1 | 4,50:1 |
| dark | warning em surface | warning / surface | #F0C269 / #101828 | 10,67:1 | 4,50:1 |
| dark | warning em raised | warning / raised | #F0C269 / #1B2739 | 9,04:1 | 4,50:1 |
| dark | error em bg | error / bg | #FF9DAA / #0B1220 | 9,50:1 | 4,50:1 |
| dark | error em surface | error / surface | #FF9DAA / #101828 | 9,00:1 | 4,50:1 |
| dark | error em raised | error / raised | #FF9DAA / #1B2739 | 7,63:1 | 4,50:1 |
| dark | info em bg | info / bg | #22D3EE / #0B1220 | 10,36:1 | 4,50:1 |
| dark | info em surface | info / surface | #22D3EE / #101828 | 9,82:1 | 4,50:1 |
| dark | info em raised | info / raised | #22D3EE / #1B2739 | 8,32:1 | 4,50:1 |

[WCAG 2.2](https://www.w3.org/TR/WCAG22/) · [Estudo internacional de cor](https://journals.sagepub.com/doi/10.1177/0956797620948810)
