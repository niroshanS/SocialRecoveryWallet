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

export const AddGuardianScreen = ({ navigation }) => {
  const [guardian, setGuardian] = useState(null);

  useEffect(() => {
    (async function loadCredentials() {

      console.log("hereerere");
    })();
  }, []);

  function addGuardian() {
    console.log(guardian);
  }

  return (
    <View>
      <View style={styles.sectionContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setGuardian}
          value={guardian}
          placeholder="Add your guardian's address" />
      </View>

      <View style={styles.sectionContainer}>
        <Button
          title="Add Guardian"
          onPress={() =>
            addGuardian()
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