import styled from 'styled-components/native'

export const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 2;
  margin-horizontal: 10px;
  padding: 5px;
`
