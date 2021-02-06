import React, { memo, useMemo } from 'react';
import FastImage from 'react-native-fast-image';
import { moderateScale } from 'react-native-size-matters';
import CommonText from 'shared/components/CommonText';
import { COMMON_TEXT_TYPES } from 'shared/components/CommonText/styles';
import theme from 'shared/styles/theme';
import Product from 'shared/types/Product';
import { getFeaturedImage, getFormatedCurrency, getFormatedPrice } from 'utils';
import appLabels from 'utils/appLabels';
import { FirstLineOverview, ImageWrapper, SecondtLineOverview } from './styles';

type ProductOverViewProps = {
  product: Product;
};

const ProductOverview: React.FC<ProductOverViewProps> = ({ product }) => {
  const productImage = useMemo(
    () =>
      getFeaturedImage({
        imageObjects: product.imageObjects,
        size: 'large',
      }),
    [product.imageObjects],
  );

  const imageDimensions = useMemo(() => {
    return {
      height: moderateScale(theme.dimensions.image.large.height),
      width: moderateScale(theme.dimensions.image.large.width),
    };
  }, []);

  const {
    numberOfPayments,
    monthlyPayment,
  } = product.priceSpecification.installments;

  const { maxPrice, price, hasPriceDifference } = useMemo(
    () => getFormatedPrice(product.priceSpecification),
    [product.priceSpecification],
  );
  return (
    <>
      <CommonText textType={COMMON_TEXT_TYPES.TITLE}>{product.name}</CommonText>
      <ImageWrapper>
        <FastImage style={imageDimensions} source={{ uri: productImage }} />
      </ImageWrapper>
      {hasPriceDifference && (
        <CommonText textType={COMMON_TEXT_TYPES.DASHED}>{maxPrice}</CommonText>
      )}
      <FirstLineOverview>
        <CommonText textType={COMMON_TEXT_TYPES.PRICE}>{price}</CommonText>
        <CommonText textType={COMMON_TEXT_TYPES.TITLE}>
          {product.brand.name}
        </CommonText>
      </FirstLineOverview>
      <SecondtLineOverview>
        <CommonText textType={COMMON_TEXT_TYPES.CONTRAST}>
          {`${numberOfPayments}${
            appLabels.productDetail.labelNumberOfInstallments
          }${getFormatedCurrency(monthlyPayment)}`}
        </CommonText>
        <CommonText textType={COMMON_TEXT_TYPES.SMOOTH}>
          {`${appLabels.homeScreen.labelProductCod} ${product.sku}`}
        </CommonText>
      </SecondtLineOverview>
    </>
  );
};

export default memo(ProductOverview);
