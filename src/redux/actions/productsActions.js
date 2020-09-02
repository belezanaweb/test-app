import * as types from './types';

export function ProductsRequest(data) {
  return {
    type: types.PRODUCTS_REQUEST,
    data,
  };
}

export function ProductsSuccess(data) {
  return {
    type: types.PRODUCTS_SUCCESS,
    data,
  };
}

export function ProductsFailed(data) {
  return {
    type: types.PRODUCTS_FAILED,
    data,
  };
}
