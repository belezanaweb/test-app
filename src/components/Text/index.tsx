import styled from 'theme'

interface IProps {
  primary?: boolean
  gray?: boolean
  size?: number
}

export default styled.Text<IProps>`
  font-style: normal;
  font-weight: normal;
  font-size: ${props=> props.size ? props.size : 12}px;
`
