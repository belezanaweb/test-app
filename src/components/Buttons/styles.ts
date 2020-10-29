import styled from 'styled-components/native'

interface IBaseButton {
  background?: string;
  borderColor?: string;
}

export const BaseButton =
  styled.TouchableOpacity <
  IBaseButton >
  `
  width: 100%;
  height: 36px;
  background: ${({ background }) => background};
  border-radius: 4px;
  border-color: ${({ borderColor }) => borderColor};
  border-width: 2px;
  align-items: center;
  justify-content: center;
  align-self: center;
`

interface IBaseButtonText {
  color?: string;
}

export const BaseButtonText =
  styled.Text <
  IBaseButtonText >
  `
  font-family: ${({ theme }) => theme.fonts.fontName};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ color }) => color};
`
