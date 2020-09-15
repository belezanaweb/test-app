import React, { useState } from 'react'
import { StyleSheet, Linking } from 'react-native'
import colors from '../../constants/colors'

import { TextRegular } from '../../atoms/Titles'
import { Box, TouchableButton } from '../../atoms/Spaces'
import Icons from '../../atoms/Icons'

//import FadeInOut from 'react-native-fade-in-out'

import HTMLView from 'react-native-htmlview'

function Accordon({ title, subtitle, content }) {
  const openLink = url => {
    url = `https://belezanaweb.com.br${url}`

    Linking.openURL(url)
  }

  const regex = /(<([^>]+)>)/gi

  return (
    <>
      <Box pb={3} bg={'transparent'}>
        <>
          <TextRegular color={colors.grayseven} mt={5} align={'flex-start'} size={12}>
            <HTMLView
              onLinkPress={url => openLink(url)}
              value={`<p>${content

                .replace('<br>', '')
                .replace('<p>', '')
                .replace('</p>', '')
                .replace('&nbsp;', '')}</p>`}
              stylesheet={styles}
            />
          </TextRegular>
        </>
      </Box>
    </>
  )
}

export default Accordon

const styles = StyleSheet.create({
  p: {
    color: colors.grayseven,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: 'Roboto',
    margin: 0,
    fontWeight: 'normal'
  },
  a: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: colors.orange,
    fontSize: 12
  }
})
