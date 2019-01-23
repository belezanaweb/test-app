import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppStack from './AppStack';
import AuthLoading from 'screens/auth/auth-loading';

const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(RootNavigator);
