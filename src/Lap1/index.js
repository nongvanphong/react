import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';

const Lap1 = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box_img}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}
            source={require('../img/a1.png')}
          />
        </View>
        <View style={styles.box_tex}>
          <Text style={styles.text_heder}>React For Absolute Beginners</Text>
          <View>
            <Text style={styles.text_if}>
              40 Lectures{' '}
              <Image
                style={{width: 20, height: 20}}
                source={require('../img/time.png')}
              />{' '}
              4.5 hours
            </Text>
          </View>
          <Text style={{fontSize: 20, color: 'black'}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../img/user.png')}
            />{' '}
            Eduonix Learning
          </Text>
          <TouchableHighlight
            style={{
              marginTop: 10,
              width: '100%',
              backgroundColor: '#3F8930',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              More Detail
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.box1}>
        <View style={styles.box_img}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}
            source={require('../img/a1.jpeg')}
          />
        </View>
        <View style={styles.box_tex}>
          <Text style={styles.text_heder}>
            React Full Stack Web Development With Spring Boot
          </Text>
          <View>
            <Text style={styles.text_if}>
              67 Lectures{' '}
              <Image
                style={{width: 20, height: 20}}
                source={require('../img/time.png')}
              />{' '}
              4.5 hours
            </Text>
          </View>
          <Text style={{fontSize: 20, color: 'black'}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../img/user.png')}
            />{' '}
            Senol Atac
          </Text>
          <TouchableHighlight
            style={{
              marginTop: 10,
              width: '100%',
              backgroundColor: '#3F8930',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              More Detail
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.box1}>
        <View style={styles.box_img}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}
            source={require('../img/a2.jpg')}
          />
        </View>
        <View style={styles.box_tex}>
          <Text style={styles.text_heder}>React For Absolute Beginners</Text>
          <View>
            <Text style={styles.text_if}>
              23 Lectures{' '}
              <Image
                style={{width: 20, height: 20}}
                source={require('../img/time.png')}
              />{' '}
              1.5 hours
            </Text>
          </View>
          <Text style={{fontSize: 20, color: 'black'}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../img/user.png')}
            />{' '}
            Gautham Vijayan
          </Text>
          <TouchableHighlight
            style={{
              marginTop: 10,
              width: '100%',
              backgroundColor: '#3F8930',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              More Detail
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default Lap1;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  box1: {
    marginTop: 20,
    width: '100%',
    height: 450,
    borderWidth: 2,
    borderColor: '#ddd',

    borderRadius: 25,
  },
  box_img: {
    height: '40%',
  },
  box_tex: {
    height: '60%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderBottomRightRadius: 25,

    borderBottomLeftRadius: 25,
  },
  text_heder: {
    fontSize: 30,
    height: 120,
    fontWeight: 'bold',
    color: 'black',
  },
  text_if: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  bnt: {marginTop: 10},
});
