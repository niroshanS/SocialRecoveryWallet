/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import "@ethersproject/shims";

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './components/HomeScreen';
import { SetupScreen } from './components/SetupScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name = "Welcome"
        component = {HomeScreen}
        options = {{ title: 'Welcome!' }}
        />
        <Stack.Screen 
        name = "Setup"
        component = {SetupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
