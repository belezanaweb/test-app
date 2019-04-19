import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components/header/header-view';
import { Button } from '../../components/button/button-view';
import { Container } from '../../components/container/container.view';

export class ProductListView extends Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <Header type text="Lista de Produtos" />
        { children }
        <Button type={false} text="Carregar mais produtos" />
      </Container>
    );
  }
}

ProductListView.propTypes = {
  children: PropTypes.PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ProductListView;
