import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts as Oswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as Lato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurentInfoScreens } from "./src/features/restaurents/screens/RestaurentInfoScreens";
import { theme } from "./src/infrastructure/theme/index";
import { SafeArea } from "./src/components/utils/safe-area.component";
import {RestaurantContextProvider} from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};
const Maps = () => (
  <SafeArea>
    <Text> Maps </Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text> Settings </Text>
  </SafeArea>
);

const ScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  const [oswaldLoaded] = Oswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = Lato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={ScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurentInfoScreens} />
            <Tab.Screen name="Map" component={Maps} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
          </RestaurantContextProvider>
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}
