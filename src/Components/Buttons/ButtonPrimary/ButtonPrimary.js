import React from 'react';
import { ButtonContainer, ButtonText } from './ButtonPrimary.styles';
import { Colors } from '../../../Styleguide';

const ButtonPrimary = ({ onPress, title, backgroundColor, textColor, fontSize, disabled = false }) => (
  <ButtonContainer
    style={{ backgroundColor: backgroundColor ? backgroundColor : Colors.primary}}
    onPress={onPress}
    disabled={disabled}
    opacity={0.5}>
    <ButtonText
      style={{ color: textColor ? textColor : Colors.white, fontSize: fontSize ? fontSize : 18}}>
      {title ? title : ''}
    </ButtonText>

  </ButtonContainer>
);
export default ButtonPrimary;
