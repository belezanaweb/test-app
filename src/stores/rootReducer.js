import productReducer from './products/productsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  products: productReducer
})

export default rootReducer
