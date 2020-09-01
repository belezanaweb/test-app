/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react'
import { Image, Text } from 'react-native'
import PropTypes from 'prop-types'

const ProductImage: () => React$Node = ({ imageObjects, width, height }) => {
  const [pathImage, setPathImage] = useState(undefined)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    imageObjects?.map((item, index) => {
      //console.log('imageObjects', item)
      if (item.featured) {
        setPathImage(item.medium)
        //console.log('path', item.medium)
      }
    })
  }, [])

  return <Image source={{ uri: pathImage }} style={{ width, height }} />
}

ProductImage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  imageObjects: PropTypes.array
}

export default ProductImage
