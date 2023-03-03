import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';

const Pickimgcamera = () => {
  const [dataimg, setdataimg] = useState([]);
  pick = () => {
    let options = {
      storageOptions: {
        //   skipBackup: true,

        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
      },
      // số lượng ảnh dc chọn
      selectionLimit: 5,
      // chyển anhe thành base64
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        // các ảnh đã được chọn thành công
        // const selectedPhotos = response.assets;
        //console.log(selectedPhotos[0].base64);
        setdataimg(response.assets);
        //onsole.log('-----', dataimg);
        // xử lý các ảnh đã chọn ở đây
      }
    });
  };

  // pick = async () => {
  //   try {
  //     const results = await DocumentPicker.pickMultiple({
  //       type: [DocumentPicker.types.images],
  //       // giới hạn số lượng ảnh người dùng có thể chọn
  //       maxFiles: 5,
  //     });
  //     // xử lý ảnh đã chọn ở đây
  //     console.log('results:', results);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       // người dùng đã hủy chọn ảnh
  //     } else {
  //       // có lỗi xảy ra trong quá trình chọn ảnh
  //       console.log('err:', err);
  //     }
  //   }
  // };

  return (
    <View>
      <Text>Pickimgcamera</Text>
      <FlatList
        data={dataimg}
        renderItem={({item}) => (
          <Image
            style={{width: 100, height: 100}}
            source={{uri: item.uri}}></Image>
        )}
        keyExtractor={item => item.name}
      />
      <Button onPress={() => pick()} title="pick image" />
    </View>
  );
};

export default Pickimgcamera;

const styles = StyleSheet.create({});
