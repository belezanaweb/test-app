import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

export const EmptyListContainer = styled.View`
  margin-bottom: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.extraLarge)}px;
  margin-top: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.extraLarge)}px;
  align-items: center;
`;
