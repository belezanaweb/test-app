import { ModalProps } from 'react-native'

export interface Props extends ModalProps {
  modal: boolean;
  setModal: (handleClose: boolean) => void;
}
