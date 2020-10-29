export const colors = {
  white: '#ffffff',
  orange: '#ff6c00',
  lightBackground: '#F8F8F8',
  fontBlack: '#212121',
  gray: '#c4c4c4',
  darkGray: '#999999'
};

export const fonts = {
  fontName: 'Roboto',
};

export const theme = {
  colors,
  fonts,
};

export type theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
