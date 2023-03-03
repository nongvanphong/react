import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Asncstoger = () => {
  // Storing data
  const click = async (key, value) => {
    try {
      await AsyncStorage.setItem('key', 'value');
    } catch (e) {
      // saving error
    }
  };

  // Retrieving data
  const click1 = async key => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        console.log('--- > : ', value);
        return value;
      }
    } catch (e) {
      // error reading value
    }
  };
  const click2 = async key => {
    try {
      await AsyncStorage.removeItem('key');
    } catch (e) {
      // error removing value
    }
  };
  return (
    <View>
      <Button
        title="set"
        onPress={() => {
          click();
        }}
      />
      <Button
        title="get"
        onPress={() => {
          click1();
        }}
      />
      <Button
        title="remove"
        onPress={() => {
          click2();
        }}
      />
    </View>
  );
};

export default Asncstoger;

const styles = StyleSheet.create({});
