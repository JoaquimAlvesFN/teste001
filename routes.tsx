import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#C7B7E0" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;