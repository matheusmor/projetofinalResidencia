import React from "react";


import { AntDesign, Ionicons } from "@expo/vector-icons";


import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./screens/home";
import Update from "./screens/updateProduct";
import AddProducts from "./screens/Addproducts";
import Login from "./screens/Login"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Update" component={Update} />
    </Stack.Navigator>
  );
};

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
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="user" size={40} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={StackNav}
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
