import styled from 'styled-components/native'

const getFontSize = ({ type }) => {
  switch (type) {
    case 'h1':
      return '24px'
    case 'h2':
      return '20px'
    case 'h3':
      return '16px'
    case 'h4':
      return '14px'
    case 'h5':
      return '12px'
    default:
      return '16px'
  }
}

export const TextStyled = styled.Text`
  font-family: Helvetica;
  line-height: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: ${props => getFontSize(props)};
  text-decoration-line: ${props => (props.line ? 'line-through' : 'none')};
`
