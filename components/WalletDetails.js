import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const WalletDetails = ({ wallet }) => {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Your Address</Text>
        <Text style={styles.sectionDescription}>{wallet.address}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Your Balance</Text>
        <Text style={styles.sectionDescription}>100 ETH</Text>
      </View>

    </View>
  );
}

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