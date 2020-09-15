import React from 'react'
import { Image, Dimensions, View } from 'react-native'

import colors from '../../constants/colors'

import { Box, BoxTouchable } from '../../atoms/Spaces'
import { TextRegular } from '../../atoms/Titles'
import Button from '../../atoms/Button'

import Icons from '../../atoms/Icons'

function CardProduct({ title, image, id, navigation, date, originalPrice, price }) {
  const margin = 16

  const imgDefault =
    'https://lh3.googleusercontent.com/RiRMSl_w2LMN-a32b1l64KfrRxVyoBf5yJFzvCTLv4Q6E7IQIB5G__lMw6d-GJ2qUw'

  const cat = {
    uri: image ? image : imgDefault,

    height: 108,
    cache: 'force-cache'
  }

  return (
    <Box
      mb={10}
      bg={colors.white}
      border={4}
      position={'relative'}
      style={{
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      }}
      pr={5}
      pl={10}
      pt={5}
      fd={'row'}
    >
      <Box mr={10} flex={0.3} bg={colors.white}>
        <Image source={cat} />
        <TextRegular size={12} ml={margin} mt={margin} mb={5} align={'center'} color={colors.gray}>
          cod: {id}
        </TextRegular>
      </Box>

      <Box flex={0.7} bg={colors.white} pb={5}>
        <Box flex={1} bg={'transparent'}>
          <TextRegular size={12} mr={5} mb={15} align={'flex-start'} color={colors.black}>
            {title}
          </TextRegular>

          {originalPrice !== price && (
            <TextRegular
              decoration={'line-through'}
              size={11}
              mr={5}
              mb={5}
              align={'flex-start'}
              color={colors.gray}
            >
              R${originalPrice.toFixed(2)}
            </TextRegular>
          )}

          <TextRegular
            weight={'bold'}
            size={14}
            mr={5}
            mb={5}
            align={'flex-start'}
            color={colors.orange}
          >
            R${originalPrice ? originalPrice.toFixed(2) : price.toFixed(2)}
          </TextRegular>
        </Box>
        <Button
          bg={colors.orange}
          textColor={colors.white}
          title={'VER DETALHES'}
          onPress={() => {
            navigation.navigate('Product', { id: id, image: image })
          }}
        />
      </Box>
    </Box>
  )
}

export default CardProduct
