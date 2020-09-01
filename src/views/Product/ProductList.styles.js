/**
 * @format
 */

import { StyleSheet } from 'react-native'

import { Colors } from '../../Theme/colors'

export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.BACKGROUND,
    width: '100%',
    height: '100%'
  },
  header: {
    alignContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10
  },
  fontHeader: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  buttonText: {
    color: Colors.SECONDARY_COLOR,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 4,
    margin: 10,
    borderWidth: 2,
    borderColor: Colors.SECONDARY_COLOR
  }
})
