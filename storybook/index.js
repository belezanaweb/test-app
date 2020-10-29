import { AppRegistry } from 'react-native'
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import { name as appName } from '../app.json'

import { loadStories } from './storyLoader'
import themeDecorator from './themeDecorator'

import './rn-addons'

configure(() => {
  addDecorator(themeDecorator)
  loadStories()
}, module)

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
})

AppRegistry.registerComponent(appName, () => StorybookUIRoot)

export default StorybookUIRoot
