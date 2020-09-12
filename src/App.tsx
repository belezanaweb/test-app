import 'react-native-gesture-handler'

import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components/native'

import { ProductProvider } from './context/ProductContext'
import ProductList from './views/ProductList'
import ProductDetails from './views/ProductDetails'
import { theme } from './styles/theme'
import { PageRoute } from '../enum/Pages'

const styledNavigation = {
  headerStyle: {
    backgroundColor: '#f2f2f2'
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  headerTintColor: '#000'
}

const Stack = createStackNavigator()
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              component={ProductList}
              name={PageRoute.ProductList}
              options={{
                title: 'LISTA DE PRODUTOS',
                ...styledNavigation
              }}
            />
            <Stack.Screen
              component={ProductDetails}
              name={PageRoute.ProductDetails}
              options={{
                title: 'DETALHES DO PRODUTO',
                ...styledNavigation
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProductProvider>
    </ThemeProvider>
  )
}

export default App
