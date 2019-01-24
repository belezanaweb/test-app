import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppStack from './AppStack';
import LoadingScreen from 'screens/loading';

const RootNavigator = createSwitchNavigator(
  {
    LoadingScreen: LoadingScreen,
    App: AppStack
  },
  {
    initialRouteName: 'LoadingScreen'
  }
);

export default createAppContainer(RootNavigator);
