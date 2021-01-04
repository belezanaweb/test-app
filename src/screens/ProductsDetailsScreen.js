import React from 'react'
import styled from 'styled-components'
import ProductDetails from '../components/ProductDetails'

const ProductDetailsScreen = ({ route }) => {
  const { productSku } = route.params
  return (
    <FlexSafeAreaView>
      <ListHeader>Detalhes do produto</ListHeader>
      <ProductDetails productSku={productSku} />
    </FlexSafeAreaView>
  )
}

const FlexSafeAreaView = styled.SafeAreaView`
  flex: 1;
`

const ListHeader = styled.Text`
  font-family: Roboto;
  margin: 8px 0 9px 0;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
`

export default ProductDetailsScreen
