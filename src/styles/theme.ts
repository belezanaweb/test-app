export const colors = {
  white: '#ffffff',
  orange: '#ff6c00',
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
