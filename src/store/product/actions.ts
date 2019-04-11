import { ActionCreator } from 'redux'
import { IReduxAction } from '../types'

export const PRODUCTS_LOAD = 'PRODUCTS_LOAD'
export const PRODUCTS_PAGINATE = 'PRODUCTS_PAGINATE'
export const PRODUCTS_LOAD_SUCCESS = 'PRODUCTS_LOAD_SUCCESS'
export const PRODUCTS_LOAD_FAILED = 'PRODUCTS_LOAD_FAILED'

export const PRODUCT_LOAD = 'PRODUCT_LOAD'
export const PRODUCT_LOAD_SUCCESS = 'PRODUCT_LOAD_SUCCESS'
export const PRODUCT_LOAD_FAILED = 'PRODUCT_LOAD_FAILED'


export const ProductsLoad: ActionCreator<IReduxAction> = payload => ({
  type: PRODUCTS_LOAD,
  payload,
})

export const ProductsPaginate: ActionCreator<IReduxAction> = payload => ({
  type: PRODUCTS_PAGINATE,
  payload,
})

export const ProductsLoadSuccess: ActionCreator<IReduxAction> = payload => ({
  type: PRODUCTS_LOAD_SUCCESS,
  payload,
})

export const ProductsLoadFailed: ActionCreator<IReduxAction> = payload => ({
  type: PRODUCTS_LOAD_FAILED,
  payload,
})

