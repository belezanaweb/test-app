import * as types from './types';

export function AppTokenRequest(data) {
  return {
    type: types.APP_TOKEN_REQUEST,
    data,
  };
}

export function AppTokenSuccess(data) {
  return {
    type: types.APP_TOKEN_SUCCESS,
    data,
  };
}

export function AppTokenFailed(data) {
  return {
    type: types.APP_TOKEN_FAILED,
    data,
  };
}

export function AppSetDarkMode(data) {
  return {
    type: types.APP_SET_DARK_MODE,
    data,
  };
}
