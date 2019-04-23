import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Header } from '../header/header-view';
import { ProductList } from '../../screens/productList/productList-view';
import { ProductContainer } from '../product/container/container-view';
import { ProductDetails } from '../../screens/productDetails/productDetails-view';
import { Button } from '../button/button-view';
import store from '../../redux/store';

const renderList = (item, limit) => {
  const jsx = [];
  let i = 0;

  for (const element of item) {
    if (i < limit) {
      jsx.push(
        <ProductContainer key={i} view={false} element={element} />,
      );
    }
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

const loadingMore = (bool, func, limit) => {
  if (!bool && limit < 9) {
    return (
      <TouchableOpacity
        style={{ padding: 10, paddingTop: 0 }}
        onPress={() => {
          func();
        }}
      >
        <Button type={false} text="Carregar mais produtos" />
      </TouchableOpacity>
    );
  }
};

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      limit: 3,
    });
    this.setLimit = this.setLimit.bind(this);
  }

  setLimit() {
    const { limit } = this.state;
    this.setState({
      limit: (limit + 3),
    });
  }

  render() {
    const { item, list } = this.props;
    const { limit } = this.state;

    return (
      <ScrollView>
        {(item.title)
          ? <ProductDetails item={item} />
          : <ProductList>{renderList(list, limit)}</ProductList>}
        { loadingMore(item.title, this.setLimit, limit) }
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
