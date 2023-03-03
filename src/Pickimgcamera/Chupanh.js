import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import Video from 'react-native-video';
const Chupanh = () => {
  const [dataimg, setdataimg] = useState(null);
  const [videoUri, setvideoUri] = useState(null);
  pick = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        console.log('response', response.assets[0].uri);
        setdataimg(response.assets[0].uri);
      },
    );
  };

  videos = () => {
    const options = {
      mediaType: 'video',
      videoQuality: 'low', // chất lượng video (low, medium, high, '640x480', '1280x720', '1920x1080')
      durationLimit: 5, // thời gian giới hạn (giây)
      videoExportPreset: 'HighestQuality', // định dạng video xuất ra
    };

    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('sử dụng camera');
      } else if (response.error) {
        console.log('lõi mãy ảnh: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // xử lý video được chọn
        console.log('video', response.assets[0].uri);
        console.log('video', response);
        setvideoUri(response.assets[0].uri);
      }
    });
  };
  return (
    <View style={{flex: 1}}>
      <Button
        onPress={() => {
          pick();
        }}
        title="chụp ảnh"
      />
      <Image style={{width: 100, height: 100}} source={{uri: dataimg}}></Image>
      <Button
        onPress={() => {
          videos();
        }}
        title="quay videop"
      />
      <Video
        source={{uri: videoUri}}
        style={{width: '100%', height: '100%', backgroundColor: '#000'}}
        controls
        resizeMode="contain"
      />
    </View>
  );
};

export default Chupanh;

const styles = StyleSheet.create({});
