import styled from 'styled-components/native'

export const CodText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontName};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`

export const ProductDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontName};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.fontBlack};
`
export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontName};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.orange};
`

export const DiscountPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontName};
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-decoration-line: line-through;
  color: ${({ theme }) => theme.colors.darkGray};
`
interface IPaddingSeparatorContainer {
  padding?: number;
}

export const PaddingSeparatorContainer =
  styled.View <
  IPaddingSeparatorContainer >
  `
  padding: ${({ padding }) => (padding ? `${padding}px` : '10px')};
`

export const ProductImage = styled.Image`
  width: 108px;
  height: 108px;
  margin-bottom: 10px;
`

export const ProductImageContainer = styled.View`
  align-items: center;
`

export const ItemContainer = styled.View`
  flex-direction: row;
`

export const ProductPriceContainer = styled.View`
  flex: 1;
  justify-content: center;
`
