# Estrutura de diretórios

Este projeto foi configurado para a utlização de TypeScript e para obter a melhor organização possível do projeto `test_app` está contém os seguintes diretórios:
[`components`](./components):

> Onde estão os códigos referentes a componentes visuais. Vale destacar que os componentes estão organizados seguindo a metodologia Atomic Design

[`src/hooks`](./src/hooks).

> Neste diretório está presente o Hook customizado useBoticario. Seu uso é um exemplo prático de separação de responsabilidades. Neste projeto o useBoticario ficou responsável por controlar a requisição de novos produtos, paginação e cache.  
>  Em projetos maiores um Hook customizado pode ter mais responsabilidade, tais como processamento de dados para telas e implementação de regras de negócios em nível mobile.

> Vale ressaltar que neste diretório está presente o teste do Hook customizado. O teste foi simplificado e tem o propósito de ilustrar a viabilidade de reduzir a responsabilidade da tela com processamento de dados e delegar isso a um Hook customizado.

[`src/routes`](./src/routes).

> Neste diretório estão as configurações referente à navegação do aplicativo. Neste projeto foi utilizado a biblioteca `react-native-navigation` por ser uma biblioteca consolidada, com boa documentação e bom suporte a React Hooks.

[`src/screens`](./src/screens).

> Neste diretório estão as duas telas principais do projeto, a Home e a Detail.

[`src/services`](./src/services).

> Este é um dos diretórios fundamentais deste projeto. Nele estão os arquivos: (i)`boticario.service.js` - responsável por prover uma instância axios conectada ao domínio `pacific-wave-51314.herokuapp.com`, neste projeto o uso deste arquivo foi minimo, porém ele pode ser utilizado para fazer interceptações nas requisições e injetar informações a header, tais como Bearer Token, atributos customizados entre outros; (ii)`boticario.api.ts` - responsável por fazer o mapeamento de rotas utilizadas pelo projeto.

[`src/util`](./src/util).

> Neste diretório encontram-se as tipagens utilizadas no projeto.

# Dependências

`@react-navigation `: Bibliteca de Navegação
`axios`: Biblioteca de requisições http
`git-cz`: Biblioteca de apoio a commits
`react-native-dialog `: Biblioteca de modal Alert e Input

# Como executar o projeto

Ao baixar o projeto execute: `yarn install`, `cd ios/`, `pod install`, `cd ..`

> [ios]: `yarn ios` > [android]: `yarn android`
