import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from 'screens'

const nav = createNavigationReducer(AppNavigator)

export default combineReducers({
  nav,
})
