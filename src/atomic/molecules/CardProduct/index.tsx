import React from 'react'
import { Image, Dimensions, View } from 'react-native'

import colors from '../../constants/colors'

import { Box, BoxTouchable } from '../../atoms/Spaces'
import { TextRegular } from '../../atoms/Titles'

import Icons from '../../atoms/Icons'

function CardProduct({ title, image, id, navigation, date }) {
  const margin = 16

  const cat = {
    uri: image,
    width: 108,
    height: 108
  }

  return (
    <Box
      ml={5}
      mb={10}
      bg={colors.white}
      border={4}
      position={'relative'}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
      }}
      pt={5}
      pl={5}
      pb={5}
      pr={5}
      fd={'row'}
    >
      <Box flex={0.3} bg={colors.white}>
        <Image source={cat} />
        <TextRegular size={12} ml={margin} mt={margin} mb={5} align={'center'} color={colors.gray}>
          cod: {id}
        </TextRegular>
      </Box>

      <Box flex={0.7} bg={colors.white}>
        <TextRegular size={12} mr={5} mb={5} align={'flex-start'} color={colors.black}>
          {title}
        </TextRegular>

        <TextRegular size={14} mr={5} mb={5} align={'flex-start'} color={colors.orange}>
          {title}
        </TextRegular>

        <TextRegular size={11} ml={margin} mb={margin} align={'flex-start'} color={'red'}>
          {date}
        </TextRegular>
      </Box>
    </Box>
  )
}

export default CardProduct
