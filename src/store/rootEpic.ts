import { combineEpics } from 'redux-observable'
import { productsEpic } from 'store/product/epic'

// Import epic here

const epics = [
  productsEpic
    // Insert epic here
]

const rootEpic: any = combineEpics(...epics)

export default rootEpic
