import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { LayoutRectangle, ScrollView, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import theme from 'shared/styles/theme';
import Product from 'utils/types/Product';
import AccordionButton from '../AccordionButton';
import BuyButton from '../BuyButton';
import ProductDescription from '../ProductDescription';
import ProductOverview from '../ProductOverview';
import { StyledScrollView } from './styles';

type ProductViewProps = {
  product: Product;
};

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [descriptionYAxisOffset, setDescriptionYAxisOffset] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [contentScrollViewHeight, setcontentScrollViewHeight] = useState(0);
  const [hasAccordion, setHasAccordion] = useState(false);
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

  useEffect(() => {
    scrollViewHeight &&
      contentScrollViewHeight &&
      contentScrollViewHeight > scrollViewHeight &&
      setHasAccordion(true);
  }, [contentScrollViewHeight, scrollViewHeight]);

  const hasInventory = !!product.inventory.quantity;

  const handleDescriptionLayout = useCallback(
    (event: { layout: LayoutRectangle }) => {
      setDescriptionYAxisOffset(event.layout.y);
    },
    [],
  );

  // I need use this offset because some descriptions don't have an corret HTML
  // to react-native-render-html component render. I think HTML sanitize
  // is not necessary for test, so I decided to add an offset avoid the cut at
  // the bottom of the description. In normal cases, it is totally unnecessary.
  const contentContainerStyle = {
    paddingBottom: moderateScale(theme.dimensions.scrollView.paddingOffSet),
  };

  return (
    <>
      <StyledScrollView
        ref={productViewRef}
        bounces={isAccordionOpen}
        scrollEnabled={isAccordionOpen}
        showsVerticalScrollIndicator={isAccordionOpen}
        removeClippedSubviews={true}
        onLayout={({ nativeEvent }) =>
          setScrollViewHeight(nativeEvent.layout.height)
        }
        contentContainerStyle={contentContainerStyle}>
        <View
          onLayout={({ nativeEvent }) =>
            setcontentScrollViewHeight(nativeEvent.layout.height)
          }>
          <ProductOverview product={product} />
          <BuyButton hasInventory={hasInventory} />
          <ProductDescription
            product={product}
            handleDescriptionLayout={handleDescriptionLayout}
          />
        </View>
      </StyledScrollView>
      {hasAccordion && (
        <AccordionButton
          isAccordionOpen={isAccordionOpen}
          onOpenAccordion={handleAccordionPress}
        />
      )}
    </>
  );
};

export default memo(ProductView);
