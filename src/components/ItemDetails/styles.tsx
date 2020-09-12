import styled, { css } from 'styled-components/native'
import Text from './../Text/index'

export const Content = styled.View`
  align-content: center;
  flex-direction: column;
  padding: 10px;
`
export const Details = styled.View`
  justify-content: space-around;
`

export const ContentImage = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`
export const ProductName = styled(Text)`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-right: 20px;
    color: ${theme.colors.greyExtraDark};
  `}
`

export const PriceOld = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.greyLight};
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: line-through;
    margin-bottom: 8px;
  `}
`
export const Price = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    font-weight: normal;
    padding-top: 4px;
  `}
`
export const PriceInstallments = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.greyDark};
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    padding-top: 4px;
  `}
`

export const ContentNameAndCode = styled.View`
  flex-direction: column;
  align-self: flex-end;
`
export const ContentPrices = styled.View`
  flex-direction: column;
`

export const WrapperPriceAndName = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const ShortName = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.greyExtraDark};
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: right;
  `}
`
export const Code = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
  `}
`

export const TitleDescriptionProduct = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.greyExtraDark};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-top: 20px;
  `}
`
export const DescriptionProduct = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.greyDark2};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    margin-top: 20px;
  `}
`
