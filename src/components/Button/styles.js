import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  height: 48px; /* visualmente melhor */
  border-radius: 4px;
  border-color:${({inverse}) => (inverse ? '#FF6C00' : '#fff')};
  border-width: 2px;
  background-color: ${({inverse}) => (inverse ? '#fff' : '#FF6C00')};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${({inverse}) => (inverse ? '#FF6C00' : '#fff')};
`;
