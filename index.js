import { AppRegistry } from 'react-native';
import { name as appName } from './src/app/app.json';
import 'utils/colors';
import App from './src/app/App';

AppRegistry.registerComponent(appName, () => App);
