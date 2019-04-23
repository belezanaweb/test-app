import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../components/container/container-view';

export class ProductList extends Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        { children }
      </Container>
    );
  }
}

ProductList.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProductList;
