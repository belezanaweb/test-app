import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

export const AbsoluteLinearGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Button = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ButtonLabel = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #a43287;
`

export const Divider = styled.View`
  margin: 14px 0 4px 0;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
`

export const Container = styled.View``

export const Title = styled.Text`
  font-family: Roboto;
  margin: 5px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.307692px;
  color: #212121;
`

export const Body = styled.Text`
  font-family: Roboto;
  font-size: 12px;
  line-height: 19px;
  color: #777777;
`
