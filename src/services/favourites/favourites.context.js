import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourites = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const saveFavourites = async (value) => {
    try {
      await AsyncStorage.setItem("@favourites", JSON.stringify(value));
    } catch (e) {
      console.log("storing error", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favourites");
      if (jsonValue) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("loadingError", e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const removeFavourites = (restaurant) => {
    const updatedFavourites = favourites.filter(
      (item) => item.placeId !== restaurant.placeId
    );

    setFavourites(updatedFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourites, removeFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
