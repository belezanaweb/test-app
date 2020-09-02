import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Splash from '../screens/Splash'

import Home from '../screens/Home'
import Product from '../screens/Product'

const MainStack = createStackNavigator(
  {
    Splash,
    Home,
    Product
  },
  {
    headerMode: 'none'
  }
)

const Routes = createAppContainer(createSwitchNavigator({ MainStack }))

export default Routes
