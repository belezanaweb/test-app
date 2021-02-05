import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ScrollView, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import HTML from 'react-native-render-html';
import { moderateScale } from 'react-native-size-matters';
import CommonButton from 'shared/components/CommonButton';
import { COMMON_BUTTON_TYPES } from 'shared/components/CommonButton/styles';
import CommonText from 'shared/components/CommonText';
import { COMMON_TEXT_TYPES } from 'shared/components/CommonText/styles';
import theme from 'shared/styles/theme';
import Product from 'shared/types/Product';
import {
  getFeaturedImage,
  getFontWeight,
  getFormatedCurrency,
  getFormatedPrice,
} from 'utils';
import appLabels from 'utils/appLabels';
import AccordionButton from '../AccordionButton';
import {
  ButtonBuyWrapper,
  FirstLineOverview,
  ImageWrapper,
  SecondtLineOverview,
  StyledScrollView,
} from './styles';

type ProductViewProps = {
  product: Product;
};

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [descriptionYAxisOffset, setDescriptionYAxisOffset] = useState(0);
  const productViewRef = useRef<ScrollView>(null);

  const handleAccordionPress = useCallback(() => {
    setIsAccordionOpen(wasAccordionEnabled => !wasAccordionEnabled);
  }, []);

  useEffect(() => {
    productViewRef.current?.scrollTo({
      y: isAccordionOpen ? descriptionYAxisOffset : 0,
      animated: true,
    });
  }, [descriptionYAxisOffset, isAccordionOpen]);

  const imageDimensions = useMemo(() => {
    return {
      height: moderateScale(theme.dimensions.image.large.height),
      width: moderateScale(theme.dimensions.image.large.width),
    };
  }, []);

  const productImage = useMemo(
    () =>
      getFeaturedImage({
        imageObjects: product.imageObjects,
        size: 'large',
      }),
    [product.imageObjects],
  );

  const {
    numberOfPayments,
    monthlyPayment,
  } = product.priceSpecification.installments;

  const { maxPrice, price, hasPriceDifference } = useMemo(
    () => getFormatedPrice(product.priceSpecification),
    [product.priceSpecification],
  );

  const hasInventory = product.inventory.quantity;
  console.log('hasInventory', hasInventory);
  console.log('product.inventory.quantity', product.inventory.quantity);
  console.log('product.sku', product.sku);

  return (
    <>
      <StyledScrollView
        ref={productViewRef}
        bounces={isAccordionOpen}
        persistentScrollbar={true}
        scrollEnabled={isAccordionOpen}
        showsVerticalScrollIndicator={isAccordionOpen}
        // onLayout={({ nativeEvent }) =>
        //   console.log('ScrollView height', nativeEvent.layout.height)
        // }
      >
        <CommonText textType={COMMON_TEXT_TYPES.TITLE}>
          {product.name}
        </CommonText>
        <ImageWrapper>
          <FastImage style={imageDimensions} source={{ uri: productImage }} />
        </ImageWrapper>
        {hasPriceDifference && (
          <CommonText textType={COMMON_TEXT_TYPES.DASHED}>
            {maxPrice}
          </CommonText>
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

        <ButtonBuyWrapper>
          <CommonButton
            delayPressIn={50}
            type={
              hasInventory
                ? COMMON_BUTTON_TYPES.NORMAL
                : COMMON_BUTTON_TYPES.OUTLINE
            }
            text={
              hasInventory
                ? appLabels.productDetail.btnBuy
                : appLabels.productDetail.btnNotify
            }
          />
        </ButtonBuyWrapper>
        <View
          onLayout={({ nativeEvent }) =>
            setDescriptionYAxisOffset(nativeEvent.layout.y)
          }>
          <CommonText textType={COMMON_TEXT_TYPES.SUBTITLE}>
            {appLabels.productDetail.labelProductDescription}
          </CommonText>
        </View>
        <HTML
          source={{
            html: product.details.description,
          }}
          // NonRegisteredStylesProp
          // eslint-disable-next-line react-native/no-inline-styles
          baseFontStyle={{
            fontFamily: getFontWeight({ weight: 'normal' }),
            fontWeight: '400',
          }}
        />
      </StyledScrollView>
      <AccordionButton
        onOpenAccordion={handleAccordionPress}
        isAccordionOpen={isAccordionOpen}
      />
    </>
  );
};

export default ProductView;
