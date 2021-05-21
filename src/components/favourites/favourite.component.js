import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favourites/FavouritesContext";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 22px;
  right: 22px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addFavourite, removeFavourite } = useContext(
    FavouritesContext
  );

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addFavourite(restaurant) : removeFavourite(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={20}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
