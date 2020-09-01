/**
 * @author Vanderson de Moura Vauruk
 */

import React, { Fragment } from 'react'

import Styles, { Colors } from './Product.styles'
import ProductList from './ProductList'
const Product: () => React$Node = ({ navigation }) => {
  return (
    <>
      <ProductList navigation={navigation} />
    </>
  )
}

export default Product
