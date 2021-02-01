import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    common: {
      black: '#212121',
      white: '#ffffff',
    },
    primary: '#FF6C00',
    secondary: '#FFFFFF',
    background: '#E5E5E5',
    statusBar: '#ffffff',
    smooth: '#C4C4C4',
    dashed: '#999999',
    contrast: '#6F6F6F',
  },
  dimensions: {
    common: {
      margin: {
        extraSmall: 3,
        small: 5,
        normal: 10,
        large: 16,
        extraLarge: 18,
      },
      borderRadius: 4,
    },
    text: {
      size: {
        small: 11,
        normal: 12,
        large: 14,
        extraLarge: 17,
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
    image: {
      small: {
        height: 108,
        width: 108,
      },
      large: {
        height: 163,
        width: 163,
      },
    },
  },
};

export default theme;
