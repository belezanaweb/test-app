import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ListView from './screens/ListView'

const ProductStack = createStackNavigator({
  List: {
    screen: ListView
  }
})

const App = createSwitchNavigator({
  Product: ProductStack
})

export default createAppContainer(App)
