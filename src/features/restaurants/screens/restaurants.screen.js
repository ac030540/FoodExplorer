import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantsInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SearchbarContainer,
  RestaurantsListContainer,
  RestaurantList,
} from "./restaurants.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Loading, LoadingContainer } from "./restaurants.styles";

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const restaurantContext = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {restaurantContext.isLoading && (
        <LoadingContainer>
          <Loading animating={true} size={50} />
        </LoadingContainer>
      )}

      <SearchbarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchbarContainer>
      <RestaurantsListContainer>
        <RestaurantList
          data={restaurantContext.restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </RestaurantsListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
