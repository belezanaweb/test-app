import React from 'react'
import ReadMore from 'react-native-read-more-text'

import { Text } from '../../components'
import { Container, ContainerButton } from './styles'
import colors from '../../theme/colors'

const ShowMore = props => {
  const renderTruncatedFooter = handlePress => {
    return (
      <ContainerButton>
        <Text type="h4" color={colors.secundary} onPress={handlePress}>
          Continuar lendo
        </Text>
      </ContainerButton>
    )
  }

  const renderRevealedFooter = handlePress => {
    return (
      <ContainerButton>
        <Text type="h4" color={colors.secundary} onPress={handlePress}>
          Mostrar menos
        </Text>
      </ContainerButton>
    )
  }

  return (
    <Container>
      <ReadMore
        numberOfLines={3}
        renderTruncatedFooter={renderTruncatedFooter}
        renderRevealedFooter={renderRevealedFooter}
      >
        <Text type="h5" color={colors.darkOpacity}>
          {props.children}
        </Text>
      </ReadMore>
    </Container>
  )
}

export default ShowMore
