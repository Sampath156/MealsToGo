import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newfavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newfavourites);
  };
  console.log(favourites.length);
  return (
    <FavouritesContext.Provider
      value={{
        addFavourite: add,
        removeFavourite: remove,
        favourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
