import * as types from './types';

export function NetInfoRequest(data) {
  return {
    type: types.NET_INFO_REQUEST,
    data,
  };
}

export function NetInfoSuccess(data) {
  return {
    type: types.NET_INFO_SUCCESS,
    data,
  };
}

export function NetInfoFailed(data) {
  return {
    type: types.NET_INFO_FAILED,
    data,
  };
}
