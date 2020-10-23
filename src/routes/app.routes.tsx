import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import ProductList from '../pages/ProductList/'
import ProductDetail from '../pages/ProductDetail'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          textTransform: 'uppercase',
        },
      }}
    >
      <Stack.Screen name="Lista de produtos" component={ProductList} />
      <Stack.Screen name="Detalhes do produto" component={ProductDetail} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
