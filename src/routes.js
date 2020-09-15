import {Platform} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/Dashboard/ProductDetails';

const DashboardStack = createStackNavigator(
  {
    Dashboard,
    ProductDetails,
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
      headerStyle: {
        width: '100%',
        backgroundColor: 'transparent',
        paddingTop: `${Platform.OS === 'ios' ? getStatusBarHeight(true) : 0}`,

      },
      headerTitleStyle: {
        color: '#212121',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 6,
        fontSize: 14,
        textTransform: 'uppercase',
      },
    },
  },
);

export default createAppContainer(DashboardStack);
