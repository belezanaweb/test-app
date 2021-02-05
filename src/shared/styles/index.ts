import styled from 'styled-components/native';

export const Page = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background};
`;

export const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4,
};
