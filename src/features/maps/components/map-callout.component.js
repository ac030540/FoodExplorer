import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Callout } from "react-native-maps";
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  const navigation = useNavigation();
  return (
    <Callout
      onPress={() =>
        navigation.navigate("RestaurantDetailsScreen", { restaurant })
      }
    >
      <CompactRestaurantInfo restaurant={restaurant} isMap />
    </Callout>
  );
};
