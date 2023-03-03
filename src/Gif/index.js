import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Gif = () => {
  return (
    <View>
      <Image
        style={{width: 300, height: 300}}
        source={{
          uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220221170632/ezgifcomgifmaker1.gif',
        }}
      />
      <Image
        style={{width: 300, height: 300}}
        source={require('../img/logoutanimation.gif')}
      />
    </View>
  );
};

export default Gif;

const styles = StyleSheet.create({});
