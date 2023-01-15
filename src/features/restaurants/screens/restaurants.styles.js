import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

export const RestaurantsListContainer = styled.View`
  padding: ${(props) => props.theme.spacing[3]};
  flex: 1;
`;

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 4,
  },
})``;

export const Loading = styled(ActivityIndicator)`
  margin-top: -25px;
  margin-left: -25px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
