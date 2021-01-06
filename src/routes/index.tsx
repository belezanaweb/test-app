import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ title: 'LISTA DE PRODUTOS' }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Detail"
        options={{ title: 'DETALHES DO PRODUTO' }}
        component={DetailScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
