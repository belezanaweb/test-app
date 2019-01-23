import axios from 'axios';
import { BASE_API } from 'utils/constants';

const service = axios.create({
  baseURL: BASE_API
});

service.interceptors.request.use(
  config => {
    config.headers['Accept'] = 'application/json';
    return config;
  },
  error => {
    // console.log({error})
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      // console.log('response', error.response);
      // console.log('data', error.response.data);
      // console.log('status', error.response.status);
      // console.log('headers', error.response.headers);
    } else if (error.request) {
      // console.log('Error Request', error.request);
    }
    return Promise.reject(error);
  }
);

export default service;
