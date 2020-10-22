import styled from 'styled-components/native'
import { colors } from '../variables'

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
`

export const Button = styled.TouchableOpacity`
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${colors.primary};
  border-radius: 4px;
  align-items: center;
  height: 36px;
  justify-content: center;
`
