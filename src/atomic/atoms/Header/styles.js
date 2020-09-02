import styled from 'styled-components/native';
import {Platform} from 'react-native';

import colors from '../../constants/colors';

export const BackButton = styled.TouchableOpacity`
  top: ${Platform.OS === 'ios' ? 54 : 24}px 
  left: 20px;
  position: absolute;
`;

export const SnackBar = styled.View`
  background-color: ${colors.gold};
  padding-top: 15px;
  top: 0px;
  left: 0px;
  height: 40px;
  position: absolute;
  z-index: 9999;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
