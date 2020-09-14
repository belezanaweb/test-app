import React, { useState, useEffect } from 'react'
import { Animated, Easing, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function Loading({ name, size, color }) {
  return (
    <>
      <Icon name={name} size={size} color={color} />
    </>
  )
}

export default Loading
