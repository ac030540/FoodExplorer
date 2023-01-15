import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import { WebView } from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const WebViewImage = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 5px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const ImageComponent = isAndroid && isMap ? WebViewImage : CompactImage;
  return (
    <Item>
      <ImageComponent source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};
