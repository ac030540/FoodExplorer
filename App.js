import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const MapsScreen = () => (
  <SafeArea>
    <Text>Maps Screen</Text>
  </SafeArea>
);

const SettingsScreen = () => (
  <SafeArea>
    <Text>Setting Screen</Text>
  </SafeArea>
);

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    return <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapsScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
            <ExpoStatusBar style="auto" />
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
    </>
  );
}
