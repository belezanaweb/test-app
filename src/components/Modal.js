import React from 'react'
import Modal from 'react-native-modal'
import styled from 'styled-components'
import Button from './Button'

const CustomModal = props => (
  <Modal {...props} avoidKeyboard>
    <ModalInnerContainer>
      {props.title ? <ModalTitle>{props.title}</ModalTitle> : null}
      {props.text ? <ModalText>{props.text}</ModalText> : null}
      <ChildrenContainer>{props.children}</ChildrenContainer>
      <InnerComponentContainer>{props.innerComponent}</InnerComponentContainer>
      <ButtonContainer>
        {props.cancelButtonText && (
          <ModalLeftButton onPress={props.cancelButtonOnPress} secondary>
            {props.cancelButtonText}
          </ModalLeftButton>
        )}
        {props.acceptButtonText && (
          <ModalRightButton onPress={props.acceptButtonOnPress} primary>
            {props.acceptButtonText}
          </ModalRightButton>
        )}
      </ButtonContainer>
    </ModalInnerContainer>
  </Modal>
)

const ChildrenContainer = styled.View``

const InnerComponentContainer = styled.View``

const ModalLeftButton = styled(Button)`
  margin-right: 4px;
  flex: 1;
`

const ModalRightButton = styled(Button)`
  margin-left: 4px;
  flex: 1;
`

const ModalInnerContainer = styled.View`
  padding: 16px;
  background-color: white;
  border-radius: 16px;
`

const ModalTitle = styled.Text`
  font-family: Roboto;
  color: #ff6c00;
  font-weight: bold;
  font-size: 17px;
`

const ModalText = styled.Text`
  font-family: Roboto;
  margin-top: 12px;
  color: #555;
  font-size: 17px;
`

const ButtonContainer = styled.View`
  margin-top: 12px;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`

export default CustomModal
