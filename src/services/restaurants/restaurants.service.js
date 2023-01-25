import camelize from "camelize";
import { API_URL } from "@env";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return fetch(`${API_URL}/restaurants/${location}`).then((response) =>
    response.json()
  );
};

export const restaurantsTransform = (restaurants) => {
  const mappedResponse = restaurants.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  return camelize(mappedResponse);
};
