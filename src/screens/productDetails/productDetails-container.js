
import React, { Component } from 'react';
import { ProductDetailsView } from './productDetails-view';
import { defaultTitle, defaultUrl, defaultDescription } from '../../utils/globalVariables';

export class ProductDetails extends Component {
  render() {
    const item = {
      description: defaultDescription,
      discount: 'R$ 600,00',
      installments: '10x de 54,90',
      name: 'Good Girl',
      price: 'R$ 549,00',
      stock: true,
      title: defaultTitle,
      type: true,
      url: defaultUrl,
    };

    return (
      <ProductDetailsView item={item} />
    );
  }
}

export default ProductDetails;
