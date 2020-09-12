import styled from 'styled-components/native'
import Text from '../../../Text/index'

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
  min-height: 165px;
`

export const ContentImage = styled.View`
  flex: 2;
  align-items: center;
  justify-content: space-between;
`

export const ContentDetails = styled.View`
  flex: 3;
  justify-content: space-around;
`
export const ContentPrices = styled.View`
  padding: 10px 0 10px;
`

export const TextCod = styled(Text)`
  color: ${({ theme }) => `${theme.colors.grey}`};
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
`

export const TextTitle = styled(Text)`
  color: ${({ theme }) => `${theme.colors.greyExtraDark}`};
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`

export const TextPriceMax = styled(Text)`
  color: ${({ theme }) => `${theme.colors.greyMedium}`};
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-decoration-line: line-through;
`

export const TextPrice = styled(Text)`
  color: ${({ theme }) => `${theme.colors.primary}`};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`
