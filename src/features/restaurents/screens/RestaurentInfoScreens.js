import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors  } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurentInfoCard } from "../components/RestaurentInfoCard_component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer-temp";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurentInfoScreens = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurentInfoCard restaurent={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.names}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeArea>
  );
};
