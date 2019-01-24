<<<<<<< HEAD
# test-app beleza na web

## Install
``` bash
# Clone the repository
$ git clone https://github.com/alexrili/test-app

# Go into the repository
$ cd test-app

# Install dependencies
$ npm install or yarn
```
After install all dependencies, just run the command below
``` bash
# For IOS devices
$ react-native run-ios

# For Android devices
$ react-native devices
```

## IphoneX -12.1 IOS Simulator | ScreenShots
![simulator screen shot - iphone x - 2019-01-24 at 06 08 54](https://user-images.githubusercontent.com/1238430/51664676-18eea700-1fa1-11e9-8af5-c4f6f76a0c52.jpg)
![simulator screen shot - iphone x - 2019-01-24 at 06 04 00](https://user-images.githubusercontent.com/1238430/51664673-18eea700-1fa1-11e9-99fa-404d3c074488.jpg)
![simulator screen shot - iphone x - 2019-01-24 at 06 04 22](https://user-images.githubusercontent.com/1238430/51664674-18eea700-1fa1-11e9-8bfb-0168759d10a0.jpg)
![simulator screen shot - iphone x - 2019-01-24 at 06 05 08](https://user-images.githubusercontent.com/1238430/51664675-18eea700-1fa1-11e9-9f93-a5eb5da5a091.jpg)
=======
# Mobile Test

Esta é uma avaliação básica de código.

O objetivo é conhecer um pouco a forma como você resolveria problemas com que lidamos no dia-a-dia e a sua habilidade/experiência em criar e organizar um projeto de app multi-plataforma.

Recomendamos que você não gaste mais do que 4 - 6 horas.

Fique à vontade para nos enviar qualquer sugestão ou dúvida que surja durante o projeto.

Faça um fork deste repositório e crie seus projetos nas pastas `ios` e `android`.

# Tarefas

O teste consiste em duas telas: uma lista de produtos e a página do produto.

O nosso time de produto preparou esse [layout](https://www.figma.com/file/Dbpn1mqdq2d350NEXojF2v/test-mobile?node-id=392%3A0) para o projeto. A implementação deve ser Pixel perfect.

1. Consumindo o endpoint `https://pacific-wave-51314.herokuapp.com/products?page=<page_num>&size=<page_size>`, faça uma tela mostrando a lista de produtos retornada
  * A lista deve suportar paginação
  * As páginas devem ser carregadas apenas quando forem ser exibidas para o usuário
  * A imagem exibida deve vir do `imageObjects` com `featured: true`
  * Extra: para melhorar a performance, é possível descarregar da memória os itens que já passaram e não são mais exibidos na tela?
2. Ao clicar em um produto, o app deve consumir o endpoint `https://pacific-wave-51314.herokuapp.com/products/<product_sku>` para exibir a tela de produto
  * Caso o payload do produto tenha payload `inventory.quantity > 0`, deve ser exibido o botão de adicionar ao carrinho; caso contrário, deve ser exibido o botão de "AVISE-ME"
  * Ao clicar em "COMPRE", deve ser exibida uma modal de confirmação de adição à sacola
  * Clicar em "AVISE-ME" abre uma modal para o usuário digitar seu nome e e-mail
  * Os botões das modais apenas fecham elas
  * Ao voltar para a lista de produtos, ela deve estar disponível para o usuário sem fazer uma nova requisição à API

# O que vamos avaliar

* Organização do código;
* Mensagens (em inglês) e mudanças nos commits;
* Composição/reutilização de classes (DRY);
* Testes unitários;
* O motivo de ter escolhido a arquitetura e cada tech da stack;
* Como rodar sua aplicação 😉

# Como enviar

Ao finalizar o teste, submeta um pull request para o repositório que nosso time será notificado. Se tiver alguma observação, escreva no pull request.
>>>>>>> 558c387197a38dd8275b6415cac6e37a9344e9ec
