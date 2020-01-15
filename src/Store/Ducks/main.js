import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setCurrentItem: ['data'],
});

export const UserInfoTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
  currentItem: {},
};

const setCurrentItem = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    currentItem: action.data
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CURRENT_ITEM]: setCurrentItem,
});
