import React, { useContext } from "react";
import {
  RestaurantsListContainer,
  RestaurantList,
} from "../../restaurants/screens/restaurants.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "../../../components/typography/text.component";
import RestaurantsInfoCard from "../../restaurants/components/restaurant-info-card.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import styled from "styled-components/native";

const NoFavouritesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);
  const navigation = useNavigation();
  return !favourites.length ? (
    <NoFavouritesContainer>
      <Text>No favourites yet!</Text>
    </NoFavouritesContainer>
  ) : (
    <RestaurantsListContainer>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <Pressable
              onPress={() =>
                navigation.navigate("RestaurantDetailsScreen", {
                  restaurant: item,
                })
              }
              style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            >
              <RestaurantsInfoCard restaurant={item} />
            </Pressable>
          </Spacer>
        )}
        keyExtractor={(item) => `${item.placeId}-${item.name}`}
      />
    </RestaurantsListContainer>
  );
};
