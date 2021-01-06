import React from 'react'
import PropTypes from 'prop-types'
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

ProductDetailsScreen.propTypes = {
  route: PropTypes.object.isRequired
}

export default ProductDetailsScreen
