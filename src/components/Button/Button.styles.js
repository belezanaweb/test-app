import styled from 'styled-components/native'

export const ButtonContainer = styled.Pressable`
  justify-content: center;
  height: 36px;
  background: ${props => (props.primary ? props.theme.colors.primary : '#ffffff')};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
`

export const ButtonLabel = styled.Text`
  font-family: Roboto;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${props => (props.primary ? '#ffffff' : props.theme.colors.primary)};
`
