import image from "../../../../assets/home_bg.jpg";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { Dimensions } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: image,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AuthContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: ${(props) => props.theme.sizes[0]};
  padding: ${(props) => props.theme.spacing[4]};
  margin-top: ${(props) => props.theme.spacing[3]};
`;

export const LoginContainer = styled(AuthContainer)`
  min-width: ${Dimensions.get("window").width - 100}px;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.spacing[2]};
`;

export const Title = styled.Text`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: ${Dimensions.get("window").width - 100}px;
  justify-content: center;
  align-items: center;
`;

export const AnimationContainer = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.spacing[2]};
`;
