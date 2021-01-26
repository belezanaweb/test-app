import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import CommonButton from 'shared/components/CommonButton';
import { COMMON_BUTTON_TYPES } from 'shared/components/CommonButton/styles';
import CommonText from 'shared/components/CommonText';
import { COMMON_TEXT_TYPES } from 'shared/components/CommonText/styles';
import { getFeaturedImage, getFormatedCurrency } from 'utils';
import appLabels from 'utils/appLabels';
import Product from 'utils/types/Product';
import {
  DescriptionPriceWrapper,
  LeftContainer,
  ProductCardCode,
  ProductCardContainer,
  ProductCardImage,
  RightContainer,
} from './styles';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigation = useNavigation();
  const productImage = getFeaturedImage(product.imageObjects);
  const maxPrice = getFormatedCurrency(product.priceSpecification.maxPrice);
  const price = getFormatedCurrency(product.priceSpecification.price);
  const hasPriceDifference = price < maxPrice;

  function handleBtnMoreProductDetails() {
    navigation.navigate('ProductDetail', {
      sku: product.sku,
    });
  }

  const shadowStyle = StyleSheet.create({
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
  });

  return (
    <ProductCardContainer style={shadowStyle.shadow}>
      <LeftContainer>
        <ProductCardImage source={{ uri: productImage }} resizeMode={'cover'} />
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

export default ProductCard;
