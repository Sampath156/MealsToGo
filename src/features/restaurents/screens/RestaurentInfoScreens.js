import React from "react";
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../components/RestaurentInfoCard_component";

import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  padding: ${(props) => props.theme.space[2]};
  flex: 1;
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;
const ListContainer = styled.View`
  flex: 16;
  padding: ${(props) => props.theme.space[2]};
  backgroundColor: ${(props) => props.theme.colors.bg.secondary};
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
