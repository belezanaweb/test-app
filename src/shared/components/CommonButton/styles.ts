import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { getFontWeight } from 'utils';

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

type TextProps = {
  type: COMMON_BUTTON_TYPES;
};

export const StyledButton = styled.TouchableOpacity<ICommonButton>`
  height: ${({ theme }) => moderateScale(theme.dimensions.button.height)}px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
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
  border-radius: ${({ theme }) => theme.dimensions.common.borderRadius}px;
  justify-content: center;
`;

export const StyledButtonText = styled.Text<TextProps>`
  align-self: center;
  font-family: ${getFontWeight({ weight: 'bold' })};
  margin: ${moderateScale(5)}px;
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
