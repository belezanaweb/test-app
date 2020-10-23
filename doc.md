# O que foi feito

Para fazer o fetch da api foi usado o axios pela sua facilidade de lidar com chamadas assíncronas, no projeto não tinha muita necessidade de gerenciar os estados pois o fluxo eram duas telas, então daria para usar apenas o params do navigation, porém usei o Context do react para armazenar as informações e utilizá-las em eventuais necessidades, em relação à estilização utilizei o styled-components que em minha opinião é a melhor lib para se trabalhar com CSS pela sua facilidade de conseguir lidar bem com as props e também por deixar o código muito organizado, todos os components foram feitos sem utilizar lib pensando em deixar o app mais escalável e também com menos dependências de libs.

# Rodando o projeto

No terminal digite:

- yarn
- cd ios && pod install
- yarn test
- yarn ios ou yarn android
