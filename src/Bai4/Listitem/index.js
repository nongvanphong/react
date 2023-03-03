import {
  Animated,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Listitem = props => {
  const navigation = useNavigation();

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
  const changedetail = item => {
    navigation.navigate('Chitiet', {items: item});
  };
  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Maximum_Height = 100;
  //Max Height of the Header
  const Header_Minimum_Height = 0;
  //Min Height of the Header

  // const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
  //   inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
  //   outputRange: ['#4286F4', '#00BCD4'],
  //   extrapolate: 'clamp',
  // });

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: 'clamp',
  });
  return (
    <View>
      <Animated.View
        style={[
          styles.header,
          {
            height: animateHeaderHeight,
            backgroundColor: 'green',
          },
        ]}>
        <Text>dhghjfdhd</Text>
      </Animated.View>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <ScrollView horizontal={true}>
              <Text>fjhdhdf</Text>
              <Text>1</Text>
              <Text>fjhdhdf</Text>
              <Text>1</Text>
              <Text>fjhdhdf</Text>
              <Text>1</Text>
              <Text>fjhdhdf</Text>
              <Text>1</Text>
              <Text>fjhdhdf</Text>
              <Text>1</Text>
              <Text>fjhdhdf</Text>
              <Text>1</Text>
              <Text>fjhdhdf</Text>
              <Text>1</Text>
              <Text>fjhdhdf</Text>
              <Text>1</Text>
            </ScrollView>
          );
        }}
        data={props.listdata}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              changedetail(item);
            }}>
            <Item title={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Listitem;

const styles = StyleSheet.create({});
