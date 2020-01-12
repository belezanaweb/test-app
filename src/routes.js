import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { LIST_VIEW, DETAIL_VIEW } from './constants/strings'

import ListView from './screens/ListView'
import DetailView from './screens/DetailView'

const ProductStack = createStackNavigator({
  List: {
    screen: ListView,
    navigationOptions: {
      headerTitle: LIST_VIEW
    }
  },
  Detail: {
    screen: DetailView,
    navigationOptions: {
      headerTitle: DETAIL_VIEW
    }
  }
})

const App = createSwitchNavigator({
  Product: ProductStack
})

export default createAppContainer(App)
