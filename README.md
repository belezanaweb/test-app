# Mobile Test

Olá! Antes de tudo, acho melhor começarmos matando a curiosidade. Aqui vai uma amostra rápida (bem rápida) de como ficou o App:

<p align="center">
  <img  title="IOS" src="https://i.imgur.com/DkSZBpC.gif">
  <img  title="Android" src="https://i.imgur.com/UwYH5KN.gif">
</p>

# Nota

## Antes de começar, gostaria de fazer alguns "disclaimers".

Fiz esse App no meu horário alternativo, normalmente a noite e de madrugada, devido ao meu trabalho atual. É importante dizer isso pois pode ser que eu tenha deixado passar algo. Caso veja alguma variavel com um padrão diferente, algum comentário perdido, algo que poderia ter sido componentizado, ou até mesmo erros de gramática, peço que por favor, reconsidere. Creio que se encontrar, será pontual.

# Tarefas

Vamos lá, alguns itens são "visiveis", outros não. Irei colocar um gif daquilo que for visivel abaixo dos itens, item por item:

1. Consumindo o endpoint `https://pacific-wave-51314.herokuapp.com/products?page=<page_num>&size=<page_size>`, faça uma tela mostrando a lista de produtos retornada

- A lista deve suportar paginação

<p align="center">
  <img  title="IOS" src="https://i.imgur.com/prkQsVC.gif">
  <img  title="Android" src="https://i.imgur.com/GuNi66b.gif">
</p>

- As páginas devem ser carregadas apenas quando forem ser exibidas para o usuário
- A imagem exibida deve vir do `imageObjects` com `featured: true`
- Extra: para melhorar a performance, é possível descarregar da memória os itens que já passaram e não são mais exibidos na tela?

  > A prop `windowSize`, responsável por essa liberação de memória, foi commitada com o valor 5, para ser um misto entre atraso visual e performance. Existe uma explicação melhor no componente [`src/containers/Home`](./src/containers/Home). No gif abaixo, utilizei o valor 1 para ficar claramente visível:

<p align="center">
  <img  title="IOS" src="https://i.imgur.com/DIb93RP.gif">
  <img  title="Android" src="https://i.imgur.com/AHMPmFq.gif">
</p>

2. Ao clicar em um produto, o app deve consumir o endpoint `https://pacific-wave-51314.herokuapp.com/products/<product_sku>` para exibir a tela de produto

<p align="center">
  <img  title="IOS" src="https://i.imgur.com/TuLqhYu.gif">
  <img  title="Android" src="https://i.imgur.com/AMOTgia.gif">
</p>

- Caso o payload do produto tenha payload `inventory.quantity > 0`, deve ser exibido o botão de adicionar ao carrinho; caso contrário, deve ser exibido o botão de "AVISE-ME"

  > Notei que no App, não recebi nenhum produto com inventario 0, então forcei um apenas no gif, para mostrar que o estado existe:

<p align="center">
  <img  title="IOS" src="https://i.imgur.com/YkevrPi.gif">
  <img  title="Android" src="https://i.imgur.com/AKAZ9U6.gif">
</p>

- Ao clicar em "COMPRE", deve ser exibida uma modal de confirmação de adição à sacola

<p align="center">
  <img  title="IOS" src="https://i.imgur.com/WaCNzZ6.gif">
  <img  title="Android" src="https://i.imgur.com/JEqH5Yj.gif">
</p>

- Clicar em "AVISE-ME" abre uma modal para o usuário digitar seu nome e e-mail

  > Exibido nos gifs acima

- Os botões das modais apenas fecham elas
  > Exibido nos gifs acima
- Ao voltar para a lista de produtos, ela deve estar disponível para o usuário sem fazer uma nova requisição à API
  > Exibido nos gifs acima

# O que vamos avaliar

- Organização do código;

  Para componentes de tela, existem containers com componentes locais organizados da seguinte forma:

  ```
  \ContainerA
    |componentes
      \ComponenteA
        |index.tsx
        |styles.ts
      \ComponenteB
        |index.tsx
        |styles.ts
      /
    /
  |index.tsx
  ```

  Componentes globais, que estão em [`src/shared/components`](./src/shared/components), estão organizados da mesma forma que os componentes dos containers, porém globalmente para a aplicação:

  ```
  \ComponenteA
    |index.tsx
    |styles.ts
  \ComponenteB
    |index.tsx
    |styles.ts
  ```

- Mensagens (em inglês) e mudanças nos commits;
  > Oh yes my friend, let's talk about this application?
- Composição/reutilização de classes (DRY);
  > Informado acima.
- Testes unitários;

  > Execute `yarn jest`

    <p align="left">
      <img  title="IOS" src="https://i.imgur.com/UrKmQdo.gif">
    </p>

- O motivo de ter escolhido a arquitetura e cada tech da stack;
- Como rodar sua aplicação 😉
  - Na raiz do projeto:
  - 1° execute: `yarn`
  - 2° execute: `yarn pod-install`
  - 3° Para Android, execute: `yarn android-release`
  - 4° Para IOS, execute: `yarn IOS`

# Considerações IMPORTANTES

Como você pode notar, o aplicativo é responsivo, ou seja, 1 pixel não tem o mesmo valor em todos os telefones. Sabemos que a densidade de pixeis e a unidade de medida do layout mais adequada para cada plataforma é diferente, fora o fato de 1 pixel se comportar de formas diferentes em cada tela. Por isso, nesse app, uma lib muito importante foi utilizada para mitigar esse problema e tornar a aplicação responsiva (sim, a aplicação é compatível com tables, Ipads, celulares pequenos e grandes, landscape ou portrait). Para mais detalhes: [react-native-size-matters](https://github.com/nirsky/react-native-size-matters);

O app é totalmente parametrizavel através dos arquivos [`pt-BR.json`](./src/utils/appLabels/pt-BR.json) e [`theme.ts`](./src/shared/styles/theme.ts), podendo suportar internacionzação ou até mesmo um Dark Mode.

O app possui estados de erro nas duas telas, para lista vazia, problemas com o servidor, etc.

Eu provavelmente me esqueci de comentar algo por aqui, ja faz algumas noites que não durmo direito rs. Estou a disposição para conversarmos sobre esse camarada.

Espero que gostem do App! :D
