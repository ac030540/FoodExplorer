import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AuthContext } from "../../services/auth/auth.context";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
