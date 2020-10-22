/**
 * Filipe Colaquecez - Boticário Challenge
 * https://github.com/facebook/react-native
 *
 */
import 'react-native-gesture-handler'
import React from 'react'
import { View, Text } from 'react-native'
import Routes from './routes/app.routes'
import Products from './Contexts/Products'
const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Products>
        <Routes />
      </Products>
    </View>
  )
}

export default App
