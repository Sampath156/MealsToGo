import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

import Styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

const AvatarContainer = Styled.View`
align-items:center;
padding: 20px;
`;

export const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <AvatarContainer>
          <Avatar.Icon size={120} icon="human" />
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
