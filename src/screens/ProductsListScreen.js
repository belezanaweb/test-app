import React from 'react'
import styled from 'styled-components'
import ProductList from '../components/ProductList'

const ProductListScreen = ({ navigation }) => {
  return (
    <FlexSafeAreaView>
      <ListHeader>Lista de Produtos</ListHeader>
      <ProductList
        itemsPerRequest={10}
        onButtonPress={productSku => navigation.navigate('ProductDetails', productSku)}
      />
    </FlexSafeAreaView>
  )
}

const FlexSafeAreaView = styled.SafeAreaView`
  flex: 1;
`

const ListHeader = styled.Text`
  margin: 8px 0 9px 0;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
`

export default ProductListScreen
