import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 0 10px 10px 10px;
  padding: 8px 10px;
  background-color: #fff;
`

export const ProductName = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
`

export const ProductImageContainer = styled.View`
  align-items: center;
  margin: 12px 0;
`

export const ProductImage = styled.Image`
  align-items: center;
  height: 163px;
  width: 163px;
`

export const ProductInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 9px;
`

export const ProductCode = styled.Text`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #c4c4c4;
`

export const ProductBrand = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #212121;
`

export const LeftContainer = styled.View``
export const RightContainer = styled.View``

export const ProductPreviousCost = styled.Text`
  font-family: Roboto;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #cccccc;
`

export const ProductCurrentCost = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  color: #ff6c00;
`

export const ProductPaymentMethod = styled.Text`
  font-family: Roboto;
  font-weight: normal;
  font-size: 17px;
  color: #6f6f6f;
`

export const ButtonContainer = styled.View`
  margin: 13px -5px;
`
