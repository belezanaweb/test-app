import 'react-native-gesture-handler'

import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import Routes from './routes'
import { SafeAreaContainer } from './styles/baseStyles'
import { theme } from './styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaContainer>
        <Routes />
      </SafeAreaContainer>
    </ThemeProvider>
  )
}
