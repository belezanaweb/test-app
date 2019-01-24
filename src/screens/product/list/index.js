import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Screen, EmptyList, Button, Header } from 'components';
import ProductItem from './components/item';
import styles from './styles';

@inject('ProductStore')
@observer
class ProductList extends Component {
  componentWillMount() {
    this.getListOfProducts();
  }

  handlePressItem = product => {
    this.props.navigation.navigate('ShowProduct', { product: product });
  };

  loadMoreProducts = () => {
    this.props.ProductStore.getNextPage();
  };

  getListOfProducts = () => {
    this.props.ProductStore.getFreshListOfProducts();
  };

  render() {
    const { products, loading, pagination } = this.props.ProductStore;

    return (
      <Screen>
        <Header title="LISTA DE PRODUTOS" />
        <View style={styles.containerList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={item => item.sku}
            renderItem={({ item }) => {
              return (
                <ProductItem product={item} onPress={this.handlePressItem} />
              );
            }}
            ListEmptyComponent={
              !loading ? (
                <EmptyList message="Nenhum produto encontrado! :(" />
              ) : null
            }
            ListFooterComponent={
              <View style={styles.footerList}>
                <Button
                  clean
                  bordered
                  text="CARREGAR MAIS PRODUTOS"
                  onPress={this.loadMoreProducts}
                  loading={loading}
                  disabled={pagination.noMore}
                />
              </View>
            }
          />
        </View>
      </Screen>
    );
  }
}

export default ProductList;
