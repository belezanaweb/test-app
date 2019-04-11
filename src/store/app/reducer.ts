import { Reducer } from 'redux'
import * as actions from './actions'
import { IApptate } from './types'

export const initialState: IApptate = {
  theme: false
}

const productReducer: Reducer<IApptate> = (state = initialState, action) => {
  switch (action.type) {
    case actions.THEME_SWITCH:
      return {
        ...state,
        theme: !state.theme
      }

    default:
      return state
  }
}

export default productReducer
