/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from 'src/App'
import { name as appName } from 'test_app/app.json'

import './src/Config/ReactotronConfig';

AppRegistry.registerComponent(appName, () => App)
