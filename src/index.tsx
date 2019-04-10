import React from 'react'
import { Platform } from 'react-native'
import styled, { themeColors, ThemeProvider } from 'theme'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

interface IProps {

}

const App: React.FunctionComponent<IProps> = (): JSX.Element =>
  <ThemeProvider theme={themeColors}>
    <Container>
      <Title>Welcome to React Native!</Title>
      <Text>To get started, edit App.js</Text>
      <Text>{instructions}</Text>
    </Container>
  </ThemeProvider>

const Container = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.primary};
`

const Text = styled.Text`
  color: ${props => props.theme.primaryText};
`

export default App
