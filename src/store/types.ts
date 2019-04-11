import { Action } from 'redux'
import { IProductState } from 'store/product/types'
import { IApptate } from 'store/app/types'

// Import types here

export interface IAppState {
   nav: any
  app: IApptate
  product: IProductState
    // Insert types here
}

export interface IReduxAction extends Action {
    payload?: any
}

export interface IErrorReduxAction extends Action {
    payload?: any
}
