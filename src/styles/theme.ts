import 'styled-components/native'



import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme {
    colors:{
      primary: string,
      secondary: string,
      grey: string,
      greyMedium: string,
      greyLight: string,
      greyExtraLight: string,
      greyDark: string,
      greyDark2: string,
      greyExtraDark: string,
    },
    fontFamily: string,
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#FF6C00',
    secondary: '#A43287',
    grey: '#C4C4C4',
    greyMedium: '#999999',
    greyLight: '#CCCCCC',
    greyExtraLight: '#F8F8F8',
    greyDark: '#6F6F6F',
    greyDark2: '#777777',
    greyExtraDark: '#212121'
  },
  fontFamily: 'Roboto'
}



// export const colors = {
//   primary: '#FF6C00',
//   secondary: '#A43287',
//   grey: '#C4C4C4',
//   greyMedium: '#999999',
//   greyLight: '#CCCCCC',
//   greyExtraLight: '#F8F8F8',
//   greyDark: '#6F6F6F',
//   greyDark2: '#777777',
//   greyExtraDark: '#212121'
// }

// const sizes = {
//   extraSmall: '12px',
//   small: '14px',
//   medium: '16px',
//   large: '20px',
//   extraLarge: '24px'
// }

// const theme = {
//   fontFamily: 'Roboto',
//   backgroundColor: colors.greyExtraLight,
//   colors,
//   sizes
// }

// export default theme
