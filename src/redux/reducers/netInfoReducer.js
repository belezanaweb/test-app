import createReducer from '../store/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: true,
  data: [],
};

export const netInfoReducer = createReducer(initialState, {
  [types.NET_INFO_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
    };
  },

  [types.NET_INFO_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },

  [types.NET_INFO_FAILED](state, action) {
    return {
      ...state,
      isLoading: false,
      data: action.data,
    };
  },
});
