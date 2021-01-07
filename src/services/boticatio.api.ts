import service from './boticario.service';
import { product } from '../util/types';

const products = (page: number, size: number) =>
  new Promise<Array<product>>((resolve, reject) => {
    service
      .get<Array<product>>('/products', {
        params: {
          page,
          size,
        },
      })
      .then((response) => {
        resolve(response.data);
        console.log('chamando pagina ', page);
      })
      .catch((error) => reject(error));
  });

const productsDetail = (sku: string) =>
  new Promise<product>((resolve, reject) => {
    service
      .get<product>(`/products/${sku}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

export { products, productsDetail };
