import styled from 'styled-components/native'
import { colors } from '../variables'
export const Container = styled.View`
  border-radius: 4px;
  flex-direction: row;
  background: ${colors.white};
  border-radius: 4px;
  padding: 10px;
`

export const ContainerImage = styled.View`
  margin-right: 9px;
`

export const CodeProduct = styled.Text`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  color: ${colors.grey};
`
export const ContainerInformations = styled.View`
  justify-content: space-between;
  flex: 1;
`

export const Price = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  color: ${colors.orangeDarkest};
`

export const Description = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${colors.secondary};
`
