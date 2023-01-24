import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthButton, Title } from "../components/account.styles";
import LottieView from "lottie-react-native";
import watermelon from "../../../../assets/watermelon.json";
import {
  AccountBackground,
  AccountCover,
  AuthContainer,
  AnimationContainer,
} from "../components/account.styles";

export const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationContainer>
        <LottieView
          autoPlay
          key="watermelon"
          loop
          source={watermelon}
          resizeMode="cover"
        />
      </AnimationContainer>

      <Title>Food Explorer</Title>
      <AuthContainer>
        <AuthButton
          icon="account-lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AuthContainer>
    </AccountBackground>
  );
};
