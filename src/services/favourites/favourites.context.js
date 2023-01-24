import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth/auth.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthContext);

  const addFavourites = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const saveFavourites = async (value, uid) => {
    try {
      await AsyncStorage.setItem(`@favourites-${uid}`, JSON.stringify(value));
    } catch (e) {
      console.log("storing error", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (jsonValue) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("loadingError", e);
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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
