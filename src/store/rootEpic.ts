import { combineEpics } from 'redux-observable'
import { productEpic, productsEpic } from 'store/product/epic'

// Import epic here

const epics = [
  productsEpic,
  productEpic,
    // Insert epic here
]

const rootEpic: any = combineEpics(...epics)

export default rootEpic
