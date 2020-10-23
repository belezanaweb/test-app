import styled from 'styled-components/native'
import { fonts, colors } from '../variables'

export const Input = styled.TextInput`
  border: 1px solid ${colors.grey};
  height: ${fonts['buttonHeight']};
  margin-bottom: ${fonts['mediumLarge']};
  padding-left: ${fonts['spacingNano']};
`
export const Label = styled.Text`
  font-size: ${fonts['small']};
  margin-bottom: ${fonts['spacingNano']};
`
