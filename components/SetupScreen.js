import React, { useState, useEffect } from 'react';
import {
  Text,
} from 'react-native';
import { ethers } from 'ethers';
import * as Keychain from 'react-native-keychain';
import { WalletSetupSuccess } from './WalletSetupSuccess';



export const SetupScreen = ({ navigation, route }) => {
  const [wallet, setWallet] = useState(null);
  useEffect(() => {
    if (wallet == null) {
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