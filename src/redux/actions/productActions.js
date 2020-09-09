import * as types from './types';

export function ProductRequest(data) {
  return {
    type: types.PRODUCT_REQUEST,
    data,
  };
}

export function ProductSuccess(data) {
  return {
    type: types.PRODUCT_SUCCESS,
    data,
  };
}

export function ProductFailed(data) {
  return {
    type: types.PRODUCT_FAILED,
    data,
  };
}

export function ProductClear(data) {
  return {
    type: types.PRODUCT_CLEAR,
    data,
  };
}
