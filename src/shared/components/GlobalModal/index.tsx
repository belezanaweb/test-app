import { useNavigation } from '@react-navigation/native';
import Close from 'assets/svg/Close';
import React, { useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import CommonButton from '../CommonButton';
import { COMMON_BUTTON_TYPES } from '../CommonButton/styles';
import CommonText from '../CommonText';
import { COMMON_TEXT_TYPES } from '../CommonText/styles';
import {
  Body,
  CloseWrapper,
  Container,
  Footer,
  Header,
  StyledInput,
  StyledKeyboard,
  Wrapper,
} from './styles';

type GlobalModalProps = {
  onPress: () => void;
};

const GlobalModal: React.FC<GlobalModalProps> = ({ onPress }) => {
  const [isDismissing, setIsDismissing] = useState(false);
  const navigation = useNavigation();

  function dismiss() {
    if (isDismissing) {
      return;
    }
    navigation.goBack();
    setIsDismissing(true);
  }
  return (
    <StyledKeyboard behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container onPress={dismiss}>
        <Wrapper activeOpacity={1} onPress={() => Keyboard.dismiss()}>
          <Header>
            <CommonText textType={COMMON_TEXT_TYPES.NORMAL}>Atenção</CommonText>
          </Header>
          <CloseWrapper
            delayPressIn={0}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
            onPress={dismiss}>
            <Close />
          </CloseWrapper>
          <Body>
            <CommonText key={Math.random()} textType={COMMON_TEXT_TYPES.NORMAL}>
              Digite seus dados para ser informado quando houver estoque
            </CommonText>
            <CommonText key={Math.random()} textType={COMMON_TEXT_TYPES.NORMAL}>
              Nome
            </CommonText>
            <StyledInput placeholder="Digite seu Nome" hitSlop={{ top: 20 }} />
            <CommonText key={Math.random()} textType={COMMON_TEXT_TYPES.NORMAL}>
              E-mail
            </CommonText>
            <StyledInput
              placeholder="Digite seu e-mail"
              hitSlop={{ top: 20 }}
            />
          </Body>
          <Footer>
            <CommonButton
              text="Cancelar"
              onPress={dismiss}
              type={COMMON_BUTTON_TYPES.OUTLINE}
            />
            <CommonButton
              text="Confirmar"
              onPress={onPress}
              type={COMMON_BUTTON_TYPES.NORMAL}
            />
          </Footer>
        </Wrapper>
      </Container>
    </StyledKeyboard>
  );
};

export default GlobalModal;
