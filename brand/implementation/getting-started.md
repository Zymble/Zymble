# Integração no front-end

1. Conserve as pastas tokens, components e fonts lado a lado. Importe tokens/variables.css antes de components/components.css na folha global de Astro ou Svelte. Copie logo e os arquivos de campanha necessários para a pasta pública da sua aplicação. O protótipo depende apenas de arquivos locais.
2. Aplique class="cr-ui" no body ou no contêiner raiz. Um documento sem atributo data-theme acompanha a preferência do sistema. Fixe data-theme="light" ou data-theme="dark" no html para escolha explícita. Em SSR, se a preferência for persistida, aplique o tema inicial antes da primeira pintura. O ícone favicon.svg contém seu próprio fundo. Para a assinatura horizontal, alterne o arquivo junto com o tema.
3. Em componentes, referencie --cr-text, --cr-surface, --cr-selected e os demais papéis. Para analytics, habilite tabular-nums. A linha decorativa usa --cr-rule. Campos que dependem de contorno usam --cr-edge.
4. O JSON segue a sintaxe DTCG 2025.10 com tipos, grupos, aliases e objetos sRGB. Os dois modos são grupos nomeados em theme. Rodar python3 tokens/build.py recria o CSS e o tema Tailwind a partir do JSON.

## Tailwind CSS v4

Em um projeto já configurado para Tailwind, use a seguinte ordem na folha de entrada, ajustando caminhos. As cores semânticas usam @theme inline. Breakpoints são valores concretos em rem. Exemplo de classes: bg-cr-surface text-cr-text rounded-cr-panel p-cr-s24. Para duração use duration-[var(--cr-duration-base)].

```css
@import "tailwindcss";
@import "./tokens/variables.css";
@import "./tokens/tailwind-theme.css";
@import "./components/components.css";
```

## Astro e Svelte

Veja ClipImport.astro e ClipImport.svelte desta pasta. Os dois exemplos usam a mesma marcação e CSS, mantêm validação HTML nativa e uma URL de ação configurável. Passe um endpoint da sua aplicação que aceite POST com o campo url. Os exemplos são para projetos existentes; o protótipo visual abre offline sem instalar dependências.

## Navegação e dados

Abra mockups/index.html e use o menu Studio ou os links de campanha. Dados e preços são ilustrativos. Login usa credenciais de exemplo somente leitura. Arquivos escolhidos e links digitados ficam no dispositivo. O processamento de demonstração usa um clipe local de 18 segundos. As preferências e cortes permanecem em memória durante a sessão. Agendamentos simulam a confirmação, sem chamar APIs externas.

[Formato DTCG](https://www.designtokens.org/tr/2025.10/format/) · [Tailwind theme variables](https://tailwindcss.com/docs/theme)
