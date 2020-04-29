import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import DetailsProduct from './screens/DetailsProduct'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={props => {
            return <Home {...props} />
          }}
        />
        <Stack.Screen
          name="Details"
          component={props => {
            return <DetailsProduct {...props} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
