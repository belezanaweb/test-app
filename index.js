/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { name as appName } from 'test_app/app.json';

AppRegistry.registerComponent(appName, () => App);
