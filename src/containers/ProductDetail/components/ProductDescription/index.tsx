import React, { memo } from 'react';
import { LayoutRectangle, View } from 'react-native';
import HTML from 'react-native-render-html';
import CommonText from 'shared/components/CommonText';
import { COMMON_TEXT_TYPES } from 'shared/components/CommonText/styles';
import Product from 'shared/types/Product';
import { getFontWeight } from 'utils';
import appLabels from 'utils/appLabels';

type ProductDescriptionProps = {
  product: Product;
  handleDescriptionLayout: (event: { layout: LayoutRectangle }) => void;
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  product,
  handleDescriptionLayout,
}) => {
  return (
    <>
      <View
        onLayout={({ nativeEvent }) => handleDescriptionLayout(nativeEvent)}>
        <CommonText textType={COMMON_TEXT_TYPES.SUBTITLE}>
          {appLabels.productDetail.labelProductDescription}
        </CommonText>
      </View>
      {/* Product description */}
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
    </>
  );
};

export default memo(ProductDescription);
