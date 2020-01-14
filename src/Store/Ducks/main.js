export const Types = {
  ADD_EXAMPLE: 'ADD_EXAMPLE',
};

export const MainTypes = Types;

const INITIAL_STATE = {
  data: [],
  title: 'Test',
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_EXAMPLE:
      return { 
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}