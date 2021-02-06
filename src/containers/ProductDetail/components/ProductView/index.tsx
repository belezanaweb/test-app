import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { LayoutRectangle, ScrollView } from 'react-native';
import Product from 'shared/types/Product';
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

  const hasInventory = !!product.inventory.quantity;

  const handleDescriptionLayout = useCallback(
    (event: { layout: LayoutRectangle }) => {
      setDescriptionYAxisOffset(event.layout.y);
    },
    [],
  );

  return (
    <>
      <StyledScrollView
        ref={productViewRef}
        bounces={isAccordionOpen}
        scrollEnabled={isAccordionOpen}
        showsVerticalScrollIndicator={isAccordionOpen}
        removeClippedSubviews={true}
        contentContainerStyle={{ paddingBottom: 20 }}
        onLayout={({ nativeEvent }) =>
          console.log('ScrollView height', nativeEvent.layout.height)
        }>
        <ProductOverview product={product} />
        <BuyButton hasInventory={hasInventory} />
        <ProductDescription
          product={product}
          handleDescriptionLayout={handleDescriptionLayout}
        />
      </StyledScrollView>
      <AccordionButton
        onOpenAccordion={handleAccordionPress}
        isAccordionOpen={isAccordionOpen}
      />
    </>
  );
};

export default memo(ProductView);
