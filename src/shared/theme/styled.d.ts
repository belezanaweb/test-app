// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      }
      primary: string;
      secondary: string;
      background: string;
      statusBar: string;
   }
  }
}