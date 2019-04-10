import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers'
import { routerMiddleware } from './navigator'

let tron
if (__DEV__) {
  const {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking,
  } = require('reactotron-react-native')
  const Reactotron = require('reactotron-react-native').default
  const { reactotronRedux } = require('reactotron-redux')

  tron = Reactotron.configure({
    host: '192.168.15.11',
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .connect()

  tron.clear()
}

const middlewares = [routerMiddleware]

const persistConfig = {
  key: 'root',
  storage,
  timeout: null,
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
const persistedReducer = persistReducer(persistConfig, reducer)
const enhancer = composeEnhancers(applyMiddleware(...middlewares))
export const store = createStore(persistedReducer, enhancer)
export const persistor = persistStore(store)
