import React from "react";


import { AntDesign, Ionicons } from "@expo/vector-icons";


import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./screens/home";
import Delete from "./screens/delete";
import AddProducts from "./screens/Addproducts";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      inicialRouteName="Home"
      tabBarOptions={{
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff159",
          height: 70,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        activeTintColor: "#000",
        inactiveTintColor: "#555",
      }}
    >
      <Tab.Screen
        name="Delete"
        component={Delete}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="user" size={40} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="home" size={40} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Add Products"
        component={AddProducts}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="ios-add-circle-outline" size={40} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
