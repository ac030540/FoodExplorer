import React, { useContext } from "react";
import RestaurantsInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsListContainer, RestaurantList } from "./restaurants.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Loading, LoadingContainer } from "./restaurants.styles";
import { Search } from "../components/search.component";

const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {restaurantContext.isLoading && (
        <LoadingContainer>
          <Loading animating={true} size={50} />
        </LoadingContainer>
      )}
      <Search />
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
