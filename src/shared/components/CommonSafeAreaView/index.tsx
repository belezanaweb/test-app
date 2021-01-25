import React from 'react';
import { StyledSafeAreaView } from './styles';

const CommonSafeAreaView: React.FC = ({ children }) => {
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
};

export default CommonSafeAreaView;
