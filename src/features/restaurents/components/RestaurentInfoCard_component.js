import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const StyledText = styled.Text`
  color: purple;
  padding: 10px;
`;
const RestaurentCard = styled(Card)`
  backgroundColor: white;
`;
const RestaurentCardCover = styled(Card.Cover)`
  padding: 15px;
`;

export const RestaurentInfoCard = ({ restaurent = {} }) => {
  const {
    restaurentname = "Some Restaurent",
    icon,
    image = [
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
    ],
    address = "10 Downing Street",
    isOpenNow = "true",
    isTemporarlyClosed = "false",
    rating = "4",
  } = restaurent;
  return (
    <View>
      <RestaurentCard elevation={5}>
        <RestaurentCardCover source={{ uri: image[0] }} />
        <StyledText>{restaurentname}</StyledText>
      </RestaurentCard>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 15,
  },
});
