import { useEffect, useState, useMemo } from 'react';
import { products, productsDetail } from '../../services/boticatio.api';
import { product } from '../../util/types';

const useBoticario = () => {
  const [productList, setProductList] = useState<product[]>([]);
  const [productDetail, setProductDetail] = useState<product>();
  const [page, setPage] = useState<number>(1);
  const [sku, setSku] = useState<string>();
  const [size] = useState<number>(3);

  const productsCache = useMemo(
    () =>
      new Promise<product[]>(async (resolve, reject) => {
        try {
          const _productList = await products(page, size);
          resolve(_productList);
        } catch (error) {
          reject(error);
        }
      }),
    [page, size]
  );

  const productDetailCache = useMemo(
    () =>
      new Promise<product>(async (resolve, reject) => {
        try {
          sku && resolve(await productsDetail(sku));
        } catch (error) {
          reject(error);
        }
      }),
    [sku]
  );

  useEffect(() => {
    productsCache.then((newList) => {
      setProductList(newList);
    });
  }, [page]);

  useEffect(() => {
    productDetailCache.then((newDetail) => setProductDetail(newDetail));
  }, [sku]);

  return { productList, productDetail, setPage, setSku };
};

export default useBoticario;
