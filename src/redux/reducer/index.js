import { combineReducers } from 'redux';
import {
  ADD_LIST, ADD_ITEM, REMOVE_ITEM,
} from '../actions/types';

const listReducer = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_LIST:
      return [
        ...state,
        payload,
      ];
    default:
      return state;
  }
};

const itemReducer = (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_ITEM:
      return payload;
    case REMOVE_ITEM:
      return {};
    default:
      return state;
  }
};

const reducer = combineReducers({ item: itemReducer, list: listReducer });
export default reducer;
