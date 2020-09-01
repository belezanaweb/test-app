/**
 * @author Vanderson de Moura Vauruk
 *
 */
import axios from 'axios'

const URL_PATH = 'https://pacific-wave-51314.herokuapp.com'

const api = axios.create({
  baseURL: `${URL_PATH}`
})

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const checkResponse = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  let error = new Error(response.statusText)
  error.response = response
  throw error
}

const checkException = error => {
  const { response, config, message } = error
  if (message === 'Network Error') {
    throw 'Erro de conexão'
  }
  const { status, data } = response || {}
  const { errors, error: errorData, type, base } = data || {}
  if (typeof errors === 'object') {
    throw errors
  }
  if (typeof errorData === 'string' && !type?.length && status !== 500 && status !== 404) {
    throw errorData
  }
  if (base?.length) {
    throw base[0]
  }
  throw error
}

export const productListAction = (page_num, page_size) => {
  const pageNum = page_num ? 1 : page_num
  const pageSize = page_size ? 1 : page_size
  const path = `/products?page=${pageNum}&size=${pageSize}`
  let _headers = {
    ...headers
  }
  return api.get(path, { headers: _headers }).then(checkResponse).catch(checkException)
}

export const getProductAction = sku => {
  console.log('getProductAction', sku)
  const path = `/products/${sku}`
  let _headers = {
    ...headers
  }
  return api.get(path, { headers: _headers }).then(checkResponse).catch(checkException)
}
