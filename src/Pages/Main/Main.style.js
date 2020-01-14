import styled from 'styled-components/native';

import { Colors, Layout } from '../../Styleguide';

export const Wrapper = styled.View`
  ${Layout.Type.wrapper};
  flex: 1;
  background: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.Text`
  ${Layout.Type.body};
  font-size: 30px;
  color: ${Colors.white};
`;
