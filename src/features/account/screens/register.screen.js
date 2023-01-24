import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountCover,
  AuthButton,
  ErrorContainer,
  LoginContainer,
  Title,
} from "../components/account.styles";
import { ActivityIndicator, TextInput, MD2Colors } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthContext } from "../../../services/auth/auth.context";
import { useNavigation } from "@react-navigation/native";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthContext);
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
          />
        </Spacer>
        <Spacer size="medium">
          <TextInput
            label="Repeat Password"
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
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
              icon="email-outline"
              mode="contained"
              onPress={() => onRegister(email, password, repeatPassword)}
            >
              Register
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
