import axios from 'axios';
import { showToast } from 'utils';
import { GetProductsProps } from 'utils/types/Api';
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

export async function getProductList({
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
    showToast(
      'Houve um erro inesperado. Por favor, tente novamente mais tarde.',
    );
    throw error;
  }
}

export default api;
