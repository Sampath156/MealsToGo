import React from "react";
import LottieView from "lottie-react-native";
import {
  Background,
  AccountCover,
  ButtonContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../component/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          source={require("../../../../assets/watermelon.animation.json")}
          autoPlay
          loop
          resizeMode="cover"
        />
      </AnimationWrapper>
      <Title>Meals2Go</Title>
      <ButtonContainer>
        <AuthButton
          icon="lock-open"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="account"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </ButtonContainer>
    </Background>
  );
};
