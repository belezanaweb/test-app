import styled from 'styled-components/native'

export const ImageStyled = styled.Image`
  ${props => {
    if (props.large) {
      return `
        width: 160px;
        height: 160px;
      `
    }
    return `
      width: 108px;
      height: 108px;
    `
  }}
`
