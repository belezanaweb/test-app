import styled from 'theme'

interface IProps {
  border?: boolean
  primary?: boolean
  margin?: boolean
}

export const Button: JSX.Element = styled.TouchableHighlight<IProps>`
  background-color: ${props => props.border ? '#FFF' : props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin: ${props => props.margin ? 10 : 0}px
`

export const ButtonText: JSX.Element = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => !props.primary ? '#FFF' : props.theme.primary};
`
