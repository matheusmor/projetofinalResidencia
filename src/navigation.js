

import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/home';
import Delete from './screens/delete'
import AddProducts from './screens/Addproducts';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} inicialRouteName="Home" >

      <Tab.Screen name="Delete" component={Delete} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddProducts" component={AddProducts} />


    </Tab.Navigator>

  );
};

export default Navigation;