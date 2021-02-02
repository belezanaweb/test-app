import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { getProducts } from 'services/api';
import FullScreenLoading from 'shared/components/FullScreenLoading';
import Page from 'shared/styles/Page';
import Product from 'shared/types/Product';
import { HomeProps } from 'shared/types/Router';
import { showToast } from 'utils';
import appLabels from 'utils/appLabels';
import ButtonLoadMore from './components/ButtonLoadMore';
import ProductCard from './components/ProductCard';

const Home: React.FC<HomeProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFetchingProducts, setIsFetchingProducts] = useState(true);
  const [isFirstFetchProducts, setIsFirstFetchProducts] = useState(true);
  const [page, setPage] = useState(1);

  const fetchProducts = useCallback(async (fetchPage?: number) => {
    console.log('fetch');
    try {
      const response = await getProducts({ page: fetchPage || 1, size: 10 });
      if (response) {
        // works with spread operator too: [...prevProducts, ...response]
        // Array.concat() and spread are non mutating array iterators
        setProducts(prevProducts => prevProducts.concat(response));
      } else {
        showToast(appLabels.error.endProductList);
      }
      setIsFetchingProducts(false);
      setIsFirstFetchProducts(false);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setIsFetchingProducts(false);
      setIsFirstFetchProducts(false);
      setPage(prevPage => prevPage - 1);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleLoadMorePress = () => {
    if (!isFetchingProducts) {
      setIsFetchingProducts(true);
      fetchProducts(page);
    }
  };

  /**
   * I have used windowSize=5 only for proposal of this test, to see components dismounting
   * More information here: https://reactnative.dev/docs/optimizing-flatlist-configuration
   *
   * ***NOTE***
   * windowSize is different then removeClippedSubviews:
   * - windowSize: determines how much items are mounted simultaneously. Default is 21;
   * - removeClippedSubviews: exclude views outside of the viewport from the native rendering.
   *   But does not save significant memory because the views are not deallocated, only detached.
   */
  return (
    <Page>
      <FullScreenLoading active={isFirstFetchProducts} />
      <FlatList<Product>
        keyExtractor={item => item.sku}
        data={products}
        windowSize={5}
        ListEmptyComponent={() => <></>}
        ListFooterComponent={() => (
          <ButtonLoadMore
            onPress={handleLoadMorePress}
            isLoading={isFetchingProducts}
          />
        )}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </Page>
  );
};

export default Home;
