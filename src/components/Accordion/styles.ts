import styled from 'styled-components/native'
import { colors, fonts } from '../variables'

export const Container = styled.View``

export const Description = styled.Text`
  font-size: ${fonts['small']};
  color: ${colors.greyAccordion};
  font-weight: 400;
`
export const Line = styled.View`
  height: 1px;
  background: ${colors.line};
  margin: ${fonts['smallest']} 0;
`
export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ReadMore = styled.Text`
  font-size: ${fonts['smallLarge']};
  font-weight: 500;
  color: ${colors.purple};
`
