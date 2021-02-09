import { useNavigation } from '@react-navigation/native';
import Close from 'assets/svg/Close';
import React, { useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import appLabels from 'utils/appLabels';
import { GlobalModalProps } from 'utils/types/Router';
import CommonButton from '../CommonButton';
import { COMMON_BUTTON_TYPES } from '../CommonButton/styles';
import CommonText from '../CommonText';
import { COMMON_TEXT_TYPES } from '../CommonText/styles';
import {
  Body,
  ButtonWrapper,
  CloseWrapper,
  Container,
  Footer,
  Header,
  StyledInput,
  StyledKeyboard,
  Subtitle,
  TextInputWrapper,
  Wrapper,
} from './styles';

const GlobalModal: React.FC<GlobalModalProps> = ({ route }) => {
  const [isDismissing, setIsDismissing] = useState(false);
  const navigation = useNavigation();
  const { hasInventory } = route.params;
  const { globalModal } = appLabels;

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
          <CloseWrapper
            delayPressIn={0}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
            onPress={dismiss}>
            <Close />
          </CloseWrapper>
          {/* header */}
          <Header>
            <CommonText textType={COMMON_TEXT_TYPES.TITLE}>
              {globalModal.labelTitle}
            </CommonText>
          </Header>
          {/* bofy */}
          <Body>
            <Subtitle>
              <CommonText centralised textType={COMMON_TEXT_TYPES.NORMAL}>
                {hasInventory
                  ? globalModal.labelSubtitleWithInventory
                  : globalModal.labelSubtitleWithoutInventory}
              </CommonText>
            </Subtitle>
            {!hasInventory && (
              <>
                <TextInputWrapper>
                  <CommonText textType={COMMON_TEXT_TYPES.NORMAL}>
                    {globalModal.labelName}
                  </CommonText>
                </TextInputWrapper>
                <StyledInput placeholder={globalModal.placeholderName} />
                <TextInputWrapper>
                  <CommonText
                    key={Math.random()}
                    textType={COMMON_TEXT_TYPES.NORMAL}>
                    {globalModal.labelEmail}
                  </CommonText>
                </TextInputWrapper>
                <StyledInput placeholder={globalModal.placeholderEmail} />
              </>
            )}
          </Body>
          {/* footer */}
          <Footer>
            <ButtonWrapper>
              <CommonButton
                text={globalModal.btnDisagree}
                delayPressIn={50}
                onPress={dismiss}
                type={COMMON_BUTTON_TYPES.OUTLINE}
              />
            </ButtonWrapper>
            <ButtonWrapper>
              <CommonButton
                text={globalModal.btnAgree}
                delayPressIn={50}
                onPress={dismiss}
                type={COMMON_BUTTON_TYPES.NORMAL}
              />
            </ButtonWrapper>
          </Footer>
        </Wrapper>
      </Container>
    </StyledKeyboard>
  );
};

export default GlobalModal;
