import React, { Component } from 'react';
import { ProductListView } from './productList-view';
import { ProductContainer } from '../../components/product/container/container-view';
import { itens } from '../../utils/globalVariables';

const renderList = (item) => {
  const jsx = [];
  let i = 0;

  for (const element of item) {
    jsx.push(
      <ProductContainer
        key={i}
        view={false}
        element={element}
      />,
    );
    i++;
  }

  return jsx;
};

export class ProductList extends Component {
  render() {
    const item = itens;

    return (
      <ProductListView>
        {renderList(item)}
      </ProductListView>
    );
  }
}

export default ProductList;
