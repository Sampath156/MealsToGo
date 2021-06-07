import React, { useContext } from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { RestaurentInfoCard } from "../../restaurents/components/RestaurentInfoCard_component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  console.log(favourites);
  return (
    <SafeArea>
      <FlatList
        data={favourites}
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
