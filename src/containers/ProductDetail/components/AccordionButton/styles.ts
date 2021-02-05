import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const AccordionWrapper = styled.TouchableOpacity`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.palette.common.softGrey};
  height: ${moderateScale(30)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
  margin-right: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
  margin-left: ${({ theme }) =>
    moderateScale(theme.dimensions.common.margin.normal)}px;
`;

export const LinearGradientWrapper = styled.View`
  overflow: hidden;
  position: absolute;
  bottom: ${moderateScale(30)}px;
  width: 100%;
`;
