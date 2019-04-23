// ACTION CREATORS

import { ADD_ITEM } from './types';
import store from '../store';

const setItem = (value) => {
  store.dispatch({ payload: value, type: ADD_ITEM });
};

export default setItem;
