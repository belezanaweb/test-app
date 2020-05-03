import React from 'react'

import { Button, Card, Text, Image } from '../../components'
import colors from '../../theme/colors'
import { Content, ContentImage, ContentDetails } from './styles'
import sanitizePrice from '../../helpers/sanitizePrice'

const ItemList = props => {
  const getImage = listImages => {
    const item = listImages.filter(_item => _item.featured)[0]
    if (item) {
      return {
        uri: item.small,
      }
    }
    return {
      uri: listImages[0].small,
    }
  }

  return (
    <Card>
      <Content>
        <ContentImage>
          <Image source={getImage(props.imageObjects)} />
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
