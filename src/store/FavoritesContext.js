import React from "react";
import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
});



export default FavoritesContext;
