import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { ethers, providers, Wallet } from 'ethers';
import * as Keychain from 'react-native-keychain';
import { CreateWalletScreen } from './EmptyHomeScreen';
import { WalletDetails } from './WalletDetails';

export const HomeScreen = ({ navigation }) => {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    (async function loadCredentials() {
      if (wallet !== null) {
        return;
      }

      const credentials = await Keychain.getGenericPassword();
      const privateKey = credentials.password;


      setWallet(privateKey == null ? 'NaN' : new Wallet(privateKey));
    })();
  }, []);

  return wallet == 'NaN' ? <CreateWalletScreen navigation={navigation} /> : <WalletDetails wallet={wallet} />

};