import { Reducer } from 'redux'
import * as actions from './actions'
import { IProductState } from './types'

export const initialState: IProductState = {
  error: null,
  loading: false,
  page: 0,
  size: 3,
  product: null,
  products: [],
  refreshing: false
}

const productReducer: Reducer<IProductState> = (state = initialState, action) => {
  switch (action.type) {
    case actions.PRODUCTS_LOAD:
      return {
        ...state,
        loading: false,
        refreshing: true,
        page: 0,
        products: []
      }

    case actions.PRODUCTS_PAGINATE:
      return {
        ...state,
        loading: true,
        page: state.page +1,
      }

    case actions.PRODUCTS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...state.products, ...action.payload],
      }

    case actions.PRODUCTS_LOAD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default productReducer
