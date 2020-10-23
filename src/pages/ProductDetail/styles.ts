import styled from 'styled-components/native'
import { colors, fonts } from '../../components/variables'

export const ScrollView = styled.ScrollView`
  flex: 1;
`

export const Container = styled.View`
  padding: ${fonts['smallest']};
  margin: ${fonts['smallest']};
  background: white;
  border-radius: 4px;
  flex: 1;
  margin-bottom: ${fonts['mediumSmall']};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

export const Title = styled.Text`
  font-size: ${fonts['largeNano']};
  line-height: ${fonts['largeSmall']};
  color: ${colors.secondary};
  font-weight: 500;
  max-width: ${fonts['maxWidthTitles']};
`

export const Image = styled.Image`
  width: ${fonts['imageHighlight']};
  height: ${fonts['imageHighlight']};
  align-self: center;
  margin-top: ${fonts['small']};
`
export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${fonts['smallLarge']};
`

export const WrapperPrice = styled.View``

export const Promotion = styled.Text`
  font-size: ${fonts['medium']};
  font-weight: 400;
  text-decoration-line: line-through;
  color: ${colors.discount};
`

export const Price = styled.Text`
  font-size: ${fonts['price']};
  font-weight: 500;
  color: ${colors.primary};
`

export const Plots = styled.Text`
  font-weight: 400;
  font-size: ${fonts['xLarge']};
  color: ${colors.greyLight};
`

export const WrapperCode = styled.View``

export const Brand = styled.Text`
  font-weight: 500;
  font-size: ${fonts['xxLarge']};
  max-width: ${fonts['brandMaxWidth']};
  margin-bottom: ${fonts['spacingNano']};
  color: ${colors.secondary};
  line-height: ${fonts['largeSmall']};
`
export const Code = styled.Text`
  font-size: ${fonts['medium']};
  line-height: ${fonts['mediumLarge']};
  font-weight: 400;
  color: ${colors.grey};
`

export const TitleDescription = styled.Text`
  font-size: ${fonts['mediumLarge']};
  color: ${colors.secondary};
  font-weight: 500;
  margin-top: ${fonts['xxLarge']};
  margin-bottom: ${fonts['spacingNano']};
`
export const ContainerAccordion = styled.View``

export const ContainerModalConfirmation = styled.View``
export const TitleModalConfirmation = styled.Text`
  font-size: ${fonts['mediumLarge']};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${fonts['smallest']};
`
export const DescriptionModalConfirmation = styled.Text`
  font-size: ${fonts['smallLarge']};
  font-weight: 400;
  text-align: left;
  margin-bottom: ${fonts['largeSmall']};
`
