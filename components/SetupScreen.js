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
import { ethers, providers } from 'ethers';
import * as Keychain from 'react-native-keychain';
import { WalletSetupSuccess } from './WalletSetupSuccess';



export const SetupScreen = ({ navigation, route }) => {
  const [wallet, setWallet] = useState(null);
  useEffect(() => {
    if (wallet == null) {
      console.log("in use effect!!");
      setWallet(ethers.Wallet.createRandom());
      
    } else {
      // Need to see how secure this is
      console.log(wallet._mnemonic().phrase);
      Keychain.setGenericPassword(wallet.address, wallet.privateKey);
    }
  });

  return wallet !== null ? <WalletSetupSuccess wallet={wallet} navigation={navigation} /> : 
  <Text>'setting up your wallet'</Text>;
};