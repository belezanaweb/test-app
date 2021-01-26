import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.common.white};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
