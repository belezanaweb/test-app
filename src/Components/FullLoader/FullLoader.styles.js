import styled from 'styled-components/native';

export const LoaderOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  z-index: 99999999;
  elevation: 99999999;
  justify-content: center;
`;