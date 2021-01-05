const initialState = {
  items: [],
  selectedItem: null,
  isFetchingList: false,
  isFetchingDetails: false,
  error: null,
  lastPage: 0,
  finished: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, selectedItem: null, isFetchingList: true }
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        items: [...state.items, ...action.products],
        lastPage: action.lastPage,
        finished: action.finished,
        isFetchingList: false
      }
    case 'FETCH_PRODUCTS_FAIL':
      return { ...state, error: action.error, isFetchingList: false }
    case 'FETCH_PRODUCT_DETAILS':
      return { ...state, selectedItem: null, isFetchingDetails: true }
    case 'FETCH_PRODUCT_DETAILS_SUCCESS':
      return {
        ...state,
        selectedItem: action.data,
        isFetchingDetails: false
      }
    case 'FETCH_PRODUCT_DETAILS_FAIL':
      return { ...state, selectedItem: null, error: action.error, isFetchingDetails: false }
    default:
      return state
  }
}
