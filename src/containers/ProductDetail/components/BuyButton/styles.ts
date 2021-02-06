import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const BuyButtonContainer = styled.View`
  margin-top: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
  margin-bottom: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.extraLarge)}px;
`;
