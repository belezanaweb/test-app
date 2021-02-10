import { useCallback, useState } from 'react';
import { getProductBySku, getProducts } from 'services/api';
import Product from 'utils/types/Product';
import { showToast } from 'utils';
import appLabels from 'utils/appLabels';

/**
 *  Products custom hook
 * @param inititalPage initial page to fetch products
 * @param size how many products are returned per page
 *
 */
export function useProductsList(inititalPage: number, size: number) {
  const [products, setProducts] = useState<Product[]>([]);
  const [didFirstFetch, setDidFirstFetch] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(inititalPage);

  const fetchProducts = useCallback(
    async (pageToFetch?: number) => {
      setIsFetching(true);
      try {
        const { data } = await getProducts({
          page: pageToFetch || inititalPage,
          size,
        });
        if (data) {
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
        setDidFirstFetch(false);
        throw Error(appLabels.error.generic);
      }
    },
    [inititalPage, size],
  );

  return [products, page, didFirstFetch, isFetching, fetchProducts] as const;
}

/**
 *  Product detail hook
 *  Have no initial params
 *
 */
export function useProductDetail() {
  const [product, setProduct] = useState<Product>();
  const [isFetching, setIsFetching] = useState(true);

  const fetchProduct = useCallback(async (sku: string) => {
    setIsFetching(true);
    try {
      const { data } = await getProductBySku({ sku });
      setProduct(data);
      setIsFetching(false);
    } catch (error) {
      showToast(appLabels.error.generic);
      setIsFetching(false);
      throw Error(appLabels.error.generic);
    }
  }, []);

  return [product, isFetching, fetchProduct] as const;
}
