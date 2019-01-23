import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Screen, EmptyList, Button } from 'components';
import ProductItem from '../components/item';
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

  loadMore = () => {
    this.props.ProductStore.getNextPage();
  };

  getListOfProducts = () => {
    this.props.ProductStore.getFreshListOfProducts();
  };

  render() {
    const { products, loading, pagination } = this.props.ProductStore;

    return (
      <Screen
        header={{
          title: 'LISTA DE PRODUTOS'
        }}
      >
        <View style={styles.container}>
          <View style={styles.list}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={products}
              keyExtractor={item => item.sku}
              renderItem={({ item }) => {
                return (
                  <ProductItem product={item} onPress={this.handlePressItem} />
                );
              }}
              // onEndReached={this.loadMore}
              // onEndReachedThreshold={0.5}
              ListEmptyComponent={
                !loading ? (
                  <EmptyList message="Nenhum produto encontrado! :(" />
                ) : null
              }
              ListFooterComponent={
                <View style={styles.footer}>
                  <Button
                    clean
                    bordered
                    text="CARREGAR MAIS PRODUTOS"
                    onPress={this.loadMore}
                    loading={loading}
                    disabled={pagination.noMore}
                  />
                </View>
              }
            />
          </View>
        </View>
      </Screen>
    );
  }
}

export default ProductList;
