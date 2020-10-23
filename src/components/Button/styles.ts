import styled from 'styled-components/native'
import { colors, fonts } from '../variables'
import { ActivityIndicator } from 'react-native'

interface LoadingProps {
  isLoading: boolean
}

interface ButtonProps {
  outline?: boolean
}

interface TextProps extends ButtonProps {}

export const Title = styled.Text<TextProps>`
  font-size: ${fonts['medium']};
  font-weight: 700;
  color: ${props => (props.outline ? colors.primary : colors.white)};
  text-transform: uppercase;
`

export const Button = styled.TouchableOpacity<ButtonProps>`
  background: ${props => (props.outline ? 'transparent' : colors.primary)};
  border: ${props => (props.outline ? `2px solid ${colors.primary}` : 'none')};
  border-radius: 4px;
  align-items: center;
  height: ${fonts['buttonHeight']};
  justify-content: center;
`

export const ContainerLoading = styled(ActivityIndicator).attrs({
  color: colors.orangeDarkest,
  size: 'small',
})<LoadingProps>`
  flex: 1;
`
