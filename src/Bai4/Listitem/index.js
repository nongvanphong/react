import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Listitem = props => {
  // let a = props.listdata.map(item => {
  //   console.log('id --- :  ' + item.id);
  //   <Text>{item.id}</Text>;
  // });

  const Item = ({title}) => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 100, height: 100, borderRadius: 50}}
        source={{uri: title.image}}></Image>
      <Text style={styles.title}>id : {title.id}</Text>
      <Text style={styles.title}>tến sản phẩm : {title.title}</Text>
      <Text style={styles.title}>giá :{title.price}</Text>
      <Text style={styles.title}>mô tả : {title.description}</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        data={props.listdata}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Listitem;

const styles = StyleSheet.create({});
