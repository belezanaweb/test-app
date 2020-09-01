/**
 * @format
 */

import { StyleSheet, Platform } from 'react-native'

import { Colors } from '../../../Theme/colors'

export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.BACKGROUND,
    height: '100%'
  },
  textTop: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8,
    padding: 10
  },
  textRead: {
    color: Colors.PINK,
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
    elevation: 5
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

  image: {
    marginTop: 12,
    alignContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 10
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
