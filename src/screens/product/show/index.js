import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Screen, Header, ContainerBox } from 'components';
import { getImageUriFromObject } from 'utils/product';

import styles from './styles';
import Description from './components/Description';
import BuyButton from './components/BuyButton';
import LetMeKnowForm from './components/LetMeKnowForm';
import Price from './components/Price';
import ShowContentButton from './components/ShowContentButton';

@inject('ProductStore')
@observer
class ShowProduct extends Component {
  state = {
    showContent: false
  };

  componentWillMount() {
    this.getProduct();
  }

  isAvailableToBuy = inventory => {
    return inventory.quantity > 0;
  };

  showContentToggle = () => {
    this.setState(state => {
      return {
        showContent: !state.showContent
      };
    });
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
    const { showContent } = this.state;
    return (
      <Screen>
        <Header title="LISTA DE PRODUTOS" goBack />
        <View style={styles.wrapProduct}>
          <ContainerBox scrollEnabled={showContent}>
            <View style={styles.containerProduct}>
              <Text style={styles.name}>{product.name} </Text>
              <Image
                source={{
                  uri: getImageUriFromObject(product.imageObjects, 'large')
                }}
                style={styles.image}
              />
              <View style={styles.containerPriceAndBrand}>
                <View style={styles.containerPriceAndBrandLeft}>
                  <Price priceSpecification={product.priceSpecification} />
                </View>
                <View style={styles.containerPriceAndBrandRight}>
                  <Text style={styles.name}>{product.brand.name} </Text>
                  <Text style={styles.cod}>cod: {product.sku}</Text>
                </View>
              </View>
              <View style={styles.containerActionButton}>
                {this.isAvailableToBuy(product.inventory) ? (
                  <BuyButton />
                ) : (
                  <LetMeKnowForm />
                )}
              </View>
              <Description description={product.details.description} />
            </View>
            <ShowContentButton
              onPress={this.showContentToggle}
              showContent={showContent}
            />
          </ContainerBox>
        </View>
      </Screen>
    );
  }
}

export default ShowProduct;
