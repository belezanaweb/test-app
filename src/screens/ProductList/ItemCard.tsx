import React from 'react'

import { PrimaryButton } from '~/components'
import BaseCard from '~/components/BaseCard'
import currencyFormat from '~/helpers/currencyFormat'
import { Container } from '~/styles/baseStyles'
import {
  CodText,
  DiscountPrice,
  ItemContainer,
  ProductDescription,
  ProductImage,
  ProductImageContainer,
  ProductPrice,
  ProductPriceContainer
} from './styles'

const ItemCard = ({ product }) => {
  const featuredImage = product.imageObjects.find(image => image.featured)
  return (
    <BaseCard>
      <ItemContainer>
        <ProductImageContainer>
          <ProductImage
            source={{
              uri: featuredImage ? featuredImage?.medium : product.imageObjects[0].medium
            }}
          />
          <CodText>{`cod: ${product?.priceSpecification?.sku}`}</CodText>
        </ProductImageContainer>
        <Container>
          <Container>
            <ProductDescription>{product.name}</ProductDescription>
            <ProductPriceContainer>
              {product.priceSpecification.originalPrice > product.priceSpecification.price && (
                <DiscountPrice>
                  {currencyFormat(product.priceSpecification.originalPrice)}
                </DiscountPrice>
              )}
              <ProductPrice>{currencyFormat(product.priceSpecification.price)}</ProductPrice>
            </ProductPriceContainer>
          </Container>
          <PrimaryButton text="ver detalhes" />
        </Container>
      </ItemContainer>
    </BaseCard>
  )
}

export default ItemCard
