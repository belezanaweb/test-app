import React from 'react'
import PropTypes from 'prop-types'
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

ProductListScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default ProductListScreen
