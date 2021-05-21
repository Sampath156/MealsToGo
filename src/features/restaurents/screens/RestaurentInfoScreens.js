import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurentInfoCard } from "../components/RestaurentInfoCard_component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import {RestaurantDetail} from "./RestaurantDetail";
import { Spacer } from "../../../components/spacer/spacer-temp";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favouritesbar.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurentInfoScreens = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled ] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
            <Spacer position="bottom" size="large">
              <RestaurentInfoCard restaurent={item} />
            </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.names}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeArea>
  );
};
