import React from 'react'
import formatCurrency from '../../utils/formatCurrency'
import Button from '../Button'
import {
  Container,
  ProductPreviousCost,
  ProductName,
  ProductImage,
  ProductCurrentCost,
  ProductCode,
  ProductCostContainer,
  LeftContent,
  RightContent
} from './ProductListItem.styles'

const ProductListItem = ({
  title,
  sku,
  image,
  currentPrice,
  previousPrice,
  onButtonPress,
  isFirstItem
}) => (
  <Container isFirstItem={isFirstItem}>
    <LeftContent>
      <ProductImage source={{ uri: image }} />
      <ProductCode>Cod: {sku}</ProductCode>
    </LeftContent>
    <RightContent>
      <ProductName>{title}</ProductName>
      <ProductCostContainer>
        {previousPrice > currentPrice && (
          <ProductPreviousCost>{formatCurrency(previousPrice)}</ProductPreviousCost>
        )}
        <ProductCurrentCost>{formatCurrency(currentPrice)}</ProductCurrentCost>
      </ProductCostContainer>
      <Button onPress={() => onButtonPress(sku)} primary>
        VER DETALHES
      </Button>
    </RightContent>
  </Container>
)

export default ProductListItem
