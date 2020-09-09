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

  console.log(id, image, title)

  const cat = {
    uri: image ? image : imgDefault,
    width: 108,
    height: 108,
    cache: 'force-cache'
  }

  return (
    <Box
      mb={10}
      bg={colors.white}
      border={4}
      position={'relative'}
      shadow={true}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 5
      }}
      pr={10}
      pl={10}
      pt={10}
      fd={'row'}
    >
      <Box mr={10} flex={0.3} bg={colors.white}>
        <Image source={cat} />
        <TextRegular size={12} ml={margin} mt={margin} mb={5} align={'center'} color={colors.gray}>
          cod: {id}
        </TextRegular>
      </Box>

      <Box flex={0.7} bg={colors.white}>
        <TextRegular size={12} mr={5} mb={5} align={'flex-start'} color={colors.black}>
          {title}
        </TextRegular>

        <TextRegular size={11} mr={5} mb={5} align={'flex-start'} color={colors.gray}>
          R${price.toFixed(2)}
        </TextRegular>

        <TextRegular size={14} mr={5} mb={5} align={'flex-start'} color={colors.orange}>
          R${originalPrice ? originalPrice.toFixed(2) : price.toFixed(2)}
        </TextRegular>

        <Button
          bg={colors.orange}
          textColor={colors.white}
          title={'VER DETALHES'}
          onPress={() => {
            navigation.navigate('Product', { id: id })
          }}
        />
      </Box>
    </Box>
  )
}

export default CardProduct
