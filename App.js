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
import { SendScreen } from './components/SendScreen';
import { DeploymentScreen } from './components/DeploymentScreen';
import { AddGuardianScreen } from './components/AddGuardianScreen';

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
        <Stack.Screen
        name = "Deployment"
        component = {DeploymentScreen}
        />
        <Stack.Screen 
        name = "Send"
        component = {SendScreen}
        />
        <Stack.Screen 
        name = "Add Guardian"
        component = {AddGuardianScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
