import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../components/RestaurentInfoCard_component";

export const RestaurentInfoScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbarContainer}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listContainer}>
        <RestaurentInfoCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    flex: 1,
    backgroundColor: "purple",
    paddingTop: StatusBar.currentHeight,
  },
  searchbarContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  listContainer: {
    flex: 16,
    padding: 16,
    backgroundColor: "green",
  },
});
