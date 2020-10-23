import styled from 'styled-components/native'
import { colors, fonts } from '../variables'
export const Container = styled.View`
  border-radius: 4px;
  flex-direction: row;
  background: ${colors.white};
  padding: ${fonts['smallest']};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

export const ContainerImage = styled.View`
  margin-right: ${fonts['nano']};
`

export const CodeProduct = styled.Text`
  font-size: ${fonts['small']};
  line-height: ${fonts['medium']};
  text-align: center;
  font-weight: 700;
  color: ${colors.grey};
`
export const ContainerInformations = styled.View`
  justify-content: space-between;
  flex: 1;
`

export const Price = styled.Text`
  font-size: ${fonts['medium']};
  line-height: ${fonts['mediumLarge']};
  font-weight: bold;
  color: ${colors.orangeDarkest};
`

export const Description = styled.Text`
  font-size: ${fonts['small']};
  line-height: ${fonts['medium']};
  color: ${colors.secondary};
`

export const Image = styled.Image`
  width: ${fonts['image']};
  height: ${fonts['image']};
  margin-bottom: ${fonts['mediumLarge']};
`

export const Discount = styled.Text`
  font-size: ${fonts['label']};
  font-weight: 400;
  line-height: ${fonts['smallLarge']};
  color: ${colors.discount};
  text-decoration-line: line-through;
`
