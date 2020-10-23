import styled from 'styled-components/native'
import { colors, fonts } from '../variables'
interface ModalProps {
  isKeyboardOpen?: boolean
}

export const Container = styled.View<ModalProps>`
  position: absolute;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  align-items: center;
  justify-content: ${props => (props.isKeyboardOpen ? 'flex-start' : 'center')};
`

export const Box = styled.View`
  background-color: ${colors.white};
  padding: ${fonts['xxLarge']};
  border-radius: ${fonts['smallest']};
  width: 90%;
  padding-top: ${fonts['largeSmall']};
  margin-top: ${fonts['largeSmall']};
  justify-content: center;
  align-items: center;
`
