import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountCover,
  AuthButton,
  LoginContainer,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { TextInput, ActivityIndicator, MD2Colors } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthContext } from "../../../services/auth/auth.context";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Food Explorer</Title>
      <LoginContainer>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Spacer size="medium">
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Spacer size="large">
              <Text variant="error">{error.message}</Text>
            </Spacer>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {isLoading ? (
            <ActivityIndicator animating color={MD2Colors.blue300} />
          ) : (
            <AuthButton
              icon="account-lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          )}
        </Spacer>
      </LoginContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
