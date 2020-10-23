import { normalize } from '../util/normalizeFonts'

const colors = {
  primary: '#FF6C00',
  secondary: '#212121',
  white: '#ffffff',
  background: '#E5E5E5E5',
  grey: '#c4c4c4',
  orangeDarkest: '#E66100',
  discount: '#999999',
  greyLight: '#6F6F6F',
  greyAccordion: '#777777',
  line: '#eeeeee',
  purple: '#A43287',
}

const fonts = {
  letterSpacing: `${normalize(0.31)}px`,
  spacingNano: `${normalize(5)}px`,
  nano: `${normalize(9)}px`,
  smallest: `${normalize(10)}px`,
  label: `${normalize(11)}px`,
  small: `${normalize(12)}px`,
  smallLarge: `${normalize(13)}px`,
  medium: `${normalize(14)}px`,
  mediumSmall: `${normalize(15)}px`,
  mediumLarge: `${normalize(16)}px`,
  xLarge: `${normalize(17)}px`,
  xxLarge: `${normalize(18)}px`,
  largeNano: `${normalize(20)}px`,
  largeSmall: `${normalize(24)}px`,
  buttonHeight: `${normalize(36)}px`,
  price: `${normalize(32)}px`,
  image: `${normalize(108)}px`,
  imageHighlight: `${normalize(163)}px`,
  maxWidthTitles: `${normalize(280)}px`,
  brandMaxWidth: `${normalize(86)}px`,
}

export { colors, fonts }
