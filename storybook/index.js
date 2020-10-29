import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import { name as appName } from '../app.json'

import { loadStories } from './storyLoader'

import './rn-addons'

configure(() => {
  loadStories()
}, module)

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
})

AppRegistry.registerComponent(appName, () => StorybookUIRoot)

export default StorybookUIRoot
