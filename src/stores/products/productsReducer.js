const initialState = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null,
  lastPage: 0,
  finished: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
    case 'FETCH_PRODUCT_DETAILS':
      return { ...state, selectedItem: null, loading: true }
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        items: [...state.items, ...action.products],
        lastPage: action.lastPage,
        finished: action.finished,
        loading: false
      }
    case 'FETCH_PRODUCTS_FAIL':
      return { ...state, error: action.error, loading: false }
    case 'FETCH_PRODUCT_DETAILS_SUCCESS':
      return {
        ...state,
        selectedItem: action.data,
        loading: false
      }
    case 'FETCH_PRODUCT_DETAILS_FAIL':
      return { ...state, selectedItem: null, error: action.error, loading: false }
    default:
      return state
  }
}
