import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../Pages/Main/Main';

const mainScreenStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
        headerBackTitle: null,
        headerTintColor: 'white'
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Main',
      headerMode: 'screen',
      headerTitle: 'Main Screen Header',
      drawerLabel: 'Main Screen',
    }),
  }
);

const Routes = createAppContainer(mainScreenStack);

export default Routes;