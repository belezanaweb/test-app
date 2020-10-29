import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView></SafeAreaView>
    </ThemeProvider>
  )
}
