import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: true,
  data: [],
};

export const productsReducer = createReducer(initialState, {
  [types.PRODUCTS_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
    };
  },

  [types.PRODUCTS_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      data: state.data.concat(action.data),
    };
  },

  [types.PRODUCTS_FAILED](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },
});
