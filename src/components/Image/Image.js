import React from 'react'
import { Image } from 'react-native'

const ImageStyled = props => {
  return (
    <Image
      {...props}
      style={{
        width: 50,
        height: 50
      }}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png'
      }}
    />
  )
}

export default ImageStyled
