import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const BackgroundDegrade = () => {
  return (
    <LinearGradient
      colors={['transparent', 'rgba(255, 255, 255, 2)']}
      end={{ x: 0, y: 1 }}
      start={{ x: 0, y: 0.7 }}
      style={{ top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }}
      testID="BackgroundDegrade"
    />
  )
}

export default BackgroundDegrade
