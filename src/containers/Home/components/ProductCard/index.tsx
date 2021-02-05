import React, { memo, useMemo } from 'react';
import FastImage from 'react-native-fast-image';
import { moderateScale } from 'react-native-size-matters';
import CommonButton from 'shared/components/CommonButton';
import { COMMON_BUTTON_TYPES } from 'shared/components/CommonButton/styles';
import CommonText from 'shared/components/CommonText';
import { COMMON_TEXT_TYPES } from 'shared/components/CommonText/styles';
import { shadowStyle } from 'shared/styles';
import theme from 'shared/styles/theme';
import Product from 'shared/types/Product';
import { HomeNavigationProp } from 'shared/types/Router';
import { getFeaturedImage, getFormatedPrice } from 'utils';
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
  navigation: HomeNavigationProp;
};

const ProductCard: React.FC<ProductCardProps> = ({ navigation, product }) => {
  const productImage = useMemo(
    () =>
      getFeaturedImage({
        imageObjects: product.imageObjects,
        size: 'small',
      }),
    [product.imageObjects],
  );

  const productImageDimensions = useMemo(() => {
    return {
      height: moderateScale(theme.dimensions.image.small.height),
      width: moderateScale(theme.dimensions.image.small.width),
    };
  }, []);

  const { maxPrice, price, hasPriceDifference } = useMemo(
    () => getFormatedPrice(product.priceSpecification),
    [product.priceSpecification],
  );

  function handleBtnSeeMoreProductDetailsPress() {
    navigation.push('ProductDetail', { sku: product.sku });
  }

  return (
    <ProductCardContainer style={shadowStyle}>
      <LeftContainer>
        <FastImage
          style={productImageDimensions}
          source={{
            uri: productImage,
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
          onPress={handleBtnSeeMoreProductDetailsPress}
        />
      </RightContainer>
    </ProductCardContainer>
  );
};

export default memo(ProductCard);
