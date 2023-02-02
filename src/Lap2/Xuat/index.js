import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Nhap from '../Nhap';
var sotuoi = 0;
const Xuat = props => {
  const [xuat, setxuat] = useState(true);
  const _xuat = () => {
    setxuat(false);
  };

  let d = new Date();
  console.log(d.getFullYear());
  console.log(d.getMonth() + 1);
  console.log(d.getDate());
  let ns = props.t13;

  let tuoi = d.getFullYear() - ns.split('-')[2];

  if (ns.split('-')[1] > d.getMonth() + 1) {
    console.log(tuoi - 1, ' chưa đủ1');
    sotuoi = tuoi - 1;
  } else {
    if (ns.split('-')[0] > d.getDate()) {
      console.log(tuoi - 1, ' chưa đủ');
      sotuoi = tuoi - 1;
    } else {
      console.log(tuoi, '  đủ');
      sotuoi = tuoi;
    }
  }

  return (
    <View>
      {xuat && (
        <View>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <Image
              style={{width: 200, height: 200, borderRadius: 100}}
              source={{
                uri: 'data:image/jpeg;base64,' + props.tavt,
                //uri: bs64,
              }}></Image>
          </View>
          <Text style={styles.text}>Tên :{props.t11} </Text>
          <Text style={styles.text}>ngành : {props.t12} </Text>
          <Text style={styles.text}>tuổi :{sotuoi} </Text>
          <Text style={styles.text}>ngay sinh :{props.t13} </Text>
          <Text style={styles.text}>gmail : {props.t14} </Text>
          <Text style={styles.text}>điểm mạnh : {props.t15} </Text>
          <Text style={styles.text}>điểm yêu : {props.t16} </Text>
          <Button onPress={() => _xuat()} title="edit"></Button>
        </View>
      )}
      {!xuat && (
        <Nhap
          avt={props.tavt}
          ten={props.t11}
          nganh={props.t122}
          ngaysinh={props.t13}
          dm={props.t15}
          dy={props.t16}
          gmail={props.t14}></Nhap>
      )}
    </View>
  );
};

export default Xuat;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
