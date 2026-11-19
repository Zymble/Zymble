# Especificações de componentes · ClipyRush 1.0

A base visual está em components.css. Os contratos abaixo orientam a implementação de produto. O protótipo demonstra interações locais de referência.

## 01. Buttons

**Uso e anatomia.** Primário para a ação de maior compromisso da seção. Secundário para voltar ou pré-visualizar.

**Estados.** Repouso, hover, active, focus-visible, busy e disabled. Manter a largura ao mostrar progresso.

**Interação e acessibilidade.** Usar button para ação e a para navegação. Enter/Espaço no botão. Durante envio, bloquear submissões duplicadas e anunciar o resultado.

**Recuperação e contexto.** Se falhar, habilitar a ação de novo e preservar dados. Exemplo: Save this cut.

## 02. Inputs

**Uso e anatomia.** Rótulo persistente acima, dica e erro junto ao campo.

**Estados.** Vazio, preenchido, foco, inválido, somente leitura e desabilitado.

**Interação e acessibilidade.** Associar label/for, usar aria-describedby e aria-invalid. No erro após envio, focar o primeiro campo inválido.

**Recuperação e contexto.** Manter o valor digitado. Exemplo: tempo de entrada em segundos inteiros.

## 03. Selects

**Uso e anatomia.** Escolha única entre destinos, idiomas e fusos.

**Estados.** Inicial, escolhido, foco, inválido e desabilitado.

**Interação e acessibilidade.** Preferir select nativo, com rótulo e opção atual. Setas, digitação inicial e leitor de tela usam o comportamento do navegador.

**Recuperação e contexto.** Se um destino perder conexão, identificá-lo e pedir nova escolha antes de agendar.

## 04. Modals

**Uso e anatomia.** Confirmar uma operação com impacto, por exemplo agendar uma publicação.

**Estados.** Fechado, aberto, confirmando, erro.

**Interação e acessibilidade.** Usar dialog.showModal(), título acessível, Escape para sair, foco inicial na ação de recuo e retorno ao acionador.

**Recuperação e contexto.** Manter o diálogo aberto no erro. Mostrar canal, fuso e horário antes de confirmar.

## 05. Navigation

**Uso e anatomia.** Links de marketing e navegação entre áreas.

**Estados.** Padrão, hover, foco e página atual.

**Interação e acessibilidade.** Link real, nome estável, aria-current=page e atalho para o conteúdo. Em mudança de rota, atualizar title e mover foco ao h1.

**Recuperação e contexto.** Em uma rota ausente, oferecer retorno ao início.

## 06. Sidebar

**Uso e anatomia.** Visão geral, importação, fila, biblioteca, editor, agenda, analytics e configurações.

**Estados.** Item normal, atual, foco. Em telas estreitas, navegação horizontal rolável.

**Interação e acessibilidade.** Usar nav com nome. Manter ordem de tabulação coerente. Item ativo com borda e peso além da cor.

**Recuperação e contexto.** Foco deve trazer o item ativo para a área visível em uma lista rolável.

## 07. Cards

**Uso e anatomia.** Agrupar uma unidade de conteúdo, com título, imagem ou métrica e ação identificada.

**Estados.** Informativo, acionável, foco no link.

**Interação e acessibilidade.** Usar título de nível apropriado. Um link com nome completo é suficiente. Evitar controles interativos aninhados.

**Recuperação e contexto.** Sem imagem: preservar título, timecode e ação do corte.

## 08. Tables

**Uso e anatomia.** Comparar fontes, estados e métricas. Timecodes e números usam algarismos tabulares.

**Estados.** Carregando, com dados, vazia, erro e coluna ordenada quando aplicável.

**Interação e acessibilidade.** table/thead/th com scope, caption quando o contexto não identifica a tabela. Ordenação em botão com aria-sort no cabeçalho.

**Recuperação e contexto.** Em tela pequena, rolagem horizontal local. Preservar cabeçalhos e oferecer tentativa de recarga.

## 09. Tabs

**Uso e anatomia.** Alternar ferramentas do mesmo editor, como Trim e Caption.

**Estados.** Selecionada, inativa e foco visível.

**Interação e acessibilidade.** tablist/tab/tabpanel, aria-selected e aria-controls. Uma aba focável. Setas navegam. Home/End vão aos extremos.

**Recuperação e contexto.** Trocar abas preserva campos. Seleção automática só é adequada quando o painel abre sem latência perceptível.

## 10. Toasts

**Uso e anatomia.** Confirmar ações secundárias, como salvar as preferências.

**Estados.** Oculto, visível, dispensado.

**Interação e acessibilidade.** role=status para sucesso. Não roubar foco. Erros que exigem ação ficam no formulário; usar alert com parcimônia.

**Recuperação e contexto.** Mensagem transitória complementa o novo estado. Eventos críticos precisam de registro persistente.

## 11. Progress indicators

**Uso e anatomia.** Informar avanço mensurável ou identificar trabalho em curso.

**Estados.** Indeterminado, determinado, concluído, cancelado e erro.

**Interação e acessibilidade.** progress com nome; omitir value no modo indeterminado. Atualizar o status textual nas mudanças de etapa.

**Recuperação e contexto.** Dar nova tentativa quando justificável. Não fabricar percentuais nem estimativas de tempo.

## 12. Upload areas

**Uso e anatomia.** Entrada por arquivo, arrastar-e-soltar ou link de VOD.

**Estados.** Vazia, drag-over, selecionada, enviando, inválida, falha e pronta.

**Interação e acessibilidade.** Disponibilizar input file com rótulo e operação sem mouse. Validar tipo e origem no serviço real. Placares de progresso não dependem da cor.

**Recuperação e contexto.** Preservar alternativa válida, limpar erro na correção e informar o motivo quando um arquivo não for aceito.

## 13. Video players

**Uso e anatomia.** Prévia do material com controles e acesso ao tempo atual.

**Estados.** Poster, pronto, reproduzindo, pausado, buscando, finalizado e erro.

**Interação e acessibilidade.** Controls nativos; nomes nos controles personalizados. Legendas para fala e descrição ou equivalente quando o visual carrega informação. Sem autoplay com som.

**Recuperação e contexto.** Se reprodução falhar, manter controles de edição e informar a falha. O exemplo inclui estudo de movimento silencioso de 18 s.

## 14. Timeline editor

**Uso e anatomia.** Laranja delimita a seleção; cursor indica reprodução. Alças e campos numéricos são duas formas de editar.

**Estados.** Seleção válida, ajuste, foco, inválida, salvando e salva.

**Interação e acessibilidade.** Sempre oferecer edição sem arraste. Início ≥ 0, fim ≤ duração, início < fim. Nomes distintos para as alças. Informar duração em texto.

**Recuperação e contexto.** No ensaio, os campos aceitam segundos inteiros. Manter o corte anterior ao editar um intervalo inválido e bloquear salvar/reproduzir.

## 15. Clip preview

**Uso e anatomia.** Prévia com título, origem, timecode, duração e estado de revisão.

**Estados.** Sugerido, editado, aprovado e indisponível.

**Interação e acessibilidade.** Dar ao link um nome que identifique o corte. Usar legenda ou texto descritivo para material visual relevante.

**Recuperação e contexto.** Quando o poster falhar, o título continua acessível. Cada corte precisa manter sua própria edição.

## 16. AI processing status

**Uso e anatomia.** Comunicar leitura da origem, localização de trechos e preparação de legendas.

**Estados.** Na fila, em progresso, pronto, falha parcial e falha total.

**Interação e acessibilidade.** role=status anuncia transições de etapa. Disponibilizar local de retorno para a biblioteca e, no produto, persistir o trabalho no servidor.

**Recuperação e contexto.** Distinguir “pode revisar” de “publicado”. Tentar novamente deve reutilizar a origem e evitar duplicar os resultados já aceitos.

## 17. Dashboard analytics

**Uso e anatomia.** Mostrar período, métrica, unidade, comparação e rótulo direto.

**Estados.** Com dados, vazio, dado indisponível, carregando e erro.

**Interação e acessibilidade.** Expor o valor de cada barra em texto. Identificar séries também por padrão ou rótulo. Dar alternativa tabular para gráficos densos.

**Recuperação e contexto.** Exibir ausência real de dados separadamente de zero. Identificar dados ilustrativos no protótipo.

## 18. Subscription and pricing

**Uso e anatomia.** Exibir moeda, período, preço total cobrado e recursos incluídos no plano.

**Estados.** Mensal, anual, personalizado, selecionado e indisponível.

**Interação e acessibilidade.** Grupo nativo de radios com legenda para periodicidade. Nomear o plano em mudanças ou confirmação de cobrança.

**Recuperação e contexto.** No checkout real, confirmar moeda, impostos aplicáveis e próximo ciclo antes de autorizar. Os exemplos não efetuam cobrança.

## Referências

[Padrões WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/) · [WCAG 2.2](https://www.w3.org/TR/WCAG22/) · [Elemento dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
