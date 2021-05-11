import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RestaurentInfoScreens } from "../../features/restaurents/screens/RestaurentInfoScreens";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurentInfoScreens}
      />
    </RestaurantStack.Navigator>
  );
};
