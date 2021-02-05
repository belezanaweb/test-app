// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
        royalHeath: string;
        softGrey: string;
      };
      primary: string;
      secondary: string;
      background: string;
      statusBar: string;
      smooth: string;
      dashed: string;
      contrast: string;
    };
    dimensions: {
      common: {
        margin: {
          extraSmall: number;
          small: number;
          normal: number;
          large: number;
          extraLarge: number;
        };
        borderRadius: number;
      };
      text: {
        size: {
          small: number;
          normal: number;
          large: number;
          extraLarge: number;
          bigLarge: number;
          ultraLarge: number;
        };
        weight: {
          normal: number;
          bold: number;
        };
        fontFamily: {
          default: string;
          ios: {
            normal: string;
            bold: string;
          };
          android: {
            normal: string;
            bold: string;
          };
        };
      };
      button: {
        height: number;
      };
      image: {
        small: {
          height: number;
          width: number;
        };
        large: {
          height: number;
          width: number;
        };
      };
    };
  }
}
