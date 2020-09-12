import styled, { css } from 'styled-components/native'

export const Content = styled.View`
  padding: 15px;
  align-items: stretch;
  flex-direction: column;
  padding: 20px;
`

export const ContainerModal = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    background-color: ${theme.colors.grey};
    opacity: 0.9;
    flex-direction: column;
  `}
`
