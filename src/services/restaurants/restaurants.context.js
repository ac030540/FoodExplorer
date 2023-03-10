import React, { createContext, useContext, useEffect, useState } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setRestaurants([]);
    setError(null);
    setIsLoading(true);
    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((transformedResponse) => {
        setIsLoading(false);
        setRestaurants(transformedResponse);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, isLoading, error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
