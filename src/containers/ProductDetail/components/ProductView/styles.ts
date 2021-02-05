import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const ProductViewContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.dimensions.common.borderRadius}px;
  margin: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
`;

export const StyledScrollView = styled.ScrollView`
  padding: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
`;

export const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
  margin-bottom: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.extraLarge)}px;
`;

export const FirstLineOverview = styled.View`
  flex: 1;
  flex-basis: auto;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.extraSmall)}px;
  margin-bottom: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.extraSmall)}px;
`;

export const SecondtLineOverview = styled.View`
  flex: 1;
  flex-basis: auto;
  flex-shrink: 1;
  align-items: flex-end;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonBuyWrapper = styled.View`
  margin-top: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
  margin-bottom: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.extraLarge)}px;
`;
