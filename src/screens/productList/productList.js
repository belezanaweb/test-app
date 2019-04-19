import React, { Component } from 'react';
import { ProductListView } from './productList-view';
import { ProductContainer } from '../../components/product/container/container-view';
import { defaultTitle, defaultUrl } from '../../utils/globalVariables';

const exempleListArray = [
  {
    discount: 'R$ 600,00',
    price: 'R$ 549,00',
    title: defaultTitle,
    type: true,
    url: defaultUrl,
  }, {
    discount: 'R$ 600,00',
    price: 'R$ 549,00',
    title: defaultTitle,
    type: false,
    url: defaultUrl,
  },
];

const renderList = () => {
  const jsx = [];
  let i = 0;

  for (const item of exempleListArray) {
    jsx.push(
      <ProductContainer
        key={i}
        type={item.type}
        discount={item.discount}
        price={item.price}
        title={item.title}
        url={item.url}
        view={false}
      />,
    );
    i++;
  }

  return jsx;
};

export class ProductList extends Component {
  render() {
    return (
      <ProductListView>
        {renderList()}
      </ProductListView>
    );
  }
}

export default ProductList;
