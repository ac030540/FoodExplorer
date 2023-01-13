import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

// StatusBar.currentHeight is not supported in iOS
export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight + "px" : 0};
`;
