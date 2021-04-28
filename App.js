import React from "react";
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as Oswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as Lato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurentInfoScreens } from "./src/features/restaurents/screens/RestaurentInfoScreens";
import { theme } from "./src/infrastructure/theme/index";

export default function App() {
  let [oswaldLoaded] = Oswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = Lato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurentInfoScreens />
      </ThemeProvider>
    </>
  );
}
