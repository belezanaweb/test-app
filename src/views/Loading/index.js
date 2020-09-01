/**
 * @author Vanderson de Moura Vauruk
 */

import React from 'react'

import { Colors } from '../../Theme/colors'
import { View, ActivityIndicator } from 'react-native'
import Styles from './styles'
const Loading: () => React$Node = ({ navigation }) => {
  return (
    <>
      <View style={[Styles.container, Styles.horizontal]}>
        <ActivityIndicator size="large" color={Colors.SECONDARY_COLOR} />
      </View>
    </>
  )
}

export default Loading
