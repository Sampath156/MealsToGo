import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";

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
      <Card elevation={5} style={styles.card}>
        <Card.Cover source={{ uri: image[0] }} style={styles.cover} />
        <Text style ={styles.title}>{restaurentname}</Text>
      </Card>
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
  title :{
    padding: 5,
  }
});
