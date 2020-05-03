import React from 'react'
import { ActivityIndicator } from 'react-native'

import colors from '../../theme/colors'
import Text from '../Text'
import { Container } from './styles'

export default function Loading(props) {
  return (
    <Container>
      <ActivityIndicator size="small" color={colors.secundary} />
      <Text color={colors.secundary}>{props.children}</Text>
    </Container>
  )
}
