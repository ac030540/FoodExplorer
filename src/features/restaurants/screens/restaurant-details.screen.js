import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantsInfoCard from "../components/restaurant-info-card.component";
import { RestaurantDetailAccordion } from "../components/restaurant-detail-accordion";

export const RestaurantDetailsScreen = () => {
  const { params } = useRoute();
  const { restaurant } = params;
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <RestaurantDetailAccordion />
    </SafeArea>
  );
};
