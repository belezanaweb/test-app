import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  borderRadius: '4',
  palette: {
    common: {
      black: '#212121',
      white: '#ffffff',
    },
    primary: '#FF6C00',
    secondary: '#FFFFFF',
    background: '#E5E5E5',
    statusBar: '#ffffff',
  },
  dimensions: {
    text: {
      size: {
        small: 11,
        normal: 12,
        large: 14,
      },
      weight: {
        normal: 400,
        bold: 700,
      },
      fontFamily: {
        default: 'Roboto',
        android: {
          normal: 'Roboto',
          bold: 'Roboto_bold',
        },
        ios: {
          normal: 'Roboto',
          bold: 'Roboto-bold',
        },
      },
    },
    button: {
      height: 36,
    },
  },
};
