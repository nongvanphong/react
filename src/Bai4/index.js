import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Postdata from './Postdata';
import Bai3 from '../Bai3';
import {SSS} from './stringssss';

const Bai4 = () => {
  SSS.abc = '2221';
  console.log('sss -> ', SSS.abc);
  return <Postdata></Postdata>;
};

export default Bai4;

const styles = StyleSheet.create({});
