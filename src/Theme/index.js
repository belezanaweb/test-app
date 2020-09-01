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
    //paddingTop: 16,
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
    elevation: 5
  },
  loading: {}
})
