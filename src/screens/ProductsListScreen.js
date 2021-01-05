import React from 'react'
import ProductList from '../components/ProductList'
import Header from '../components/Header'

const ProductListScreen = ({ navigation }) => {
  return (
    <>
      <Header>Lista de Produtos</Header>
      <ProductList
        itemsPerRequest={3}
        onButtonPress={productSku => navigation.navigate('ProductDetails', { productSku })}
      />
    </>
  )
}

export default ProductListScreen
