import React from "react";
import { Text, Platform } from "react-native";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

const CompactImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 10px;
`;

const CompactWebview = styled(WebView)`
  height: 80px;
  width: 80px;
`;

const Item = styled.View`
  max-width: 120px;
  align-items: center;
  padding: 5px;
`;

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const isAndroid = Platform.OS === "android";
  const ResImage = isMap && isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <ResImage source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
