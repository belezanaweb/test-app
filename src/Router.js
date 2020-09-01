/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Product from './views/Product'
import ProductDetails from './views/Product/Details'

const Stack = createStackNavigator()

const Router: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ title: 'LISTA DE PRODUTOS', headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={ProductDetails}
          initialParams={{ sku: 0 }}
          options={{ title: 'Detalhes', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default Router
