import React from 'react'
import currency from 'currency.js'

import { Button, Card, Text, Image } from '../../components'
import colors from '../../theme/colors'
import { Content, ContentImage, ContentDetails } from './styles'

const ItemList = props => {
  const sanitizePrice = price => {
    return currency(price).format()
  }

  return (
    <Card>
      <Content>
        <ContentImage>
          <Image source={{ uri: props.imageObjects[0].small }} />

          <Text type="h5" color={colors.grey}>
            cod: {props.sku}
          </Text>
        </ContentImage>
        <ContentDetails>
          <Text type="h5" color={colors.dark}>
            {props.name}
          </Text>

          <Text type="h1" color={colors.primary}>
            R$ {sanitizePrice(props.priceSpecification.price)}
          </Text>

          <Button>Ver detalhes</Button>
        </ContentDetails>
      </Content>
    </Card>
  )
}

export default ItemList
