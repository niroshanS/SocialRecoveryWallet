import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { ethers, providers } from 'ethers';
import WalletCompiledContract from '../build/contracts/Wallet.json';

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
    // const factory = new ethers.ContractFactory(WalletCompiledContract.abi, WalletCompiledContract.bytecode, wallet);
    // const contract = await factory.deploy(wallet.address, [wallet.address]);

    // const metadata = JSON.parse(fs.readFileSync('build/contracts/Wallet.json').toString());
    // console.log(metadata);
  }


  async function deploy() {
    const provider = wallet.provider;
    const price = ethers.utils.formatUnits(await provider.getGasPrice(), 'gwei');
    const options = {gasLimit: 6000000, gasPrice: ethers.utils.parseUnits(price, 'gwei')};

    const factory = new ethers.ContractFactory(WalletCompiledContract.abi, WalletCompiledContract.bytecode, wallet);
    const contract = await factory.deploy(wallet.address, [wallet.address], options);

    console.log("Contract deployed!!!!");
    console.log(contract);
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

      <View style={styles.sectionContainer}>
        <Button
        title="Deploy Contract"
        onPress={() =>
          deploy()
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