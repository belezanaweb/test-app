import styled from 'styled-components/native'
import { Platform } from 'react-native'

import colors from '../../constants/colors'

export const InputText = styled.TextInput`
  font-family: 'Roboto';
  background-color: ${props => (props.bg ? props.bg : colors.graffit)};

  padding-top: ${props => (props.pt ? props.pt : 0)}px;
  padding-right: ${props => (props.pr ? props.pr : 0)}px;
  padding-left: ${props => (props.pl ? props.pl : 0)}px;
  padding-bottom: ${props => (props.pb ? props.pb : 0)}px;

  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  margin-right: ${props => (props.mr ? props.mr : 0)}px;
  margin-left: ${props => (props.ml ? props.ml : 0)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  position: ${props => (props.position ? props.position : 'relative')};

  border-radius: ${props => (props.border ? props.border : 0)}px;
  overflow: ${props => (props.overflow ? props.overflow : 'hidden')};

  width: ${props => (props.wd ? props.wd : '100%')};
  height: '15px';

  border-width: ${props => (props.bg === 'transparent' ? '2' : '0')}px;
  border-color: ${props => (props.bg === 'transparent' ? colors.orange : colors.black)};
`
