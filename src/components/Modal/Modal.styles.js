import styled from 'styled-components/native'
import Button from '../Button'

export const ChildrenContainer = styled.View``

export const InnerComponentContainer = styled.View``

export const ModalLeftButton = styled(Button)`
  margin-right: 4px;
  flex: 1;
`

export const ModalRightButton = styled(Button)`
  margin-left: 4px;
  flex: 1;
`

export const ModalInnerContainer = styled.View`
  padding: 16px;
  background-color: white;
  border-radius: 16px;
`

export const ModalTitle = styled.Text`
  font-family: Roboto;
  color: #ff6c00;
  font-weight: bold;
  font-size: 17px;
`

export const ModalText = styled.Text`
  font-family: Roboto;
  margin-top: 12px;
  color: #555;
  font-size: 17px;
`

export const ButtonContainer = styled.View`
  margin-top: 12px;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`
