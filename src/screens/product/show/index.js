import React, { Component } from 'react';
import { Image, View, ActivityIndicator, Text, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Screen } from 'components';
import { getImageUriFromObject } from 'utils/product';

import styles from './styles';
import Description from './components/Description';
import BuyButton from './components/BuyButton';
import LetMeKnowForm from './components/LetMeKnowForm';
import Price from './components/Price';

@inject('ProductStore')
@observer
class ShowProduct extends Component {
  componentWillMount() {
    this.getProduct();
  }

  handlePressItem = product => {
    this.props.navigation.navigate('ShowProduct', { product: product });
  };

  loadMore = () => {
    this.props.ProductStore.getNextPage();
  };
  isEnableToBuy = product => {
    return product.inventory.quantity > 0;
  };

  getProduct = () => {
    const product = this.props.navigation.getParam('product');
    if (product) {
      this.props.ProductStore.setProduct(product);
      return;
    }
    const sku = this.props.navigation.getParam('sku');
    this.props.ProductStore.getProduct(sku);
  };

  render() {
    const { product, loading } = this.props.ProductStore;

    return (
      <Screen
        header={{
          title: 'DETALHES DO PRODUTO',
          goBack: true
        }}
      >
        {loading ? <ActivityIndicator /> : null}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.top}>
              <Text style={styles.name}>{product.name} </Text>
              <View style={styles.containerImage}>
                <Image
                  source={{
                    uri: getImageUriFromObject(product.imageObjects, 'large')
                  }}
                  style={styles.image}
                />
              </View>
            </View>
            <View style={styles.containerMiddle}>
              <View style={styles.containerMiddleLeft}>
                <Price priceSpecification={product.priceSpecification} />
              </View>
              <View style={styles.containerMiddleRight}>
                <Text style={styles.name}>{product.brand.name} </Text>
                <Text style={styles.cod}>cod: {product.sku}</Text>
              </View>
            </View>
            <View style={styles.button}>
              {this.isEnableToBuy(product) ? <BuyButton /> : <LetMeKnowForm />}
            </View>
            <View style={styles.description}>
              <Description description={product.details.description} />
            </View>
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

export default ShowProduct;
