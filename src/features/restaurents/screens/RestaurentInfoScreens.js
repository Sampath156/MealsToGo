import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../components/RestaurentInfoCard_component";

import styled from "styled-components/native";
import {Spacer} from "../../../components/spacer/spacer-temp";
import {SafeArea} from "../../../components/utils/safe-area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurentInfoScreens = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <FlatList 
        data={[
          { names: 1 },
          { names: 2 },
          { names: 3 },
          { names: 4 },
          { names: 5 },
          { names: 6 },
        ]}
        renderItem={() =>( 
          <Spacer position="bottom" size ="medium">
          <RestaurentInfoCard />
          </Spacer>)}
        keyExtractor={(item) => item.names}
        contentContainerStyle = {{ padding:10}}
      />
    </SafeArea>
  );
};
