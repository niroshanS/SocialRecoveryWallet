import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export const DeploymentScreen = ({ navigation }) => {

  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}> Deploy Smart Contract </Text>
        <Text style={styles.sectionDescription}>In this step we'll deploy a smart contract that will allow you to assign guardians and other features.</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});