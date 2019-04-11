import { Action } from 'redux'
import { IProductState } from 'store/product/types'

// Import types here

export interface IAppState {
   nav: any
  product: IProductState

    // Insert types here
}

export interface IReduxAction extends Action {
    payload?: any
}

export interface IErrorReduxAction extends Action {
    payload?: any
}
