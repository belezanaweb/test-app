import axios from 'axios';
import Config from '../Config';

const api = axios.create({
  baseURL: Config.api.belezaNaWeb,
});

export default api;
