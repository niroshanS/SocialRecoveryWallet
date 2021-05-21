import React, { useState, useEffect } from 'react';
import { Wallet } from '@ethersproject/wallet';
import { ethers, providers } from 'ethers';
import * as Keychain from 'react-native-keychain';
import { EmptyHomeScreen } from './EmptyHomeScreen';
import { WalletDetails } from './WalletDetails';

export const HomeScreen = ({ navigation }) => {
  const [wallet, setWallet] = useState(null);

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
      
      setWallet(wallet.connect(provider));
    })();
  }, []);

  return wallet == null ? <EmptyHomeScreen navigation={navigation} /> : <WalletDetails wallet={wallet} navigation={navigation} />

};