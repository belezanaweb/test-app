import styled from 'theme'

interface IProductBlock {
  border?: boolean
}

export const ProductBlock = styled.View<IProductBlock>`
  height: 140px;
  flex-direction: row;
  background-color: ${props => props.theme.backgroundPrimary};
  ${props => props.border && `
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      margin: 5px 10px;
      shadow-color: #000;
      shadow-offset: 0 0;
      shadow-opacity: 0.1;
      elevation: 4;
`}
  padding: 10px;
`

export const ProduckBlockImage = styled.View`
  width: 120px;
  justify-content: center;
  align-items: center;
`

export const ProductBlockDetail = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const ProductCode = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #c4c4c4;
  margin-top: 10px;
`

export const PriceBlock = styled.View`
`

export const ProductText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${props => props.theme.black};
  margin-bottom: 10px;
`

export const ProductPrice = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.primary};
`

export const ProductPriceOld = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-decoration-line: line-through;
  color: ${props => props.theme.grayLight};
`
