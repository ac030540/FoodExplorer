import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurants/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesContainer = styled.View`
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
`;

export const FavouritesBar = ({ favourites }) => {
  const navigation = useNavigation();
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesContainer>
      <Text variant="caption">Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((favourite, i) => (
          <Spacer
            key={favourite.placeId}
            position={i !== 0 && "left"}
            size="large"
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetailsScreen", {
                  restaurant: favourite,
                })
              }
            >
              <CompactRestaurantInfo restaurant={favourite} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesContainer>
  );
};
