import React from 'react'

import { Button, Card, Text, ShowMore, Image } from '../components'
import colors from '../theme/colors'

const Item = props => {
  return (
    <Card>
      <Image />
      <Text type="h1" color={colors.dark}>
        {props.name}
      </Text>
      <Button>Ver detalhes</Button>
      <Text type="h1" color={colors.primary}>
        R$ {props.priceSpecification.price}0
      </Text>
      <Text type="h5" color={colors.grey}>
        cod: {props.sku}
      </Text>
    </Card>
  )
}

export default Item
