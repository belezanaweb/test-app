import React, { useState, useEffect } from 'react'
import { ImageBackground, Dimensions, Animated } from 'react-native'

import colors from '../../atomic/constants/colors'
import { TextRegular } from '../../atomic/atoms/Titles'
import { Background } from './styles'

function Splash({ navigation }) {
  const w = Dimensions.get('window').width
  const h = Dimensions.get('window').height

  const [opacity] = useState(new Animated.Value(0))

  const animatedTagStyle = {
    opacity: opacity,
    flex: 1
  }

  useEffect(() => {
    startAnimations()

    setTimeout(() => {
      navigation.replace('Home');
    }, 4000);
  }, [])

  const startAnimations = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  return (
    <ImageBackground style={{ width: w, height: h }} source={require('../../assets/splash.jpeg')}>
      <Animated.View style={[animatedTagStyle]}>
        <Background>
          <TextRegular size={36} color={colors.white}>
            BELEZA NA
          </TextRegular>
          <TextRegular size={30} color={colors.white}>
            WEB
          </TextRegular>

          <TextRegular mt={25} size={10} color={colors.white}>
            Powered by Gabriel Nicolau
          </TextRegular>
        </Background>
      </Animated.View>
    </ImageBackground>
  )
}

export default Splash
