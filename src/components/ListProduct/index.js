import React from 'react'

import { Image, View } from 'react-native'

import Card from '../Card'
import Typography from '../Typography'
import Container from '../Container'
import Button from '../Button'

import { CardSide } from './style'
import COLORS from '../../constants/COLORS'

export default props =>
  props.data.map((item, index) => (
    <Card key={index} {...props} flex1 paddingbottom style={{ marginBottom: 10 }}>
      <Container height100 nopadding direction={'row'}>
        <CardSide>
          {item.image && <Image style={{ flex: 1 }} source={{ uri: item.image.large }} />}
          <Typography style={{ marginTop: 5 }} color={COLORS.GRAY_LIGHT}>
            Code {item.code}
          </Typography>
        </CardSide>
        <View style={{ width: 10 }} />
        <CardSide style={{ justifyContent: 'space-between' }}>
          <Typography textleft>{item.name}</Typography>
          <View>
            {item.maxPrice !== item.price && (
              <Typography linethrough color={COLORS.GRAY_LIGHT} textleft>
                {'R$ '}
                {item.maxPrice}
              </Typography>
            )}
            <Typography bold color={COLORS.ORANGE} textleft fontsize={'15px'}>
              {'R$ '}
              {item.price}
            </Typography>
          </View>
          <Button
            primary
            uppercase
            title="Ver detalhes"
            onPress={() => props.navigation.navigate('Details', { item })}
          />
        </CardSide>
      </Container>
    </Card>
  ))
