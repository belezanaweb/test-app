import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: true,
  data: [],
  darkMode: false,
};

export const appReducer = createReducer(initialState, {
  [types.APP_TOKEN_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
    };
  },

  [types.APP_TOKEN_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },

  [types.APP_TOKEN_FAILED](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },

  [types.APP_SET_DARK_MODE](state, action) {
    return {
      ...state,
      darkMode: action.data,
    };
  },
});
