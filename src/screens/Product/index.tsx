import React, { useState, useEffect } from 'react'
import { Image, Dimensions, ScrollView, Animated, PixelRatio } from 'react-native'

import { BoxSafe, Box } from '../../atomic/atoms/Spaces'

import Header from '../../atomic/atoms/Header'

import Loading from '../../atomic/atoms/Loading'
import colors from '../../atomic/constants/colors'
import { connect } from 'react-redux'

import * as productAction from '../../redux/actions/productActions'

import { TextRegular } from '../../atomic/atoms/Titles'

function Product({ navigation, _getInfo, dataProduct, darkMode }) {
  const [id] = useState(navigation.state.params.id)
  const [title] = useState(navigation.state.params.title)
  const [image] = useState(navigation.state.params.image)

  const [opacity] = useState(new Animated.Value(0))
  const [left] = useState(new Animated.Value(0))

  const animatedTagStyle = {
    opacity: opacity
  }

  //getting request token
  useEffect(() => {
    _getInfo(id)

    //startAnimations()
  }, [])

  // const startAnimations = () => {
  //   Animated.parallel([
  //     Animated.timing(opacity, {
  //       toValue: 1,
  //       duration: 1500,
  //       useNativeDriver: true
  //     }),
  //     Animated.timing(left, {
  //       toValue: 1,
  //       duration: 1500,
  //       useNativeDriver: true
  //     })
  //   ]).start()
  // }

  return (
    <>
      <Header backButton={true} title={'DETALHES DO PRODUTO'} navigation={navigation} />
      <Box pl={10} pr={10} pb={10} bg={colors.lightGray}>
        {dataProduct.isLoading ? (
          <Loading name={'spinner'} size={30} color={colors.gold}></Loading>
        ) : (
          <Box border={4} flex={1} bg={colors.white} pl={5} pr={5} pt={5} pb={5}>
            <TextRegular>{dataProduct.data.name}</TextRegular>
          </Box>
        )}
      </Box>
    </>
  )
}

const mapStateToProps = state => ({
  dataProduct: state.productReducer,
  darkMode: state.appReducer.darkMode
})

const mapDispatchToProps = dispatch => {
  return {
    _getInfo: data => {
      dispatch(productAction.ProductRequest(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
