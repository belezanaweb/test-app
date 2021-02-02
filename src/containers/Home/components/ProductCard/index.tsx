import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { moderateScale } from 'react-native-size-matters';
import CommonButton from 'shared/components/CommonButton';
import { COMMON_BUTTON_TYPES } from 'shared/components/CommonButton/styles';
import CommonText from 'shared/components/CommonText';
import { COMMON_TEXT_TYPES } from 'shared/components/CommonText/styles';
import theme from 'shared/styles/theme';
import Product from 'shared/types/Product';
import { HomeNavigationProp } from 'shared/types/Router';
import { getFeaturedImage, getFormatedCurrency } from 'utils';
import appLabels from 'utils/appLabels';
import {
  DescriptionPriceWrapper,
  LeftContainer,
  ProductCardCode,
  ProductCardContainer,
  RightContainer,
} from './styles';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const productImage = getFeaturedImage(product.imageObjects);
  const maxPrice = getFormatedCurrency(product.priceSpecification.maxPrice);
  const price = getFormatedCurrency(product.priceSpecification.price);
  const hasPriceDifference = price < maxPrice;
  const navigation = useNavigation<HomeNavigationProp>();

  console.log('product.sku', product.sku);

  function handleBtnMoreProductDetails() {
    navigation.push('ProductDetail', { sku: product.sku });
  }

  const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,

      elevation: 4,
    },
    image: {
      height: moderateScale(theme.dimensions.image.small.height),
      width: moderateScale(theme.dimensions.image.small.width),
    },
  });

  return (
    <ProductCardContainer style={styles.shadow}>
      <LeftContainer>
        <FastImage
          style={styles.image}
          source={{
            uri: productImage,
            headers: { Authorization: '0123456789' },
            priority: 'low',
          }}
        />
        <ProductCardCode>
          <CommonText textType={COMMON_TEXT_TYPES.SMOOTH}>
            {`${appLabels.homeScreen.labelProductCod} ${product.sku}`}
          </CommonText>
        </ProductCardCode>
      </LeftContainer>
      <RightContainer>
        <CommonText textType={COMMON_TEXT_TYPES.NORMAL}>
          {product.name}
        </CommonText>
        <DescriptionPriceWrapper>
          {hasPriceDifference && (
            <CommonText textType={COMMON_TEXT_TYPES.DASHED}>
              {maxPrice}
            </CommonText>
          )}
          <CommonText textType={COMMON_TEXT_TYPES.PRIMARY}>{price}</CommonText>
        </DescriptionPriceWrapper>
        <CommonButton
          text={appLabels.homeScreen.btnSeeMoreProductDetails}
          type={COMMON_BUTTON_TYPES.NORMAL}
          onPress={handleBtnMoreProductDetails}
        />
      </RightContainer>
    </ProductCardContainer>
  );
};

export default memo(ProductCard);
