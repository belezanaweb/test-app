import ClientProducts from "../clients/client-products";
import Types from "../actions-types";

export function get(sku) {
  return async dispatch => {
    ClientProducts.get(sku)
      .then(resp => resp.json())
      .then(data => dispatch({ type: Types.PRODUCT_RECEIVED_ONE, data }))
      .catch(error => dispatch({ type: Types.PRODUCT_REQUEST_ERROR, error }));
  };
}

export function getList(page, size) {
  return async dispatch => {
    ClientProducts.getList(page, size)
      .then(resp => resp.json())
      .then(data => dispatch({ type: Types.PRODUCT_RECEIVED_LIST, data }))
      .catch(error => dispatch({ type: Types.PRODUCT_REQUEST_ERROR, error }));
  };
}
