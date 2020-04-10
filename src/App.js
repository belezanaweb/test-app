import React from 'react'

import Provider from './theme/Provider'
import { Button, Card, Text, ShowMore } from './components'
import colors from './theme/colors'

const App: () => React$Node = () => {
  return (
    <Provider>
      <Card>
        <Text type="h1" color={colors.dark}>
          Modern Princess Lanvin Eau de Parfum – Perfume Feminino 90ml
        </Text>
        <Button>Comprar</Button>
        <Button secundary>Ver Detalhes</Button>
        <Text type="h4" color={colors.grey} line>
          R$ 449,00
        </Text>
        <Text type="h1" color={colors.primary}>
          R$ 310,90
        </Text>
        <Text type="h2" color={colors.dark}>
          Lanvin
        </Text>
        <Text type="h3" color={colors.darkOpacity}>
          6x de R$ 51,82
        </Text>
        <Text type="h5" color={colors.grey}>
          cod: 41625
        </Text>
        <Card>
          <ShowMore>
            Perfume feminino floral frutal. Modern Princess Lanvin é a revelação do novo conceito de
            princesa, uma mulher moderna e livre. A declaração da mulher dos dias de hoje.
          </ShowMore>
        </Card>
      </Card>
    </Provider>
  )
}

export default App
