import { Config } from 'react-native-config'

if (Config.STORYBOOK === 'true') {
  import('./storybook').then(storybook => storybook)
}

import { AppRegistry } from 'react-native'
import App from './src'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)
