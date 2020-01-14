import styled from 'styled-components/native';
import { Layout, Colors } from '../../../Styleguide';

export const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${Colors.white};
`;

export const ButtonText = styled.Text`
  ${Layout.Type.body};
  font-size: 18px;
  color: ${Colors.primary};
`;
