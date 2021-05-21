import React from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { RestaurantDetail } from "../../features/restaurents/screens/RestaurantDetail";

import { CompactRestaurantInfo } from "../../components/resturant/compact-restaurant-component";
import { Spacer } from "../spacer/spacer.component";

const FavourtesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavourtesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavourtesWrapper>
  );
};
