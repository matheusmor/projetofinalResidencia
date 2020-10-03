

import React from 'react';
import { Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/home';
import Delete from './screens/delete'
import AddProducts from './screens/Addproducts';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} inicialRouteName="Home"
    tabBarOptions={{
      style: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderTopColor: 'rgba(255, 255, 0.2)',
      },
      activeTintColor: '#fff',
      inactiveTintColor: '#92929c'
  }} >

      <Tab.Screen name="Delete" component={Delete} />
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarIcon: ({ color})=> {
        return(
        <AntDesign name="home" size={24} color={color} /> );}
        
    }}
      />
      <Tab.Screen name="AddProducts" component={AddProducts} />


    </Tab.Navigator>

  );
};

export default Navigation;