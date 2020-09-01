/**
 * @format
 */

import { StyleSheet } from 'react-native'

import { Colors } from '../../../Theme/colors'

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY_COLOR,
    padding: 10,
    borderRadius: 4
  },
  buttonFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  buttonText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14
  },
  originalPrice: {
    color: Colors.SECONDARY_COLOR,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16
  },
  priceDiscount: {
    color: Colors.GRAY,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 13,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  priceSpecification: {
    color: Colors.DARK_GRAY,
    fontWeight: 'bold',
    fontSize: 17
  }
})
