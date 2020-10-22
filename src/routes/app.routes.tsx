import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { View, Text } from 'react-native'

import ProductList from '../pages/ProductList/'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Lista de produtos" component={ProductList} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
