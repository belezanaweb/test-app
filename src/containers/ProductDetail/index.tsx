import React, { memo, useCallback, useEffect, useState } from 'react';
import { getProductBySku } from 'services/api';
import FullScreenLoading from 'shared/components/FullScreenLoading';
import { shadowStyle } from 'shared/styles';
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

  return (
    <ProductViewContainer style={shadowStyle}>
      {product && <ProductView product={product} />}
      <FullScreenLoading active={isFetching} />
    </ProductViewContainer>
  );
};

export default memo(ProductDetail);
