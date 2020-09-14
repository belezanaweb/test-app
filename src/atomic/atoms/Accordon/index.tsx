import React, { useState } from 'react'
import { View } from 'react-native'
import colors from '../../constants/colors'

import { TextRegular } from '../../atoms/Titles'
import { Box, TouchableButton } from '../../atoms/Spaces'
import Icons from '../../atoms/Icons'

import FadeInOut from 'react-native-fade-in-out'

function Accordon({ title, subtitle, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Box bg={'transparent'}>
        {!isOpen && (
          <>
            <TextRegular color={colors.grayseven} mt={5} align={'flex-start'} size={12}>
              {subtitle}
            </TextRegular>
          </>
        )}

        <FadeInOut visible={isOpen}>
          <TextRegular color={colors.grayseven} mt={5} align={'flex-start'} size={12}>
            {content}
          </TextRegular>
        </FadeInOut>

        <TouchableButton mt={30} onPress={() => setIsOpen(!isOpen)}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextRegular weight={'500'} size={13} color={colors.purple}>
              Continular lendo
            </TextRegular>

            <Icons name={'chevron-down'} color={colors.purple} size={13} />
          </View>
        </TouchableButton>
      </Box>
    </>
  )
}

export default Accordon
