import axios from 'axios';
import { GetProductBySkuProps, GetProductsProps } from 'utils/types/Api';
import Product from 'utils/types/Product';

const BASE_URL = 'https://pacific-wave-51314.herokuapp.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getProducts = ({ page, size }: GetProductsProps) =>
  api.get<Product[]>('/products', {
    params: {
      page,
      size,
    },
  });

export const getProductBySku = ({ sku }: GetProductBySkuProps) =>
  api.get<Product>(`/products/${sku}`);

export default api;
