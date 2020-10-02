
import React from 'react';
import{Text} from 'react-native';

import{NavigationContainer} from '@react-navigation/native';

import Navigation from './navigation'

const App= () => {
  return (
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>
  );
};

export default App;