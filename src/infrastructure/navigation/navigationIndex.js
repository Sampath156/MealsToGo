import React, { useContext } from "react";
import {NavigationContainer} from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { View, Text } from "react-native";
import { AccountNavigator } from "./account.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const NavigationIndex = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
  {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
  </NavigationContainer>
  );
};
