import styled from 'styled-components/native'

import colors from '../../theme/colors'

const typeButtons = {
  primary: {
    background: colors.primary,
    border: `none`,
    color: colors.light
  },
  secundary: {
    background: colors.transparent,
    border: `2px solid ${colors.primary}`,
    color: colors.primary
  }
}

export const ContainerButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 13px;
  margin-bottom: 13px;
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 4px;
  background-color:
  ${props => {
    if (props.secundary)
      return typeButtons.secundary.background

    return typeButtons.primary.background
  }};
  border: ${props => {
    if (props.secundary)
      return typeButtons.secundary.border

    return typeButtons.primary.border    
  }};
`

export const Text = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  font-family: Helvetica Neue;
  color:
   ${props => {
   if (props.secundary)
      return typeButtons.secundary.color

    return typeButtons.primary.color
  }};
`