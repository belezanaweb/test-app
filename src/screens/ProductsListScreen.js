import React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'
import ProductList from '../components/ProductList'

const ProductListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ListHeader>Lista de Produtos</ListHeader>
      <ProductList
        itemsPerRequest={10}
        onButtonPress={productSku => navigation.navigate('ProductDetails', productSku)}
      />
    </SafeAreaView>
  )
}

const ListHeader = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
`

export default ProductListScreen
