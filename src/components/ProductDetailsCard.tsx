import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { ThemeColors, ThemeStyles } from '../theme/Theme';
import { systemWeights } from 'react-native-typography';
import Swiper from 'react-native-swiper';
import Touchable from 'react-native-touchable-safe';
import LinearGradient from 'react-native-linear-gradient';
import { stripHTMLTags } from '../helpers/Helpers';
// @ts-ignore
import Image from 'react-native-image-placeholder';

const BlankPlaceholder = require('../assets/img/blank-pixel.png');
const ArrowDown = require('../assets/img/arrow-down.png');
const deviceWidth = Dimensions.get('window').width;

const ProductDetailsCard = (props: any) => {
  const { product, onPress } = props;

  const [readMoreDescription, setReadMoreDescription] = useState(false);

  return (
    <View style={styles.container} testID='ProductCard'>
      <Text style={styles.title}>{ product.name }</Text>

      <View style={styles.galleryContainer}>
        <Swiper
          height={deviceWidth * .85}
          showsPagination={true}
          dotColor={ThemeColors.lightGray}
          dotStyle={styles.galleryDot}
          activeDotStyle={styles.galleryDot}
          activeDotColor={ThemeColors.primary}
          loop={false}
          autoplay={false}
          scrollEnabled={true}
          removeClippedSubviews={false}
        >
          {
            product.gallery.map((pic: any, i : number) => {
              const picture = pic.large || pic.medium;

              /* istanbul ignore else */
              if (picture) {
                return (
                  <Image
                    key={'img_' + i}
                    style={styles.picture}
                    loadingStyle={{ size: 'large', color: ThemeColors.primary }}
                    placeholderSource={BlankPlaceholder}
                    source={{ uri: picture }}
                    customImagePlaceholderDefaultStyle={styles.galleryPlaceholderStyle}
                  />
                )
              }
            })
          }
        </Swiper>
      </View>

      <View style={styles.priceBrandContainer}>
        <View>
          <Text style={styles.maxPrice}>{ product.maxPrice }</Text>
          <Text style={styles.price}>{ product.price }</Text>

          <Text style={styles.installments}>
            <Text>{ product.numberOfPayments }x de </Text>
            <Text>{ product.monthlyPayment }</Text>
          </Text>
        </View>

        <View>
          <Text style={styles.brand}>{ product.brand }</Text>
          <Text style={styles.sku}>cod: { product.sku }</Text>
        </View>
      </View>

      { product.inventory > 0 ?
          <Touchable onPress={() => onPress(product.inventory, product)} testID='BuyProduct'>
            <View style={ThemeStyles.solidButton.container}>
            <Text style={ThemeStyles.solidButton.text}>Compre</Text>
            </View>
          </Touchable>

        :
          <Touchable onPress={() => onPress(product.inventory, product)} testID='RememberMe'>
            <View style={ThemeStyles.outlinedButton.container}>
            <Text style={ThemeStyles.outlinedButton.text}>Avise-Me</Text>
            </View>
          </Touchable>
      }

      { product.description &&
        <>
          <View style={[styles.descriptionContainer, readMoreDescription ? null : { maxHeight: 135 }]}>
            <Text style={styles.descriptionHeading}>Descrição do Produto</Text>
            <Text style={styles.descriptionText}>{ stripHTMLTags(product.description) }</Text>

            { !readMoreDescription &&
              <LinearGradient
                colors={['transparent', 'rgba(255,255,255,1)']}
                start={{x: 0, y: .6}}
                end={{x: 0, y: 1}}
                style={styles.linearGradientContainer}
              />
            }
          </View>

          { !readMoreDescription &&
            <Touchable onPress={() => setReadMoreDescription(true)} testID='ReadMore'>
              <View style={styles.readMoreBtn}>
                <Text style={styles.readMoreText}>Continuar Lendo</Text>
                <Image source={ArrowDown} style={styles.readMoreArrow} />
              </View>
            </Touchable>
          }
        </>
      }
    </View>
  )
}

ProductDetailsCard.defaultProps = {
  product: {},
  onPress: /* istanbul ignore next */ () => {},
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    overflow: 'hidden',
  },
  galleryContainer: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryPlaceholderStyle: {
    width: deviceWidth,
    height: deviceWidth * .85,
    backgroundColor: '#fff',
  },
  galleryDot: {
    marginBottom: 0,
  },
  title: {
    fontSize: 22,
    color: ThemeColors.black,
    ...systemWeights.semibold,
  },
  priceBrandContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: ThemeColors.primary,
    fontSize: 26,
    fontWeight: 'bold',
  },
  maxPrice: {
    color: ThemeColors.lightGray,
    fontSize: 17,
    marginTop: 2,
    textDecorationLine: 'line-through',
  },
  installments: {
    color: ThemeColors.darkGray,
    fontSize: 17,
  },
  brand: {
    fontSize: 22,
    color: ThemeColors.black,
    ...systemWeights.semibold,
    marginTop: 32,
  },
  sku: {
    fontSize: 15,
    color: ThemeColors.lightGray,
    justifyContent: 'center',
    marginTop: 2,
  },
  picture: {
    width: deviceWidth * .7,
    height: deviceWidth * .7,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  descriptionContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  descriptionHeading: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 21,
    color: ThemeColors.black,
    ...systemWeights.semibold,
  },
  descriptionText: {
    fontSize: 15,
    color: ThemeColors.darkGray,
    lineHeight: 20,
  },
  readMoreBtn: {
    height: 50,
    marginTop: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  readMoreText: {
    color: ThemeColors.purple,
    fontSize: 16,
    ...systemWeights.semibold
  },
  readMoreArrow: {
    width: 40,
    height: 40,
  },
  linearGradientContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

export default ProductDetailsCard;
