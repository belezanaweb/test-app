import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyledButton, StyledButtonText } from './styles';

export enum COMMON_BUTTON_TYPES {
  OUTLINE = 'OUTLINE',
  NORMAL = 'NORMAL',
}

export interface ICommonButton extends TouchableOpacityProps {
  /**
    `string` that will be rendered in the button
  */
  text: string;
  /**
    @param OUTLINE will show button with white background and text with theme primary color.
    @param NORMAL will show button with trheme primary color in background and white text.
  */
  type: COMMON_BUTTON_TYPES;
}

export const CommonButton: React.FC<ICommonButton> = props => {
  return (
    <StyledButton {...props}>
      <StyledButtonText type={props.type}>{props.text}</StyledButtonText>
    </StyledButton>
  );
};
