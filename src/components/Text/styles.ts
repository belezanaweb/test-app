import styled, { css } from 'styled-components/native'

// import { colors } from './../../styles/theme';

// const getFontSize = ({ type }) => {
//   switch (type) {
//     case 'h1':
//       return '24px'
//     case 'h2':
//       return '20px'
//     case 'h3':
//       return '16px'
//     case 'h4':
//       return '14px'
//     case 'h5':
//       return '12px'
//     default:
//       return '16px'
//   }
// }

// export const Text = styled.Text`
// ${({ theme }) => css`

// `
// `}
// `
// font-family: ${({ theme }) => `${theme.fontFamily}`};

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
  `}
`
