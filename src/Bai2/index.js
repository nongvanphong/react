import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Profile from './Componenrts/Profile';

const Bai2 = () => {
  const [ten, setten] = useState('');
  return (
    <View>
      <Profile ten={ten} diachi="12334" sdt="1234556777"></Profile>
      <TextInput placeholder="nhập vào" onChangeText={setten}></TextInput>
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({});
