import { useCallback, useState } from 'react';
import { getProducts } from 'services/api';
import Product from 'shared/types/Product';
import { showToast } from 'utils';
import appLabels from 'utils/appLabels';

/**
 *  Products custom hook
 * @param inititalPage initial page to fetch products
 * @param size how many products are returned per page
 *
 */
function useProducts(inititalPage: number, size: number) {
  const [products, setProducts] = useState<Product[]>([]);
  const [didFirstFetch, setDidFirstFetch] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(inititalPage);

  console.log('useProducts');

  const fetchProducts = useCallback(
    async (pageToFetch?: number) => {
      setIsFetching(true);
      try {
        const { data } = await getProducts({
          page: pageToFetch || inititalPage,
          size,
        });
        if (data) {
          console.log('fetchProducts');
          setProducts(prevProducts => [...prevProducts, ...data]);
          setPage(pageToFetch || inititalPage);
        } else {
          showToast(appLabels.error.endProductList);
        }
        setIsFetching(false);
        setDidFirstFetch(false);
      } catch (error) {
        showToast(appLabels.error.generic);
        setIsFetching(false);
      }
    },
    [inititalPage, size],
  );

  return [products, page, didFirstFetch, isFetching, fetchProducts] as const;
}

export default useProducts;
