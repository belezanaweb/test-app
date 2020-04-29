import React from 'react'
import { ScrollView } from 'react-native'

import { Button, Card, Text, Image, ShowMore } from '../../components'
import colors from '../../theme/colors'
import { Content, ContentDetails, ContentImage } from './styles'
import sanitizePrice from '../../helpers/sanitizePrice'

const ItemList = props => {
  if (!props.priceSpecification) {
    return null
  }
  return (
    <ScrollView>
      <Card>
        <Content>
          <Text type="h2" color={colors.dark}>
            {props.name}
          </Text>
          <ContentImage>
            <Image large source={{ uri: props.imageObjects[0].extraLarge }} />
          </ContentImage>
          {props.priceSpecification.maxPrice !== props.priceSpecification.price && (
            <Text line type="h4" color={colors.grey}>
              {sanitizePrice(props.priceSpecification.maxPrice)}
            </Text>
          )}
          <Text type="h1" color={colors.primary}>
            {sanitizePrice(props.priceSpecification.price)}
          </Text>
          {props.priceSpecification.installments && (
            <Text type="h3" color={colors.darkOpacity}>
              {props.priceSpecification.installments.numberOfPayments}x{' '}
              {sanitizePrice(props.priceSpecification.installments.monthlyPayment)}
            </Text>
          )}
          {props.inventory.quantity > 0 ? (
            <Button onPress={() => {}}>comprar</Button>
          ) : (
            <Button secundary onPress={() => {}}>
              avise-me
            </Button>
          )}
          <ContentDetails>
            <Text type="h4">Descrição do Produto</Text>
            <ShowMore description={props.details.description} />
          </ContentDetails>
        </Content>
      </Card>
    </ScrollView>
  )
}

export default ItemList
