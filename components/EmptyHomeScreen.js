import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export const EmptyHomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to your social recovery wallet. Hit the button below to get started.</Text>
      <Button
        title="Let's gooo! 🚀"
        onPress={() =>
          navigation.navigate('Setup')
        }
      />
    </View>
  );
}