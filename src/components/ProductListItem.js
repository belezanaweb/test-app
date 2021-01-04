import React from 'react'
import styled from 'styled-components/native'
import formatCurrency from '../utils/formatCurrency'
import Button from './Button'

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

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 145px;
  padding: 5px;
  margin-top: ${props => (props.isFirstItem ? '0' : '10px')};
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

const LeftContent = styled.View`
  width: 122px;
  justify-content: space-between;
`

const RightContent = styled.View`
  flex: 2;
  justify-content: space-between;
`

const ProductCode = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #c4c4c4;
`

const ProductName = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #212121;
`

const ProductCostContainer = styled.View``

const ProductPreviousCost = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-decoration-line: line-through;
  color: #999999;
`

const ProductCurrentCost = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #e66100;
`

const ProductImage = styled.Image`
  height: 108px;
  width: 108px;
`

export default ProductListItem
