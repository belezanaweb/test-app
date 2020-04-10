import React from 'react'
// react-native 62
// import { Appearance } from 'react-native'

import colors from './colors'

const statusBarTheme = () => {
  // react-native 62
  // const colorScheme = Appearance.getColorScheme()
  // if (colorScheme === 'dark') {
  //   return {
  //     style: 'dark-content',
  //     color: colors.light
  //   }
  // }
  return {
    style: 'light-content',
    color: colors.dark
  }
}

export default statusBarTheme
