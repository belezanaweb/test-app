import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../components/container/container-view';
import { ProductContainer } from '../../components/product/container/container-view';

export class ProductDetails extends Component {
  render() {
    const { item } = this.props;

    return (
      <Container>
        <ProductContainer
          key={1}
          element={item}
          view
        />
      </Container>
    );
  }
}

ProductDetails.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string,
    discount: PropTypes.string,
    installments: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.bool,
    url: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
