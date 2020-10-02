

import React from 'react';
import { Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Login from './screens/login'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} inicialRouteName="Home" >

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />


    </Stack.Navigator>

  );
};

export default Navigation;