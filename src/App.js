/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import store from '../src/stores/rootStore'
import { Provider } from 'react-redux'
import { ModalServiceProvider } from './components/ModalService'
import ProductListScreen from '../src/screens/ProductsListScreen'
import ProductDetailsScreen from '../src/screens/ProductsDetailsScreen'
import { defaultTheme } from './themes'

const Stack = createStackNavigator()

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <ModalServiceProvider>
          <NavigationContainer>
            <Provider store={store}>
              <Stack.Navigator headerMode="none" initialRouteName="Home">
                <Stack.Screen component={ProductListScreen} name="Home" />
                <Stack.Screen component={ProductDetailsScreen} name="ProductDetails" />
              </Stack.Navigator>
            </Provider>
          </NavigationContainer>
        </ModalServiceProvider>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
