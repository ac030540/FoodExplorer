import React, { useContext, useState } from "react";
import { Pressable } from "react-native";
import RestaurantsInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsListContainer, RestaurantList } from "./restaurants.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Loading, LoadingContainer } from "./restaurants.styles";
import { Search } from "../components/search.component";
import { useNavigation } from "@react-navigation/native";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";
import { LocationContext } from "../../../services/location/location.context";
import { Text } from "../../../components/typography/text.component";

const RestaurantsScreen = () => {
  const {
    restaurants,
    error: restaurantsError,
    isLoading: restaurantsLoading,
  } = useContext(RestaurantsContext);
  const { error: locationError, isLoading: locationLoading } =
    useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [showFavouritesBar, setShowFavouritesBar] = useState(false);
  const navigation = useNavigation();
  const hasError = !!locationError || !!restaurantsError;
  const isLoading = restaurantsLoading || locationLoading;

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} size={50} />
        </LoadingContainer>
      )}
      <Search
        toggleFavouritesBar={() => setShowFavouritesBar(!showFavouritesBar)}
        showFavouritesBar={showFavouritesBar}
      />
      {showFavouritesBar && <FavouritesBar favourites={favourites} />}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something Went Wrong!</Text>
        </Spacer>
      )}
      {!hasError && !isLoading && (
        <RestaurantsListContainer>
          <RestaurantList
            data={restaurants}
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
                  <FadeInView>
                    <RestaurantsInfoCard restaurant={item} />
                  </FadeInView>
                </Pressable>
              </Spacer>
            )}
            keyExtractor={(item) => `${item.placeId}-${item.name}`}
          />
        </RestaurantsListContainer>
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
