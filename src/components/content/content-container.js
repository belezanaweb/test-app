import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Header } from '../header/header-view';
import { ProductList } from '../../screens/productList/productList-view';
import { ProductContainer } from '../product/container/container-view';
import { ProductDetails } from '../../screens/productDetails/productDetails-view';
import store from '../../redux/store';

const renderList = (item) => {
  const jsx = [];
  let i = 0;

  for (const element of item) {
    jsx.push(
      <ProductContainer key={i} view={false} element={element} />,
    );
    i++;
  }

  // getProductsFromApi();

  return (
    <View>
      {jsx}
    </View>
  );
};

const getProductsFromApi = () => {
  /*
    o endpoint está bloqueado na máquina da empresa
  */
  axios.get('https://pacific-wave-51314.herokuapp.com/products?page=1&size=1')
    .then((response) => {
      alert(`response : ${response}`);
    }).catch((error) => {
      alert(`error : ${error}`);
    });
};

export class Content extends Component {
  render() {
    const { item, list } = this.props;

    return (
      <ScrollView>
        {(item.title)
          ? <ProductDetails item={item} />
          : <ProductList>{renderList(list)}</ProductList>}
        <Header
          type
          text={item
            ? 'Detalhes do Produto'
            : 'Lista de Produtos'}
        />
      </ScrollView>
    );
  }
}

Content.propTypes = {
  item: PropTypes
    .shape({})
    .isRequired,
  list: PropTypes
    .arrayOf(PropTypes.shape({}))
    .isRequired,
};

export const mapStateToProps = ({ item, list }) => ({ item, list });

export default connect(mapStateToProps)(Content);
