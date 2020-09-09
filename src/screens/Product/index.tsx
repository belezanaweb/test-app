import React, { useState, useEffect } from 'react'
import {
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  View,
  Animated,
  PixelRatio
} from 'react-native'

import { BoxSafe, Box } from '../../atomic/atoms/Spaces'

import Header from '../../atomic/atoms/Header'

import Loading from '../../atomic/atoms/Loading'
import colors from '../../atomic/constants/colors'
import { connect } from 'react-redux'

import * as productAction from '../../redux/actions/productActions'

import moment from 'moment'
import { TextRegular, TextTag } from '../../atomic/atoms/Titles'
import Icons from '../../atomic/atoms/Icons'

import GeneralInfo from '../../atomic/organisms/GeneralInfo'
import BoxTags from '../../atomic/organisms/BoxTags'

function Product({ navigation, _getInfo, dataProduct }) {
  const [id] = useState(navigation.state.params.id)
  const [title] = useState(navigation.state.params.title)
  const [image] = useState(navigation.state.params.image)

  const [opacity] = useState(new Animated.Value(0))
  const [left] = useState(new Animated.Value(0))

  const animatedTagStyle = {
    opacity: opacity
  }

  const cat = {
    uri: `https://image.tmdb.org/t/p/w500/${image}`,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  }

  const img = {
    uri: `https://image.tmdb.org/t/p/w500/${image}`,
    width:
      Dimensions.get('window').width >= 500 ? 500 / 1.25 : Dimensions.get('window').width / 1.25,
    height:
      Dimensions.get('window').width >= 500 ? 700 / 1.75 : Dimensions.get('window').height / 1.7,
    resizeMode: 'cover'
  }

  //getting request token
  useEffect(() => {
    _getInfo(id)

    startAnimations()
  }, [])

  const startAnimations = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }),
      Animated.timing(left, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      })
    ]).start()
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.graffit
      }}
    >
      <ImageBackground
        blurRadius={20}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height}
        style={{ flex: 1, resizeMode: 'cover' }}
        source={cat}
      >
        <Header backButton={true} title={'DETALHES DO PRODUTO'} navigation={navigation} />

        <ScrollView
          style={{ flex: 1, marginBottom: 20 }}
          contentContainerStyle={{
            marginTop: 24
          }}
        >
          <Image source={img} style={{ alignSelf: 'center' }} />

          <Box bg={'transparent'} ml={22} mr={22}>
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: left.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-600, 0]
                    })
                  }
                ]
              }}
            >
              <GeneralInfo
                time={dataProduct.data.runtime}
                count={dataProduct.data.vote_count}
                popularity={dataProduct.data.popularity}
                average={dataProduct.data.vote_average}
              />
            </Animated.View>

            <TextRegular size={30} mt={16} color={colors.gold}>
              {title}
            </TextRegular>

            <Animated.View style={[animatedTagStyle]}>
              <BoxTags data={dataProduct.data.genres} />
            </Animated.View>
            {dataProduct.data.production_companies && (
              <>
                <TextRegular align={'flex-start'} size={10} color={colors.white} mb={5}>
                  Produced By
                </TextRegular>
                <Box bg={'transparent'} mb={20}>
                  {dataProduct.data.production_companies.map((item, id) => {
                    return (
                      <TextRegular
                        key={id}
                        color={colors.gold}
                        align={'flex-start'}
                        mr={5}
                        size={14}
                      >
                        {item.name}
                      </TextRegular>
                    )
                  })}
                </Box>
              </>
            )}

            <TextRegular align={'flex-start'} size={10} color={colors.white} mb={5}>
              Overview
            </TextRegular>
            <TextRegular align={'flex-start'} size={18} color={colors.gold} mb={20}>
              {dataProduct.data.overview}
            </TextRegular>
          </Box>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const mapStateToProps = state => ({
  dataProduct: state.productReducer
})

const mapDispatchToProps = dispatch => {
  return {
    _getInfo: data => {
      dispatch(productAction.ProductRequest(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
