import { call, put } from 'redux-saga/effects'

import api from '../../../config/config'

import * as productsAction from '../../actions/productsActions'
import * as productAction from '../../actions/productActions'

export function* getProducts(data) {

  let { page, size } = data.data

  const url = `products?page=${page}&size=${size}`

  try {
    const response = yield call(api.get, url)

    let { success } = response.data
    if (success) {
      yield put(productsAction.ProductsSuccess(response.data))
    } else {
      yield put(productsAction.ProductsFailed(response.data))
    }
  } catch (error) {
    yield put(productsAction.ProductsFailed(error))
  }
}

export function* getInfo(data) {
  let id = data.data

  const url = `products/${id}`

  try {
    const response = yield call(api.get, url)

    yield put(productAction.ProductSuccess(response.data))
  } catch (error) {
    yield put(productAction.ProductFailed(error))
  }
}
