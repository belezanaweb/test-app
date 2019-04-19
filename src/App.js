/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ProductList } from './screens/productList/productList';
import { ProductDetails } from './screens/productDetails/productDetails-container';

export default class App extends Component {
  render() {
    return (
      <ProductDetails />
    );
  }
}
