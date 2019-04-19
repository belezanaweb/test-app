import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Header } from '../../components/header/header-view';
import { Container } from '../../components/container/container.view';
import { ProductContainer } from '../../components/product/container/container-view';

export class ProductDetailsView extends Component {
  render() {
    const { item } = this.props;

    return (
      <Container>
        <Header type text="Detalhes do Produto" />
        <ScrollView>
          <ProductContainer
            key={1}
            type={false}
            description={item.description}
            discount={item.discount}
            installments={item.installments}
            name={item.name}
            price={item.price}
            stock={item.stock}
            title={item.title}
            url={item.url}
            view
          />
        </ScrollView>
      </Container>
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

export default ProductDetailsView;
