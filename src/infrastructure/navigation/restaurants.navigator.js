import React from "react";
import { Text } from "react-native";


import { createStackNavigator } from "@react-navigation/stack";
import { RestaurentInfoScreens } from "../../features/restaurents/screens/RestaurentInfoScreens";
import { RestaurantDetail } from "../../features/restaurents/screens/RestaurantDetail";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurentInfoScreens}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
