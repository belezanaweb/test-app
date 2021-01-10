import React from 'react';
import { View } from 'react-native';
import Dialog from 'react-native-dialog';

type props = {
  visible: boolean;
  title: string;
  description: string;
  type?: 'info' | 'input';
  onPressPositive: () => void;
  onPressNegative: () => void;
};
const DialogComponent: React.FC<props> = ({
  visible,
  title,
  description,
  type = 'info',
  onPressNegative,
  onPressPositive,
}): JSX.Element => {
  const contentByType = {
    info: () => (
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <Dialog.Button label="Não" onPress={onPressNegative} />
          <Dialog.Button label="Sim" onPress={onPressPositive} />
        </Dialog.Container>
      </View>
    ),
    input: () => (
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <Dialog.Input label="Nome" />
          <Dialog.Input label="E-mail" />
          <Dialog.Button label="Cancelar" onPress={onPressNegative} />
          <Dialog.Button label="Enviar" onPress={onPressPositive} />
        </Dialog.Container>
      </View>
    ),
  };
  return contentByType[type]();
};
export default DialogComponent;
