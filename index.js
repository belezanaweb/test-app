/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from 'test_app/app.json';
import { ProductListScreen } from "./src/ui/screens/product/list/productListScreen";

AppRegistry.registerComponent(appName, () => ProductListScreen)
