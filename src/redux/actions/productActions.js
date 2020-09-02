import * as types from './types';

export function ProductRequest(data) {
  return {
    type: types.PRODUCTS_REQUEST,
    data,
  };
}

export function ProductSuccess(data) {
  return {
    type: types.PRODUCTS_SUCCESS,
    data,
  };
}

export function ProductFailed(data) {
  return {
    type: types.PRODUCTS_FAILED,
    data,
  };
}

export function ProductClear(data) {
  return {
    type: types.PRODUCTS_CLEAR,
    data,
  };
}
