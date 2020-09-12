import styled, { css } from 'styled-components/native'
import Text from './../Text/Text'
import { Props } from './ContinueReading'

type ContainerProps = Pick<Props, 'expanded'>
type TouchableIconProps = Pick<Props, 'rotate'>

export const Container =
  styled.TouchableOpacity <
  ContainerProps >
  `
${({ expanded }) => css`
  overflow: hidden;
  max-height: ${expanded ? '400px' : '100px'};
  flex: ${expanded ? '1' : '0'};
`}
`

export const Description = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.greyDark2};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    margin-top: 5px;
  `}
`

export const TouchableContent = styled.View`
  height: 50px;
  margin-top: 5px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-color: #eeeeee;
  border-top-width: 1px;
`

export const TouchableTitle = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
  `}
`

export const TouchableIcon =
  styled.Image <
  TouchableIconProps >
  `
${({ rotate }) => css`
  width: 20px;
  height: 20px;
  transform: ${rotate ? 'rotate(180deg)' : ''};
`}
`
