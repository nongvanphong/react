import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// chuyen tham sô bàng prost
const Profile = props => {
  console.log('', props);
  // cách đỏi dữ liwwuj khi chuyền
  let sdt = '';
  if (props.sdt == '1234556777') {
    sdt = 'nnn353543545';
  }
  return (
    <View>
      <Text>ten : {props.ten}</Text>
      <Text>địa chỉ :{props.diachi} </Text>
      <Text>sodt :{sdt} </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
