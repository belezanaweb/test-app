/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from 'test_app/app.json';
import { ProductListScreen } from "./src/ui/screens/product/list/productListScreen";
import { ProductDetailScreen } from "./src/ui/screens/product/detail/productDetailScreen";
import { Routes } from "./src/ui/routes";

AppRegistry.registerComponent(appName, () => Routes)
//AppRegistry.registerComponent(appName, () => ProductListScreen)
//AppRegistry.registerComponent(appName, () => ProductDetailScreen)
