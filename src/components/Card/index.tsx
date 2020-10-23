import React from 'react'
import { View } from 'react-native'
import Button from '../Button'
import * as S from './styles'
import { formatCurrencyReal } from '../../util/currency'

import { Product } from '../../pages/ProductList/interface'

interface CardInterface {
  data: Product
  testID?: string
  isLoading?: boolean
  onPress: (params: any) => void
}

const Card = ({ data, testID, onPress, isLoading }: CardInterface) => {
  const hasPromotion = !!data.priceSpecification.discount
  return (
    <S.Container>
      <S.ContainerImage>
        <S.Image
          testID={`${testID} image`}
          source={{ uri: data.image?.imageUrl }}
        />
        <S.CodeProduct>{`cod: ${data.sku}`}</S.CodeProduct>
      </S.ContainerImage>
      <S.ContainerInformations>
        <S.Description testID={`${testID} description`}>
          {data.name}
        </S.Description>
        <View>
          {hasPromotion && (
            <S.Discount>
              {formatCurrencyReal(data.priceSpecification.maxPrice)}
            </S.Discount>
          )}
          <S.Price testID={`${testID} price`}>
            {hasPromotion
              ? formatCurrencyReal(data.priceSpecification.originalPrice)
              : formatCurrencyReal(data.priceSpecification.maxPrice)}
          </S.Price>
        </View>
        <Button
          isLoading={isLoading}
          onPress={() => onPress(data)}
          testID="detail button"
        >
          Ver detalhes
        </Button>
      </S.ContainerInformations>
    </S.Container>
  )
}

export default React.memo(Card)
