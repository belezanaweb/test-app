import React from "react";
import { ProductListScreen } from "./screens/product/list/productListScreen";
import { ProductDetailScreen } from "./screens/product/detail/productDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ProductList" component={ProductListScreen} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};