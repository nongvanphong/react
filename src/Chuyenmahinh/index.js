import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Bai4 from '../Bai4';
import Bai3 from '../Bai3';
import Chitiet from '../Bai4/Chitiet';
import Test from '../Test';
import Chat from '../Test/Chat';
import ChatScreen from '../Test/ChatScreen ';
const Chuyenmahinh = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="bai4" component={Test} />
        <Stack.Screen name="chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Chuyenmahinh;

const styles = StyleSheet.create({});
