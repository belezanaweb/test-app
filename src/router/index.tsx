import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'containers/Home';
import ProductDetail from 'containers/ProductDetail';
import appLabels from 'utils/appLabels';
import GlobalModal from 'shared/components/GlobalModal';
import theme from 'shared/styles/theme';
import { MainStackParamList, RootStackParamList } from 'utils/types/Router';

const MainStack = createStackNavigator<MainStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const MainStackScreen = () => (
  <MainStack.Navigator mode="card">
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        title: appLabels.homeScreen.screenName,
        animationEnabled: false,
        headerTitleAlign: 'center',
        headerTitleStyle: { backgroundColor: theme.palette.background },
      }}
    />
    <MainStack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={{ title: appLabels.productDetail.screenName }}
    />
  </MainStack.Navigator>
);

const Router: React.FC = () => (
  <NavigationContainer>
    <RootStack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0.3, 0.6, 0.8, 1],
              outputRange: [0, 0.2, 0.8, 1],
            }),
            transform: [
              {
                scale: progress.interpolate({
                  inputRange: [0.6, 1],
                  outputRange: [1.05, 1],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}>
      <RootStack.Screen
        name="MainStack"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="GlobalModal" component={GlobalModal} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Router;
