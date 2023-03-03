import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import io from 'socket.io-client';
const ChatScreen = ({route}) => {
  const {idroom = {}} = route.params;

  const navigator = useNavigation();
  const [datasen, setdatasen] = useState([]);
  const [datasen1, setdatasen1] = useState([]);
  const [text, settex] = useState('');
  const socket = io('http://192.168.1.7:3000');

  const flatListRef = useRef(null); // Step 1

  useEffect(() => {
    // gọi hàm get api lần đầu tiên sẽ loading api
    getdata();
    // tiếp theo là cứ sau 30p || 1800000s thì call api 1 lần
    const intervalId = setInterval(() => {
      getdata();
    }, 1800000);

    return () => clearInterval(intervalId);
  }, []);

  const getdata = async () => {
    console.log('-----dd---');
    socket.emit('clien:send_room', (data = {idroom: idroom, mgs: ''}));
    socket.on('sever:send_room', data => {
      setdatasen(data);
    });
  };

  const scrollToBottom = () => {
    flatListRef.current.scrollToEnd({animated: true}); // Step 2
  };

  sendchat = () => {
    socket.emit('clien:send_room_sever', (data = {idroom: idroom, mgs: text}));
    socket.on('sever:send_room', data => {
      setdatasen(data);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <View style={styles.messagesContainer}>
        <FlatList
          data={datasen}
          renderItem={({item}) => <Text>{item.mgs}</Text>}
          keyExtractor={item => item.id}
          ref={flatListRef} // Step 1
          onContentSizeChange={scrollToBottom} // Step 3
          onLayout={scrollToBottom} // Step 2
        />
      </View>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <TextInput
          style={{
            backgroundColor: 'red',
            width: '90%',
          }}
          onChangeText={settex}
          placeholder="nhập nội dung"></TextInput>
        <TouchableOpacity
          onPress={() => {
            sendchat();
          }}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'green',
            width: '10%',
          }}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messagesContainer: {
    flex: 1,
  },
});

export default ChatScreen;
