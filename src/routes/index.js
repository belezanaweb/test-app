import 'react-native-gesture-handler'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../pages/Home'
import Details from '../pages/Details'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home
      },
      Details: {
        screen: Details
      }
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none'
    }
  )
)

export default Routes
