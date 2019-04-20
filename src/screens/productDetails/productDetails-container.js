
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductDetailsView } from './productDetails-view';

export class ProductDetails extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { item } = this.props;

    return (
      <ProductDetailsView item={item} />
    );
  }
}

ProductDetailsView.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string,
    discount: PropTypes.string,
    installments: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.bool,
    url: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
