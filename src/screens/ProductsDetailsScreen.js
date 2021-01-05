import React from 'react'
import ProductDetails from '../components/ProductDetails'
import Header from '../components/Header'

const ProductDetailsScreen = ({ route }) => {
  const { productSku } = route.params
  return (
    <>
      <Header>Detalhes do produto</Header>
      <ProductDetails productSku={productSku} />
    </>
  )
}

export default ProductDetailsScreen
