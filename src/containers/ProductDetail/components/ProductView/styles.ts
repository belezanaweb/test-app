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
