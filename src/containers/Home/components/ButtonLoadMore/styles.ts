import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

export const ButtonLoadMoreWrapper = styled.View`
  margin-left: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
  margin-right: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
  margin-bottom: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.extraLarge)}px;
`;
