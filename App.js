import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts as Oswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as Lato, Lato_400Regular } from "@expo-google-fonts/lato";
import firebase from "firebase/app";

import { theme } from "./src/infrastructure/theme/index";

import { NavigationIndex } from "./src/infrastructure/navigation/navigationIndex";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCIPhZ62hOWiSdatNMXVh_K6qrHx_AjgTs",
  authDomain: "meals2go-ad317.firebaseapp.com",
  projectId: "meals2go-ad317",
  storageBucket: "meals2go-ad317.appspot.com",
  messagingSenderId: "496119238742",
  appId: "1:496119238742:web:eb3626ce4e3d4a59bf6bf7",
};

if (!firebase.apps.length) {
  //ensuring firebase initiated only when no apps are running
  firebase.initializeApp(firebaseConfig);
}

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
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <NavigationIndex />
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
