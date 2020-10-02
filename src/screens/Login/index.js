
import React from 'react';
import{Text} from 'react-native';

import{NavigationContainer} from '@react-navigation/native';

import Routes from '../../routes'

const Login= () => {
  return (
    <NavigationContainer>
        <Routes/>
    </NavigationContainer>
  );
};

export default Login;