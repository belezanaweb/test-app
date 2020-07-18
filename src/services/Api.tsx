import axios from 'axios';

const Endpoint = 'https://pacific-wave-51314.herokuapp.com/products';

export const Api = {
  products: axios.create({ baseURL: Endpoint }),
};
