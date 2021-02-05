import React, { memo, useCallback, useEffect, useState } from 'react';
import { getProductBySku } from 'services/api';
import FullScreenLoading from 'shared/components/FullScreenLoading';
import { Page, shadowStyle } from 'shared/styles';
import Product from 'shared/types/Product';
import { ProductDetailProps } from 'shared/types/Router';
import ProductView from './components/ProductView';
import { ProductViewContainer } from './components/ProductView/styles';

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const [product, setProduct] = useState<Product>();
  const [isFetching, setIsFetching] = useState(true);
  const {
    params: { sku },
  } = route;
  const fetchProductBySku = useCallback(async () => {
    try {
      const response = await getProductBySku({ sku });
      setProduct(response);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
    }
  }, [sku]);

  useEffect(() => {
    fetchProductBySku();
  }, [fetchProductBySku]);

  /* I need to do this because exists an bug on android with opcity animation and elevation
   * https://github.com/facebook/react-native/issues/23090
   * the correct are:
   * ./componentes/ProductView:
   *  <ProductViewContainer style={shadowStyle}>
   *   <ScrollView>
   *    ...
   *  </ProductViewContainer>
   *
   *   and  ./index:
   *    <Page>
   *     {product && <ProductView product={product} />}
   *     <FullScreenLoading active={isFetching} />
   *    </Page>
   */
  return (
    <Page>
      <ProductViewContainer style={shadowStyle}>
        {product && <ProductView product={product} />}
        <FullScreenLoading active={isFetching} />
      </ProductViewContainer>
    </Page>
  );
};

export default memo(ProductDetail);
