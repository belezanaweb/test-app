import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { getProductList } from 'services/api';
import FullScreenLoading from 'shared/components/FullScreenLoading';
import Page from 'shared/styles/Page';
import { showToast } from 'utils';
import appLabels from 'utils/appLabels';
import Product from 'utils/types/Product';
import BtnLoadMore from './components/BtnLoadMore';
import ProductCard from './components/ProductCard';

const HomeScreen: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>();
  const [isFetchingFirstTime, setIsFetchingFirstTime] = useState(true);
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);
  const [page, setPage] = useState(1);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await getProductList({ page: page, size: 10 });
      if (response) {
        setProductList(prevProductList =>
          prevProductList ? [...prevProductList, ...response] : response,
        );
      } else {
        showToast(appLabels.error.endProductList);
      }
      setIsFetchingProducts(false);
      setIsFetchingFirstTime(false);
    } catch (error) {
      setIsFetchingProducts(false);
      setIsFetchingFirstTime(false);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function handleBtnShowMorePress() {
    setPage(prevPage => prevPage + 1);
    setIsFetchingProducts(true);
  }

  return (
    <Page>
      <FullScreenLoading active={isFetchingFirstTime} />
      <FlatList<Product>
        keyExtractor={item => item.sku + Math.random()}
        data={productList}
        ListFooterComponent={() => (
          <BtnLoadMore
            onPress={handleBtnShowMorePress}
            isLoading={isFetchingProducts}
          />
        )}
        windowSize={4}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </Page>
  );
};

export default HomeScreen;
