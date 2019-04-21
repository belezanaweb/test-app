import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Button } from '../../components/button/button-view';
import { Container } from '../../components/container/container-view';

export class ProductList extends Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        { children }
        <TouchableOpacity onPress={() => {
        }}
        >
          <Button type={false} text="Carregar mais produtos" />
        </TouchableOpacity>
      </Container>
    );
  }
}

ProductList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ProductList;
