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
  height: 120px;
  width: 120px;
`;

const Item = styled.View`
  max-width: 120px;
  align-items: center;
  padding: 10px;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  const isAndroid = Platform.OS === "android";
  const ResImage = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <ResImage source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
