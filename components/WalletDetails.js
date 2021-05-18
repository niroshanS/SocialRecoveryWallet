import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const WalletDetails = ({ wallet }) => {
  // const [mnemonic, setMnemonic] = useState(null);
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Your Address</Text>
        <Text style={styles.sectionDescription}>{wallet.address}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Your Secret Phrase</Text>
        <Text style={styles.sectionDescription}>Please save a copy of this as this will allow you to recover your wallet. This is a secret phrase that you should never share 🤫</Text>
        <Text style={styles.sectionDescription}>{wallet._mnemonic().phrase}</Text>
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

