import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

export const ProductCardContainer = styled.View`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.dimensions.common.borderRadius}px;
  flex-direction: row;
  margin: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
  padding: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.small)}px;
`;

// Product Card left Side
export const LeftContainer = styled.View`
  justify-content: space-between;
`;

export const ProductCardImage = styled.Image`
  height: ${({ theme }) =>
    moderateScale(theme.dimensions.image.small.height)}px;
  width: ${({ theme }) => moderateScale(theme.dimensions.image.small.width)}px;
`;

export const ProductCardCode = styled.View`
  margin-top: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.large)}px;
  align-self: center;
`;

// Product card right sidee
export const RightContainer = styled.View`
  flex: 1;
  margin-left: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
  justify-content: space-between;
`;

export const DescriptionPriceWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
