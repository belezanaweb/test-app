import * as styledComponents from 'styled-components/native'

interface ITheme {
  background: string
  backgroundPrimary: string
  primary: string
  primaryText: string
  blueDark: string
  blueDark10: string
  blueLight: string
  green: string
  orange: string
  pink: string
  purple: string
  red: string
  yellow: string
  yellow10: string
  white: string
  black: string
  black60: string
  grayDark: string
  grayDark30: string
  grayDark10: string
  grayLight: string
}

export const dark: ITheme = {
  background: '#333',
  backgroundPrimary: '#242424',
  black: '#FFF',
  black60: 'rgba(0, 0, 0, 0.6)',
  grayDark: '#272727',
  grayDark30: 'rgba(103, 111, 137, 0.3)',
  grayDark10: 'rgba(103, 111, 137, 0.1)',
  grayLight: '#ccc',
  white: '#FFFFFF',
  primary: '#E66100',
  primaryText: '#FFF',
  blueDark: '#0B5EDB',
  blueDark10: 'rgba(11, 94, 219, 0.1)',
  blueLight: '#0090C7',
  green: '#009954',
  orange: '#EE4C00',
  pink: '#FA1E97',
  purple: '#AA29E6',
  red: '#FF160A',
  yellow: '#F09400',
  yellow10: 'rgba(240, 148, 0, 0.1)'
}

export const light: ITheme = {
  background: '#f1f1f1',
  backgroundPrimary: '#FFF',
  black: '#212121',
  black60: 'rgba(0, 0, 0, 0.6)',
  grayDark: '#777',
  grayDark30: 'rgba(103, 111, 137, 0.3)',
  grayDark10: 'rgba(103, 111, 137, 0.1)',
  grayLight: '#999999',
  white: '#FFFFFF',
  primary: '#E66100',
  primaryText: '#FFF',
  blueDark: '#0B5EDB',
  blueDark10: 'rgba(11, 94, 219, 0.1)',
  blueLight: '#0090C7',
  green: '#009954',
  orange: '#EE4C00',
  pink: '#FA1E97',
  purple: '#AA29E6',
  red: '#FF160A',
  yellow: '#F09400',
  yellow10: 'rgba(240, 148, 0, 0.1)'
}
const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ITheme>

export { css, ThemeProvider }
export default styled
