import React from "react";
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../components/RestaurentInfoCard_component";

import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  color: purple;
  padding: 10px;
  flex: 1;
  backgroundColor: purple;
  paddingTop: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View`
  flex: 1;
  padding: 16px;
  backgroundColor: white;
`;
const ListContainer = styled.View`
  flex: 16;
  padding: 16px;
  backgroundColor: green;
`;

export const RestaurentInfoScreens = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <ListContainer>
        <RestaurentInfoCard />
      </ListContainer>
    </SafeArea>
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
