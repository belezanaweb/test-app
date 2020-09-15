import api from '~/config/api';
import {formatPrice} from '~/util/format';

const pageSize = 10;

export const getByPage = async page => {
  const {data} = await api.get(`/products?page=${page}&size=${pageSize}`);

  const products = data.map(normalizeProduct);

  return {data: products, lastPage: data.length < pageSize};
};

export const getBySku = async sku => {
  const {data} = await api.get(`/products/${sku}`);

  return normalizeProduct(data);
};

const normalizeProduct = product => {
  const {
    priceSpecification: {maxPrice, price, installments},
    imageObjects,
  } = product;

  return {
    ...product,
    featuredImage: imageObjects.find(img => img.featured),
    oldPrice: formatPrice(maxPrice),
    newPrice: formatPrice(price),
    formattedMonthlyPayment: `${
      installments.numberOfPayments
    }x de ${formatPrice(installments.monthlyPayment)}`,
  };
};
