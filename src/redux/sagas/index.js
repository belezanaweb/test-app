import { takeLatest, all } from 'redux-saga/effects'

import * as types from '../actions/types'

import { getToken } from '../sagas/token'
import { setNetInfo } from '../sagas/netInfo'
import { getProducts } from '../sagas/products'
import { getInfo } from '../sagas/products'

export default function* rootSaga() {
  return yield all([
    takeLatest(types.APP_TOKEN_REQUEST, getToken),
    takeLatest(types.NET_INFO_REQUEST, setNetInfo),
    takeLatest(types.PRODUCTS_REQUEST, getProducts),
    takeLatest(types.PRODUCT_REQUEST, getInfo)
  ])
}
