/**
 * @format
 */

import { StyleSheet } from 'react-native'

import { Colors } from '../../../Theme/colors'

export default StyleSheet.create({
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
