import React from "react";

import { CompactRestaurantInfo } from "../../../components/resturant/compact-restaurant-component";

export const MapCallout = ({ restaurant }) => {
  console.log(restaurant.name);
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
