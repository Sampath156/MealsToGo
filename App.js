import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurentScreens } from "./src/features/restaurents/screens/RestaurentsScreens";
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <RestaurentScreens />
      <ExpoStatusBar style="auto" />
    </View>
  );
}

//export default App;
