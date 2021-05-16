import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Let's create your wallet!</Text>
      <Button
      title="Create Wallet"
      onPress={() =>
        navigation.navigate('Setup')
      }
    />
    </View>
    
  );
};