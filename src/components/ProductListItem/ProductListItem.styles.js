import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  height: 145px;
  padding: 5px;
  margin-top: ${props => (props.isFirstItem ? '0' : '10px')};
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

export const LeftContent = styled.View`
  width: 122px;
  justify-content: space-between;
`

export const RightContent = styled.View`
  flex: 2;
  justify-content: space-between;
`

export const ProductCode = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: ${props => props.theme.colors.grey1};
`

export const ProductName = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.colors.black1};
`

export const ProductCostContainer = styled.View``

export const ProductPreviousCost = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-decoration-line: line-through;
  color: ${props => props.theme.colors.grey2};
`

export const ProductCurrentCost = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.primaryDark};
`

export const ProductImage = styled.Image`
  height: 108px;
  width: 108px;
`
