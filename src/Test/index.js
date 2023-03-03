import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList,
} from 'react-native';
import io from 'socket.io-client';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useEffect, useState} from 'react';
import Asncstoger from './Asncstoger';
import Chat from './Chat';
import ChatScreen from './ChatScreen ';
const socket = io('http://192.168.1.104:3000');
export default function Test() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on('chat message', message => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    // Cleanup function to disconnect socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSend = () => {
    // Send the message to the server
    socket.emit('chat message', text);

    // Clear the text input
    setText('');
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type your message"
      />
      <Button title="Send" onPress={handleSend} />
      {messages.map((message, index) => (
        <Text key={index}>{message}</Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 10,
  },
});
