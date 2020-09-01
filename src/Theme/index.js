/**
 * @format
 */

import { StyleSheet } from 'react-native'

import { Colors } from './colors'

export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.BACKGROUND,
    width: '100%',
    height: '100%'
  },
  textCode: {
    color: Colors.LIGHT_GRAY,
    fontSize: 14,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    ...Platform.select({
      ios: { fontFamily: 'Arial' },
      android: { fontFamily: 'Roboto' }
    })
  },
  buttonText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY_COLOR,
    padding: 10,
    borderRadius: 4
  },
  buttonTextSecondary: {
    color: Colors.SECONDARY_COLOR,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14
  },
  buttonSecondary: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.SECONDARY_COLOR
  }
})
