import React from "react";
import { Text } from "react-native";

export const RestaurentInfo = ({ restaurent = {} }) => {
  const {
    restaurentName = "Some Restaurent",
    icon,
    photo = [
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
    ],
    address = "10  Downing Street",
    isOpenNow = "yes",
    isTemporarlyClosed = "no",
  } = restaurent;
  return <Text> RestaurentInfo </Text>;
};
