import {Button, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Nhap from './Nhap';
import Xuat from './Xuat';

const Lap2 = props => {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Nhap></Nhap>
      </View>
    </ScrollView>
  );
};

export default Lap2;

const styles = StyleSheet.create({});
