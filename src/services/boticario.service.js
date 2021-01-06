import axios from 'axios';

const BASE_URL = 'https://pacific-wave-51314.herokuapp.com';

const Boticario = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Boticario;
