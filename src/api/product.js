import request from 'utils/request';

export function getListOfProducts({ page, size }) {
  return request({
    url: `/products?page=${page}&size=${size}`,
    method: 'get'
  });
}

export function getProductBySKU(sku) {
  return request({
    url: `/products/${sku}`,
    method: 'get'
  });
}
