import React from 'react';
import { StyledSafeAreaView } from './styles';

const GenericSafeAreaView: React.FC = ({ children }) => {
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
};

export default GenericSafeAreaView;
