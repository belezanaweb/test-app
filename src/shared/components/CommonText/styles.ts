import { TextProps } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { getFontWeight } from 'utils';

export enum COMMON_TEXT_TYPES {
  NORMAL = 'NORMAL',
  TITLE = 'TITLE',
  SUBTITLE = 'SUBTITLE',
  PRIMARY = 'PRIMARY',
  PRICE = 'PRICE',
  ACCORDION = 'ACCORDION',
  SMOOTH = 'SMOOTH',
  DASHED = 'DASHED',
  CONTRAST = 'CONTRAST',
}

export interface ICommonText extends TextProps {
  textType: COMMON_TEXT_TYPES;
  centralised?: boolean;
}

export const StyledCommonText = styled.Text<ICommonText>`
  text-align: ${({ centralised }) => (centralised ? 'center' : 'left')};
  ${({ theme, textType }) => {
    switch (textType) {
      case COMMON_TEXT_TYPES.NORMAL:
        return `
          font-family: ${getFontWeight({ weight: 'normal' })};
          font-size: ${moderateScale(theme.dimensions.text.size.normal)}px;
          color: ${theme.palette.common.black};`;
      case COMMON_TEXT_TYPES.TITLE:
        return `
          font-family: ${getFontWeight({ weight: 'bold' })};
          font-size: ${moderateScale(theme.dimensions.text.size.bigLarge)}px;
          color: ${theme.palette.common.black};`;
      case COMMON_TEXT_TYPES.SUBTITLE:
        return `
          font-family: ${getFontWeight({ weight: 'bold' })};
          font-size: ${moderateScale(theme.dimensions.text.size.extraLarge)}px;
          color: ${theme.palette.common.black};`;
      case COMMON_TEXT_TYPES.PRIMARY:
        return `
          font-family: ${getFontWeight({ weight: 'bold' })};
          font-size: ${moderateScale(theme.dimensions.text.size.large)}px;
          color: ${theme.palette.primary};`;
      case COMMON_TEXT_TYPES.PRICE:
        return `
          font-family: ${getFontWeight({ weight: 'bold' })};
          font-size: ${moderateScale(theme.dimensions.text.size.ultraLarge)}px;
          color: ${theme.palette.primary};`;
      case COMMON_TEXT_TYPES.ACCORDION:
        return `
          font-family: ${getFontWeight({ weight: 'bold' })};
          font-size: ${moderateScale(theme.dimensions.text.size.normal)}px;
          color: ${theme.palette.common.royalHeath};`;
      case COMMON_TEXT_TYPES.SMOOTH:
        return `
          font-family: ${getFontWeight({ weight: 'normal' })};
          font-size: ${moderateScale(theme.dimensions.text.size.normal)}px;
          color: ${theme.palette.smooth};`;
      case COMMON_TEXT_TYPES.DASHED:
        return `
          font-family: ${getFontWeight({ weight: 'normal' })};
          font-size: ${moderateScale(theme.dimensions.text.size.normal)}px;
          color: ${theme.palette.dashed};`;
      case COMMON_TEXT_TYPES.CONTRAST:
        return `
          font-family: ${getFontWeight({ weight: 'normal' })};
          font-size: ${moderateScale(theme.dimensions.text.size.extraLarge)}px;
          color: ${theme.palette.contrast};`;
      default:
        return `
          font-family: ${getFontWeight({ weight: 'normal' })};
          font-size: ${moderateScale(theme.dimensions.text.size.normal)}px;
          color: ${theme.palette.common.black};`;
    }
  }};
`;

type DashProps = {
  width: number;
  verticalOffset: number;
};

export const Dash = styled.View<DashProps>`
  position: absolute;
  height: 1px;
  width: ${({ width }) => width}px;
  margin-top: ${({ verticalOffset }) => verticalOffset}px;
  background-color: ${({ theme }) => theme.palette.dashed};
`;

export const CommonTextContainer = styled.View`
  align-items: flex-start;
`;
