import React from 'react'

import { Button, Card, Text, Image } from '../../components'
import colors from '../../theme/colors'
import { Content, ContentImage, ContentDetails } from './styles'
import sanitizePrice from '../../helpers/sanitizePrice'

const ItemList = props => {
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

          <Button
            onPress={() =>
              props.navigation.navigate('Details', {
                sku: props.sku,
                index: props.index,
              })
            }
          >
            Ver detalhes
          </Button>
        </ContentDetails>
      </Content>
    </Card>
  )
}

export default ItemList
