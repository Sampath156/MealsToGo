import React, { useState, useContext } from "react";
import {
  AccountCover,
  Background,
  ButtonContainer,
  AuthTextInput,
  AuthButton,
} from "../component/account.styles";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, error, loading } = useContext(AuthenticationContext);
  //console.log(error);
  return (
    <Background>
      <AccountCover />
      <ButtonContainer>
        <AuthTextInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large" />
        <AuthTextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(p) => setPassword(p)}
        />
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large" />
        {!loading ? (
          <AuthButton
            icon="account"
            mode="contained"
            onPress={() => isLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.red800} />
        )}
      </ButtonContainer>
      <Spacer size="large" />
      <AuthButton
        icon="lock-open"
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Back
      </AuthButton>
    </Background>
  );
};
