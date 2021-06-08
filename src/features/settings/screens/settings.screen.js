import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { useFocusEffect } from "@react-navigation/native";

import Styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

const AvatarContainer = Styled.View`
align-items:center;
padding: 20px;
`;

export const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const profilePicture = async () => {
    const pic = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(pic);
  };

  useFocusEffect(
    useCallback(() => {
      profilePicture();
    }, [user])
  );

  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <AvatarContainer>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
          <Spacer position="bottom" size="small">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
      </TouchableOpacity>
      <List.Item
        title="Favourites"
        description="favourites"
        left={(props) => <List.Icon {...props} icon="account-heart" />}
        onPress={() => navigation.navigate("Favourites")}
      />
      <List.Item
        title="Logout"
        description="logout"
        left={(props) => <List.Icon {...props} icon="logout" />}
        onPress={onLogout}
      />
    </SafeArea>
  );
};
