import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from 'containers/ProductLIst';
import appLabels from 'utils/appLabels';

const Stack = createStackNavigator();

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{ title: appLabels.productList.screenName }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductList}
        options={{ title: appLabels.productDetail.screenName }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
