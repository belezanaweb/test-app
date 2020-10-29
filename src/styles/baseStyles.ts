import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const CenteredContainer = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`

export const PageHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.fontName};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.fontBlack};
  padding: 10px;
`

export const SafeAreaContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  flex: 1;
`
