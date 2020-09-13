import styled from 'styled-components/native'

import colors from '../../constants/colors'

export const TextRegular = styled.Text`
  font-family: 'Roboto';
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-size: ${props => (props.size ? props.size : 20)}px;
  line-height: ${props => (props.size ? props.size + 2 : 20)}px;
  color: ${props => (props.color ? props.color : colors.black)};

  padding-top: ${props => (props.pt ? props.pt : 0)}px;
  padding-right: ${props => (props.pr ? props.pr : 0)}px;
  padding-left: ${props => (props.pl ? props.pl : 0)}px;
  padding-bottom: ${props => (props.pb ? props.pb : 0)}px;

  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  margin-right: ${props => (props.mr ? props.mr : 0)}px;
  margin-left: ${props => (props.ml ? props.ml : 0)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;

  justify-content: ${props => (props.align ? props.align : 'center')};
  align-self: ${props => (props.align ? props.align : 'center')};

  position: ${props => (props.position ? props.position : 'relative')};
  top: ${props => (props.top ? props.top : 0)}px;

  text-decoration: ${props => (props.decoration ? props.decoration : 'none')};
  text-decoration-color: ${props => (props.decoration ? props.color : colors.white)};
`

export const TextTag = styled.Text`
  font-size: ${props => (props.size ? props.size : 20)}px;
  color: ${props => (props.color ? props.color : colors.black)};

  padding-top: ${props => (props.pt ? props.pt : 0)}px;
  padding-right: ${props => (props.pr ? props.pr : 0)}px;
  padding-left: ${props => (props.pl ? props.pl : 0)}px;
  padding-bottom: ${props => (props.pb ? props.pb : 0)}px;

  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  margin-right: ${props => (props.mr ? props.mr : 0)}px;
  margin-left: ${props => (props.ml ? props.ml : 0)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;

  justify-content: ${props => (props.align ? props.align : 'center')};
  align-self: ${props => (props.align ? props.align : 'center')};

  padding: 5px;
  border: 1px;
  border-color: ${colors.white};
  border-radius: 16px;
`
