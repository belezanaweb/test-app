import axios from 'axios';
import Config from '../Config';

export const getProducts = (size = 10) => {
  return axios(`${Config.api.belezaNaWeb}/products?page=1&size=${size}`, {
    method: 'GET',
    headers: {},
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};
