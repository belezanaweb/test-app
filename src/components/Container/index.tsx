import styled from 'theme'

interface IProps {
}

export default styled.ScrollView<IProps>`
  flex: 1;
  background-color: ${props=>props.theme.background};
`
