import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Touchable from 'react-native-touchable-safe';
import { ThemeColors, ThemeStyles } from '../theme/Theme';
// @ts-ignore
import Image from 'react-native-image-placeholder';

const PicturePlaceholder = require('../assets/img/picture-placeholder.png');

const ProductListItem = (props: any) => {
  const { product, onPress, showButton, buttonLabel, hideBg } = props;

  product.picture = product.picture ? product.picture : {};
  const picture = product.picture.medium || product.picture.large;

  return (
    <View style={[styles.product, hideBg ? styles.hideBg : null]} testID='ProductItem'>
      <View style={styles.productLeftSide}>
        <Image
          style={styles.productPicture}
          loadingStyle={{ size: 'large', color: ThemeColors.primary }}
          source={!!picture ? { uri: picture } : PicturePlaceholder}
          placeholderSource={PicturePlaceholder}
          customImagePlaceholderDefaultStyle={styles.productPlaceholderPicture}
        />

        <Text style={styles.productSKU} numberOfLines={1}>cod: { product.sku }</Text>
      </View>

      <View style={styles.productRightSide}>
        <Text style={styles.productName} numberOfLines={3} testID='ProductName'>{ product.name }</Text>

        <View style={[styles.productPriceContainer, !showButton ? { marginTop: 20 } : null]}>
          { !!product.maxPrice &&
            <Text style={styles.productMaxPrice} numberOfLines={1}>{ product.maxPrice }</Text>
          }

          <Text style={styles.productPrice} numberOfLines={1}>{ product.price }</Text>
        </View>

        { !!showButton &&
          <Touchable onPress={() => onPress(product)} testID='ViewProduct'>
            <View style={ThemeStyles.solidButton.container}>
              <Text style={ThemeStyles.solidButton.text}>{ buttonLabel }</Text>
            </View>
          </Touchable>
        }
      </View>
    </View>
  )
}

ProductListItem.defaultProps = {
  product: {},
  onPress: /* istanbul ignore next */ () => {},
  showButton: true,
  buttonLabel: 'View Product',
  hideBg: false,
}

const styles = StyleSheet.create({
  product: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 12,
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    overflow: 'hidden',
  },
  productPlaceholderPicture: {
    width: 80,
    height: 80,
    backgroundColor: '#fff'
  },
  productLeftSide: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productPicture: {
    width: 100,
    height: 100,
  },
  productSKU: {
    color: ThemeColors.lightGray,
    justifyContent: 'center',
    marginTop: 10,
  },
  productRightSide: {
    flex: 4,
    marginLeft: 14,
    maxWidth: '100%',
  },
  productName: {
    color: '#000',
    fontSize: 14,
    marginLeft: 1,
  },
  productPriceContainer: {
    marginTop: 6,
  },
  productMaxPrice: {
    color: ThemeColors.mediumGray,
    fontSize: 13,
    marginTop: 2,
    textDecorationLine: 'line-through',
  },
  productPrice: {
    color: ThemeColors.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  hideBg: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
  }
});

export default ProductListItem;
