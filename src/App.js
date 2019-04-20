/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ProductList } from './screens/productList/productList';
import { ProductDetails } from './screens/productDetails/productDetails-container';
import { Header } from './components/header/header-view';
import { itens } from './utils/globalVariables';

export const product = itens[0];

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        { (product !== false) ? <ProductList /> : <ProductDetails item={product} /> }
        <Header type text={product ? 'Detalhes do Produto' : 'Lista de Produtos'} />
      </ScrollView>
    );
  }
}
