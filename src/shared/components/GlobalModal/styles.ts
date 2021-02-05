import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const StyledKeyboard = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.TouchableOpacity`
  border-radius: ${({ theme }) =>
    moderateScale(theme.dimensions.common.borderRadius)}px;
  background-color: ${({ theme }) => theme.palette.common.white};
  min-height: ${moderateScale(200)}px;
  min-width: ${moderateScale(200)}px;
  max-width: ${moderateScale(300)}px;
  justify-content: space-between;
  padding: ${moderateScale(10)}px;
  overflow: hidden;
`;

export const Header = styled.View`
  min-height: ${moderateScale(30)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${moderateScale(5)}px;
`;

export const Body = styled.View`
  justify-content: space-between;
  min-height: ${moderateScale(150)}px;
  margin: ${moderateScale(10)}px 0px ${moderateScale(25)}px 0px;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CloseWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 10px;
`;

export const StyledInput = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.palette.common.black};
  border-radius: ${({ theme }) =>
    moderateScale(theme.dimensions.common.borderRadius)}px;
  padding: 10px;
  width: 100%;
`;
