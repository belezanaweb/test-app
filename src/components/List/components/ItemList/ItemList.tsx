import React from 'react'

import { Button, Card, Image } from '../../..'
import * as S from './styles'
import { toMoney } from '../../../../utils/numberUtils'
import { Products } from '../../../../types/Products'

type Item = Pick<Products, 'name' | 'priceSpecification' | 'imageObjects' | 'sku'>

type Props = {
  item: Item,
  navigation: any,
  index: number
}

const ItemList = ({ item, navigation, index, ...props }: Props) => {
  const { sku, imageObjects, priceSpecification, name } = item
  const pageProductDetails = 'ProductDetails'

  const goMoreDetails = () => {
    navigation.navigate(pageProductDetails, {
      sku,
      index
    })
  }

  function renderImage(image) {
    const hasFeature = image.hasOwnProperty('featured')
    if (hasFeature) {
      return {
        uri: hasFeature.small
      }
    }
    return {
      uri: image[0].small
    }
  }

  function renderPriceOfProduct() {
    const maxPrice = priceSpecification?.maxPrice
    const price = priceSpecification?.price
    const hasProductDiscount = priceSpecification && maxPrice > price

    return (
      <S.ContentPrices>
        {hasProductDiscount ? (
          <>
            <S.TextPriceMax>R$ {toMoney(maxPrice)}</S.TextPriceMax>
            <S.TextPrice>R$ {toMoney(price)}</S.TextPrice>
          </>
        ) : (
          <S.TextPrice>R$ {toMoney(price)}</S.TextPrice>
        )}
      </S.ContentPrices>
    )
  }

  return (
    <Card>
      <S.Content>
        <S.ContentImage>
          <Image source={renderImage(imageObjects)} />
          <S.TextCod>cod: {sku}</S.TextCod>
        </S.ContentImage>
        <S.ContentDetails>
          <S.TextTitle>{name}</S.TextTitle>
          {renderPriceOfProduct()}
          <Button onPress={goMoreDetails}>Ver detalhes</Button>
        </S.ContentDetails>
      </S.Content>
    </Card>
  )
}

export default ItemList
