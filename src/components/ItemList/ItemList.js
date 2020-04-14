import React from 'react'
import { View } from 'react-native'
import currency from 'currency.js'

import { Button, Card, Text, ShowMore, Image } from '../../components'
import colors from '../../theme/colors'

const ItemList = props => {
  const sanitizePrice = price => {
    return currency(price).format()
  }

  return (
    <Card>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Image
            style={{
              width: 108,
              height: 108
            }}
            source={{ uri: props.imageObjects[0].small }}
          />

          <Text type="h5" color={colors.grey}>
            cod: {props.sku}
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'space-around'
          }}
        >
          <Text type="h5" color={colors.dark}>
            {props.name}
          </Text>

          <Text type="h1" color={colors.primary}>
            R$ {sanitizePrice(props.priceSpecification.price)}
          </Text>

          <Button>Ver detalhes</Button>
        </View>
      </View>
    </Card>
  )
}

export default ItemList
