import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { Wallet } from '@ethersproject/wallet';
import { ethers, providers } from 'ethers';
import * as Keychain from 'react-native-keychain';

export const SendScreen = ({ navigation }) => {
  const [wallet, setWallet] = useState(null);
  const [amount, setAmount] = useState(0);
  const [dest, setDest] = useState('0x95A27D08709576d35BbF9bA7d7DD0810fD25885e');

  useEffect(() => {
    (async function loadCredentials() {

      const credentials = await Keychain.getGenericPassword();
      const privateKey = credentials.password;

      if (privateKey == null) {
        console.log("private key is null");
        return;
      }
      const wallet = new Wallet(privateKey);

      const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

      console.log("wallet is");
      console.log(wallet);
      
      setWallet(wallet.connect(provider));
    })();
  }, []);

  function sendEth() {
    tx = {
      to: dest,
      value: ethers.utils.parseEther(amount)
    }
    console.log(tx);
    wallet.sendTransaction(tx);
  }

  return (
    <View>
      <View style={styles.sectionContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="Amount of ETH to send"
          keyboardType="numeric" />
          <TextInput
          style={styles.input}
          onChangeText={setDest}
          value={dest}
          placeholder="Adress to send to"/>
      </View>
      

      <View style={styles.sectionContainer}>
        <Button
          title="Send"
          onPress={() =>
            sendEth()
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});