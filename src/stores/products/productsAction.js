import axiosInstance from '../../utils/axiosInstance'

export const fetchProducts = (size = 10) => (dispatch, getState) => {
  const lastPage = getState().products.lastPage
  const page = lastPage + 1
  dispatch({ type: 'FETCH_PRODUCTS' })
  return axiosInstance
    .get('products', { params: { page, size } })
    .then(response => {
      dispatch({
        type: 'FETCH_PRODUCTS_SUCCESS',
        products: response.data,
        lastPage: page,
        finished: response.data?.length < size
      })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_PRODUCTS_FAIL', error })
    })
}

export const fetchProductDetails = sku => dispatch => {
  dispatch({ type: 'FETCH_PRODUCT_DETAILS' })
  return axiosInstance
    .get(`products/${sku}`)
    .then(response => {
      dispatch({
        type: 'FETCH_PRODUCT_DETAILS_SUCCESS',
        data: response.data
      })
    })
    .catch(error => {
      dispatch({ type: 'FETCH_PRODUCT_DETAILS_FAIL', error })
    })
}
