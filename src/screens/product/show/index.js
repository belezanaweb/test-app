import React, { Component } from 'react';
import { Image, View, ActivityIndicator, Text, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Screen } from 'components';
import { getImageUriFromObject } from 'utils/product';
import { formatCurrency } from 'utils';
import styles from './styles';
import Description from './components/Description';
import BuyButton from './components/BuyButton';
import LetMeKnowForm from './components/LetMeKnowForm';

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
  handleScroll = (width, height) => {
    this.refs.product.scrollTo({ y: height, animation: true });
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
    this.props.ProductStore.getProduct('46851');
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
        <ScrollView ref="product" onContentSizeChange={this.handleScroll}>
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
                {product.priceSpecification.discount > 0 ? (
                  <Text style={styles.maxPrice}>
                    {formatCurrency(product.priceSpecification.maxPrice)}
                  </Text>
                ) : null}
                <Text style={styles.price}>
                  {formatCurrency(product.priceSpecification.price)}
                </Text>
                <Text style={styles.installments}>
                  {`${
                    product.priceSpecification.installments.numberOfPayments
                  } x de `}
                  {formatCurrency(
                    product.priceSpecification.installments.monthlyPayment
                  )}
                </Text>
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
              <Description
                title="DESCRIÇÃO DO PRODUTO"
                buttonText="Continuar Lendo"
                text={product.details.description}
              />
            </View>
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

export default ShowProduct;
