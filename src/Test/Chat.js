import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import {useNavigation} from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();
  const [text, settext] = useState('');
  const [dt, setdt] = useState([]);
  const socket = io('http://192.168.1.7:3000');

  const getdata = () => {
    socket.emit('chat_data', text);
    socket.on('sever:send_data', data => {
      setdt(data);
    });
  };

  useEffect(() => {
    // gọi hàm get api lần đầu tiên sẽ loading api
    getdata();
    // tiếp theo là cứ sau 30p || 1800000s thì call api 1 lần
    const intervalId = setInterval(() => {
      getdata();
    }, 1800000);

    return () => clearInterval(intervalId);
  }, []);

  click = idrom => {
    navigation.navigate('chat', {idroom: idrom});

    // socket.emit('chat_data', 'text');
    ///socket.emit('getdata');
  };
  return (
    <View>
      <FlatList
        data={dt}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              click(item.idroom);
            }}
            style={styles.messageContainer}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrnLh8DAyK7pKVZezt7xIZF_LiJI6T6poXwugc-FpRw&s',
              }}
            />
            <View style={styles.messageContent}>
              <Text style={styles.senderName}>phong {item.idroom}</Text>
              <Text style={styles.messageText}>
                id chat {item.id1} & {item.id2}
              </Text>
            </View>
            <Text style={styles.messageTime}>fđffdggfd</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.idroom}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  senderName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    marginLeft: 10,
    color: '#999',
  },
});
