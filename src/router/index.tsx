import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'containers/HomeScreen';
import ProductDetail from 'containers/ProductDetail';
import appLabels from 'utils/appLabels';

const Stack = createStackNavigator();

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: appLabels.homeScreen.screenName }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ title: appLabels.productDetail.screenName }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
