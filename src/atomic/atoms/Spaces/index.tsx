import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const BoxSafe = styled.SafeAreaView`
  background-color: ${(props) => (props.bg ? props.bg : colors.graffit)};
  flex: ${(props) => (props.flex ? props.flex : 1)};
  flex-direction: ${(props) => (props.fd ? props.fd : 'column')};
  position: relative;
`;

export const Box = styled.View`
  background-color: ${(props) => (props.bg ? props.bg : colors.graffit)};
  flex: ${(props) => (props.flex ? props.flex : 1)};
  flex-direction: ${(props) => (props.fd ? props.fd : 'column')};
  flex-wrap: ${(props) => (props.fw ? props.fw : 'nowrap')};

  padding-top: ${(props) => (props.pt ? props.pt : 0)}px;
  padding-right: ${(props) => (props.pr ? props.pr : 0)}px;
  padding-left: ${(props) => (props.pl ? props.pl : 0)}px;
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)}px;

  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
  margin-left: ${(props) => (props.ml ? props.ml : 0)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  position: ${(props) => (props.position ? props.position : 'relative')};

  border-radius: ${(props) => (props.border ? props.border : 0)}px;
  overflow: ${(props) => (props.overflow ? props.overflow : 'hidden')};
`;

export const BoxTouchable = styled.TouchableOpacity`
  background-color: ${(props) => (props.bg ? props.bg : colors.graffit)};
  flex: ${(props) => (props.flex ? props.flex : 1)};
  flex-direction: ${(props) => (props.fd ? props.fd : 'column')};

  padding-top: ${(props) => (props.pt ? props.pt : 0)}px;
  padding-right: ${(props) => (props.pr ? props.pr : 0)}px;
  padding-left: ${(props) => (props.pl ? props.pl : 0)}px;
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)}px;

  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
  margin-left: ${(props) => (props.ml ? props.ml : 0)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  position: ${(props) => (props.position ? props.position : 'relative')};

  border-radius: ${(props) => (props.border ? props.border : 0)}px;
  overflow: ${(props) => (props.overflow ? props.overflow : 'hidden')};
`;
