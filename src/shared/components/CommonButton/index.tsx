import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from 'shared/styles/theme';
import { ICommonButton, StyledButton, StyledButtonText } from './styles';

export const CommonButton: React.FC<ICommonButton> = props => {
  return (
    <StyledButton {...props}>
      {props.disabled ? (
        <ActivityIndicator size="small" color={theme.palette.primary} />
      ) : (
        <StyledButtonText type={props.type}>{props.text}</StyledButtonText>
      )}
    </StyledButton>
  );
};

export default CommonButton;
