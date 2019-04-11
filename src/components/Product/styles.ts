import styled from 'theme'
import { StyleSheet } from 'react-native'


export const ProductBlock = styled.View`
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 5px 10px;
  padding: 10px;

  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  elevation: 4;
`

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 10px 0;
`

export const Col = styled.View<{ right?: boolean }>`
  flex: 1;
`

export const ColRight = styled.View<{ right?: boolean }>`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`


export const ProductText = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: #212121;
  margin-bottom: 10px;
`

export const ProductCode = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #c4c4c4;
  margin-top: 10px;
`

export const BrandName = styled.Text`
  font-weight: 500;
font-size: 20px;
line-height: 24px;
color: ${props => props.theme.black};
`

export const ProductPrice = styled.Text`
  font-weight: 500;
  font-size: 24px;
  color: ${props => props.theme.primary};
`

export const ProductPricePayment = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  color: #6F6F6F;
`

export const ProductPriceOld = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  text-decoration-line: line-through;
  color: #999999;
`

export const ProductDescTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.black};
  margin-top: 10px;
`


export const htmlStyle = StyleSheet.create({
  br: {
    height: 2,
  },
  p: {},
  strong: {},
})


export const CarouselBackgroundView = styled.View`
  height: 250px;
  width: 100%;
`

export const ProductImage = styled.Image`
  top: 25px;
  box-shadow: 5px 10px;
  width: 150px;
  height: 200px;
  resize-mode: contain;
`

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 200px;
`
