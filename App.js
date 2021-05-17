import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as Oswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as Lato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { NavigationIndex } from "./src/infrastructure/navigation/navigationIndex";
import { FavouritesContextProvider } from "./src/services/favourites/FavouritesContext";

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
          <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <NavigationIndex />
            </RestaurantContextProvider>
          </LocationContextProvider>
          </FavouritesContextProvider>
        </ThemeProvider>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
}
