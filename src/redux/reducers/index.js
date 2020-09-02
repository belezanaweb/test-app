import * as appReducer from './appReducer';
import * as netInfoReducer from './netInfoReducer';
import * as productsReducer from './productsReducer';
import * as productReducer from './productReducer';

export default Object.assign(
  appReducer,
  netInfoReducer,
  productsReducer,
  productReducer,
);
