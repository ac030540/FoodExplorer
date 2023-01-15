import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourites = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

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
