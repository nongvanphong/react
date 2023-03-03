import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Chitiet = ({route}) => {
  const {items = {}} = route.params;

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 100, height: 100, borderRadius: 50}}
        source={{uri: items.image}}></Image>
      <Text style={styles.title}>id : {items.id}</Text>
      <Text style={styles.title}>tến sản phẩm : {items.title}</Text>
      <Text style={styles.title}>giá :{items.price}</Text>
      <Text style={styles.title}>mô tả : {items.description}</Text>
    </View>
  );
};

export default Chitiet;

const styles = StyleSheet.create({});
