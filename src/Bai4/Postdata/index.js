import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Listitem from '../Listitem';
import {SearchSource} from 'jest';

const Postdata = () => {
  const [arrdata, setArrdata] = useState([]);
  const [textsearch, setTextsearch] = useState('');

  useEffect(() => {
    getDataUsingSimpleGetCall();
  }, []);

  const getDataUsingSimpleGetCall = async () => {
    axios
      .get('https://61a5e3c48395690017be8ed2.mockapi.io/blogs/products')
      .then(function (response) {
        // handle success
        //console.log('-----', JSON.stringify(response.data));
        //   console.log('response', response);
        setArrdata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })
      .finally(function () {
        // always executed
        console.log('Finally called');
      });
  };

  const timkiem = async () => {
    console.log('kkkkkkkkkkkkkkkkkk : ', textsearch);
    if (textsearch.length > 0) {
      axios
        .get(
          'https://61a5e3c48395690017be8ed2.mockapi.io/blogs/products?search=' +
            textsearch,
        )
        .then(function (response) {
          // handle success
          //console.log('-----', JSON.stringify(response.data));
          //   console.log('response', response);

          if (response.data.length > 0) {
            setArrdata(response.data);
          } else {
            alert('không tìm thấy');
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error.message);
        });
    } else {
      console.log('jjjj1234');
      axios
        .get('https://61a5e3c48395690017be8ed2.mockapi.io/blogs/products')
        .then(function (response) {
          // handle success
          //console.log('-----', JSON.stringify(response.data));
          //   console.log('response', response);
          setArrdata(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error.message);
        });
    }
  };

  const search = async () => {
    console.log(textsearch);
    timkiem();
  };

  return (
    <View>
      <View style={{width: '100%', height: 100, alignItems: 'center'}}>
        <TextInput
          style={{width: '95%', height: '50%', borderWidth: 2}}
          placeholder="tìm kiếm "
          onChangeText={setTextsearch}></TextInput>
        <TouchableOpacity
          style={{
            marginTop: 5,
            backgroundColor: 'blue',
            width: '50%',
            height: '40%',
            justifyContent: 'center',
            borderRadius: 20,
          }}
          onPress={() => search()}>
          <Text style={{textAlign: 'center'}}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>

      <Listitem listdata={arrdata}></Listitem>
    </View>

    // <View>
    //   {arrdata.map(item => {
    //     return <Text>aaaa {item.id}</Text>;
    //   })}
    // </View>
  );
};

export default Postdata;

const styles = StyleSheet.create({});
