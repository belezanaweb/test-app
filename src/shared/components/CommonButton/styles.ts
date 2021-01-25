import styled from 'styled-components/native';
import { COMMON_BUTTON_TYPES, ICommonButton } from './index';
import { moderateScale } from 'react-native-size-matters';
import { getFontWeight } from 'utils';

type TextProps = {
  type: COMMON_BUTTON_TYPES;
};

export const StyledButton = styled.TouchableOpacity<ICommonButton>`
  height: ${({ theme }) => moderateScale(theme.dimensions.button.height)}px;
  width: 100%;
  ${({ theme, type }) => {
    switch (type) {
      case COMMON_BUTTON_TYPES.NORMAL:
        return `background-color: ${theme.palette.primary};`;
      case COMMON_BUTTON_TYPES.OUTLINE:
        return `
          background-color: transparent;
          border: ${moderateScale(2)}px solid ${theme.palette.primary};
          `;
      default:
        return `background-color: ${theme.palette.primary};`;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  justify-content: center;
`;

export const StyledButtonText = styled.Text<TextProps>`
  align-self: center;
  font-family: ${() => getFontWeight({ weight: 'bold' })};
  font-size: ${({ theme }) =>
    moderateScale(theme.dimensions.text.size.large)}px;
  ${({ theme, type }) => {
    switch (type) {
      case COMMON_BUTTON_TYPES.NORMAL:
        return `color: ${theme.palette.secondary};`;
      case COMMON_BUTTON_TYPES.OUTLINE:
        return `color: ${theme.palette.primary};`;
      default:
        return `color: ${theme.palette.secondary};`;
    }
  }};
`;
