import { StyleSheet } from 'react-native';

export const ThemeColors = {
  black: '#212121',
  primary: '#ff6c00',
  lightGray: '#cccccc',
  mediumGray: '#999999',
  darkGray: '#6f6f6f',
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
  })
}
