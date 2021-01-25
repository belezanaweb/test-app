// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: string;
      secondary: string;
      background: string;
      statusBar: string;
    };
    dimensions: {
      text: {
        size: {
          small: number;
          normal: number;
          large: number;
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
    };
  }
}
