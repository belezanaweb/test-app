import axios from 'axios';
import { showToast } from 'utils';
import appLabels from 'utils/appLabels';
import { GetProductsProps, GetProductBySkuProps } from 'shared/types/Api';
import Product from 'shared/types/Product';

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

export async function getProducts({
  page,
  size,
}: GetProductsProps): Promise<Product[]> {
  try {
    const res = await api.get<Product[]>('/products', {
      params: {
        page,
        size,
      },
    });
    return res.data;
  } catch (error) {
    showToast(appLabels.error.generic);
    throw error;
  }
}

export async function getProductBySku({
  sku,
}: GetProductBySkuProps): Promise<Product> {
  try {
    const res = await api.get<Product>(`/products/${sku}`);
    return res.data;
  } catch (error) {
    showToast(appLabels.error.generic);
    throw error;
  }
}

export default api;
