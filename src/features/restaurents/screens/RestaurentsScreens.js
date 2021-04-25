import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurentInfo } from "../components/Restaurent_info_component";

export const RestaurentsScreens = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="search" />
    </View>
    <View style={styles.list}>
      <RestaurentInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    backgroundColor: "purple",
    padding: 16,
  },
});
