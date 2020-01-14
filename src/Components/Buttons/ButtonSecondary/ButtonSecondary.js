import React from 'react';
import { ButtonContainer, ButtonText } from './ButtonSecondary.styles';
import { Colors } from '../../../Styleguide';

const ButtonSecondary = ({ onPress, title, backgroundColor, textColor }) => (
  <ButtonContainer
    style={{ backgroundColor: backgroundColor ? backgroundColor : Colors.white}}
    onPress={onPress}>
    <ButtonText
      style={{ color: textColor ? textColor : Colors.primary}}>
      {title ? title : ''}
    </ButtonText>
  </ButtonContainer>
);

export default ButtonSecondary;
