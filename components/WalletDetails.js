import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { ethers, providers } from 'ethers';

export const WalletDetails = ({ wallet, navigation }) => {
  const [balance, setBalance] = useState(0);

  async function getBalance() {
    if(wallet == null) {
      return;
    }

    console.log("getting balance!!!");
    const balance = await wallet.getBalance();
    console.log(wallet.address);
    console.log("got balance");
    console.log(balance);
    console.log("done");
    setBalance(ethers.utils.formatUnits(balance, 18));
  }

  useEffect(() => {
    
    const interval = setInterval(() => {
      getBalance();
    }, 10000);
    
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Your Address</Text>
        <Text style={styles.sectionDescription}>{wallet.address}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Your Balance</Text>
        <Text style={styles.sectionDescription}>{balance} ETH</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Button
        title="Send"
        onPress={() =>
          navigation.navigate('Send')
        }
      />
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