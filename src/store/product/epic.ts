import { Epic, ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import { IAppState, IReduxAction } from '../types'
import * as actions from './actions'
import { onPaginate, onProduct } from './service'
import { IResponse } from './types'

export const productsEpic: Epic<IReduxAction, IResponse, IAppState> = (action$, $state) =>
  action$.pipe(
    ofType(actions.PRODUCTS_PAGINATE),
    mergeMap(() => onPaginate($state).then(actions.ProductsLoadSuccess, actions.ProductsLoadFailed))
  )

export const productEpic: Epic<IReduxAction, IResponse, IAppState> = action$ =>
  action$.pipe(
    ofType(actions.PRODUCT_LOAD),
    mergeMap(({ payload }) =>
      onProduct(payload).then(actions.ProductLoadSuccess, actions.ProductLoadFailed))
  )
