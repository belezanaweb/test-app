import { StyleSheet } from 'react-native';

export const ThemeColors = {
  black: '#212121',
  primary: '#ff6c00',
  lightGray: '#c4c4c4',
  mediumGray: '#999999',
  darkGray: '#6f6f6f',
  purple: '#a43287',
}

export const ThemeStyles = {
  solidButton: StyleSheet.create({
    container: {
      backgroundColor: ThemeColors.primary,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      height: 36,
      marginTop: 10,
    },
    text: {
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: 15,
      fontWeight: 'bold',
    }
  }),
  outlinedButton: StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: ThemeColors.primary,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      marginTop: 12,
    },
    text: {
      color: ThemeColors.primary,
      textTransform: 'uppercase',
      fontSize: 16,
      fontWeight: 'bold',
    }
  }),
  loading: StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      backgroundColor: '#ffffff',
      width: '100%',
      height: '100%',
    },
  })
}
