import React, { useEffect, useMemo } from 'react';
import { FlatList } from 'react-native';
import FullScreenLoading from 'shared/components/FullScreenLoading';
import { Page } from 'shared/styles';
import Product from 'utils/types/Product';
import { HomeProps } from 'utils/types/Router';
import { useProductsList } from '../../utils/customHooks/useProducts';
import ButtonLoadMore from './components/ButtonLoadMore';
import EmptyList from './components/EmptyList';
import ProductCard from './components/ProductCard';

/**
 * I have used windowSize=5 only for proposal of this test, to see components dismounting
 * More information here: https://reactnative.dev/docs/optimizing-flatlist-configuration
 *
 * ***NOTE***
 * windowSize is different then removeClippedSubviews:
 * - windowSize: determines how many items are mounted simultaneously. Default is 21;
 * - removeClippedSubviews: exclude views outside of the viewport from the native rendering.
 *   But does not save significant memory because the views are not deallocated, only detached.
 */

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [
    products,
    currentPage,
    didFirstFetch,
    isFetching,
    fetchProducts,
  ] = useProductsList(1, 10);

  useEffect(() => {
    didFirstFetch && fetchProducts();
  }, [fetchProducts, didFirstFetch]);

  const hasProducts = useMemo(() => products.length > 0, [products]);

  const handleButtonLoadMorePress = () => {
    !isFetching && fetchProducts(hasProducts ? currentPage + 1 : currentPage);
  };

  return (
    <Page>
      <FlatList<Product>
        keyExtractor={item => item.sku}
        data={products}
        windowSize={5}
        ListEmptyComponent={() => <EmptyList shouldRender={!hasProducts} />}
        ListFooterComponent={() => (
          <ButtonLoadMore
            onPress={handleButtonLoadMorePress}
            isLoading={isFetching}
            hasProducts={hasProducts}
          />
        )}
        renderItem={({ item }) => (
          <ProductCard navigation={navigation} product={item} />
        )}
      />
      <FullScreenLoading active={didFirstFetch} />
    </Page>
  );
};

export default Home;
