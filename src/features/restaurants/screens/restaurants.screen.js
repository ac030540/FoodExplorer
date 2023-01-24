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

const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [showFavouritesBar, setShowFavouritesBar] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeArea>
      {restaurantContext.isLoading && (
        <LoadingContainer>
          <Loading animating={true} size={50} />
        </LoadingContainer>
      )}
      <Search
        toggleFavouritesBar={() => setShowFavouritesBar(!showFavouritesBar)}
        showFavouritesBar={showFavouritesBar}
      />
      {showFavouritesBar && <FavouritesBar favourites={favourites} />}
      <RestaurantsListContainer>
        <RestaurantList
          data={restaurantContext.restaurants}
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
    </SafeArea>
  );
};

export default RestaurantsScreen;
