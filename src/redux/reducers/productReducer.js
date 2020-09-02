import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: true,
  data: [],
};

export const productReducer = createReducer(initialState, {
  [types.PRODUCT_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
    };
  },

  [types.PRODUCT_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },

  [types.PRODUCT_FAILED](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },
});
