import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import * as ImagePicker from 'react-native-image-picker';

var testngaysinh = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/gm;

var testgmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var ten = '';
const Lap_2_1 = () => {
  const [bs64, setbs64] = useState('');

  const [preview, setpreview] = useState(true);
  const [sv, setsv] = useState(false);
  const [isname, setisname] = useState(false);

  const [istuoi, setuoi] = useState(false);
  const [isnganh, setisnganh] = useState(false);
  const [isdiemmanh, setdiemamnh] = useState(false);
  const [isdiemyeu, setdiemyeu] = useState(false);
  const [isgmail, setgmail] = useState(false);

  const [errname, setrrname] = useState('');
  const [errnganh, setrrnnganh] = useState('');
  const [errtuoi, setrrtuoi] = useState();
  const [errdiemmanh, setrrdiemmanh] = useState('');
  const [errdiemyeu, setrdiemyeu] = useState('');
  const [errgmail, setrrgamil] = useState('');
  const [txt, settxt] = useState({
    ten: '',
    tuoi: '',
    nganh: '',
    tennganh: '',
    gmail: '',

    diemmanh: '',
    diemyeu: '',
  });

  // kho bị delay
  useEffect(() => {
    kiemtra = (ten, ngaysinh, gmail, diemmanh, diemyeu, nganh) => {
      setsv(false);
      if (!testngaysinh.test(ngaysinh)) {
        // console.log('===============SAI1');
        setuoi(true);
        setrrtuoi({...errtuoi, ten: 'ngày sinh không đúng định dạng'});
      } else {
        // console.log('==============DUNG1');
        setuoi(false);
      }

      if (ten === undefined || ten === '') {
        console.log('===============SAI1');
        setisname(true);
        setrrname({...errname, ten: 'tên không được để chống'});
      } else {
        console.log('==============DUNG1');
        setisname(false);
      }
      //isname;
      // console.log(ten, ' :kiemtr : ' + isname);

      if (gmail === '') {
        setgmail(true);
        setrrgamil({...errdiemyeu, gmail: 'gmail không được để chống'});
      } else if (!testgmail.test(gmail)) {
        setgmail(true);
        setrrgamil({...errdiemyeu, gmail: 'gmail không đúng định dạng'});
      } else {
        setgmail(false);
      }
      if (ngaysinh === '') {
        //setuoi(true);
        //setrrtuoi({...errtuoi, ten: 'ngày sinh không được để chống'});
      } else if (!testngaysinh.test(ngaysinh)) {
        // console.log('===============SAI');
      } else {
        // console.log('==============DUNG');
      }
      if (diemmanh === '' || diemmanh === undefined) {
        setdiemamnh(true);
        setrrdiemmanh({
          ...errdiemmanh,
          ten: 'điểm mạnh không được để chống',
        });
      } else {
        setdiemamnh(false);
      }
      if (diemyeu === '' || diemyeu === undefined) {
        setdiemyeu(true);
        setrdiemyeu({...errdiemyeu, ten: 'điểm yếu không được để chống'});
      } else {
        setdiemyeu(false);
      }
      if (nganh === '') {
        setisnganh(true);
        setrrnnganh({...errnganh, ten: 'bạn chưa chọn ngành'});
      } else {
        setisnganh(false);
      }
    };
  }, [isname, isgmail, istuoi, isdiemmanh, isdiemyeu, isnganh]);
  // console.log(isname, 'm4:', txt.ten);

  const nganh = ['CNTT', 'UDPM', 'Đồ Hoạ', 'Kinh Tế', 'LTMT'];

  const _save = () => {
    kiemtra(txt.ten, txt.tuoi, txt.gmail, txt.diemmanh, txt.diemyeu, txt.nganh);
  };
  const _preview = () => {
    if (
      isname == false &&
      isnganh == false &&
      isdiemmanh == false &&
      isdiemyeu == false &&
      isgmail == false &&
      istuoi == false &&
      sv == false
    ) {
      setpreview(false);
    } else {
      alert('no save');
    }
  };
  pickImage = () => {
    let options = {
      storageOptions: {
        //   skipBackup: true,

        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
      },
      // chyển anhe thành base64
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};

        console.log('response', JSON.stringify(response));

        console.log('uri => ', response.assets[0].uri);
        console.log('width => ', response.assets[0].width);
        console.log('height => ', response.assets[0].height);
        console.log('fileSize => ', response.assets[0].fileSize);
        console.log('type => ', response.assets[0].type);
        console.log('fileName => ', response.assets[0].fileName);
        let source1 = response.assets[0].uri;
        let source2 = response.assets[0].base64;
        console.log('base64 => ', source2);
        setbs64(source2);
      }
    });
  };
  const _xuat = () => {
    setpreview(true);
  };

  const tinhtuoi = chuoi => {
    let sotuoi = 0;
    //================================
    let d = new Date();

    let ns = chuoi;

    let tuoi = d.getFullYear() - ns.split('-')[2];

    if (ns.split('-')[1] > d.getMonth() + 1) {
      return tuoi - 1;
    } else {
      if (ns.split('-')[0] > d.getDate()) {
        return tuoi - 1;
      } else {
        return tuoi;
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      {preview && (
        <View style={[styles.nhadulieu, {flex: 1}]}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 30}}>Profile</Text>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                onPress={pickImage}
                style={{
                  backgroundColor: 'gray',
                  borderRadius: 100,
                  width: 200,
                  height: 200,
                }}>
                <Image
                  style={{width: 200, height: 200, borderRadius: 100}}
                  source={{
                    uri: 'data:image/jpeg;base64,' + bs64,
                    //uri: bs64,
                  }}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            <View
              style={{
                alignSelf: 'center',
                width: '95%',
              }}>
              <View style={[styles.input1, {flexDirection: 'row'}]}>
                <View
                  style={{
                    width: '15%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={styles.imgselecbox1}
                    source={require('../img/user.png')}></Image>
                </View>
                <View style={{width: '85%'}}>
                  <TextInput
                    value={txt.ten}
                    style={{paddingRight: 10}}
                    onChangeText={text =>
                      settxt({...txt, ten: text}, setsv(true))
                    }
                    placeholder="Nhập tên"></TextInput>
                </View>
              </View>
              {isname && <Text style={{color: 'red'}}>{errname.ten}</Text>}
              <SelectDropdown
                data={nganh}
                defaultValueByIndex={txt.nganh}
                // defaultValue={'Egypt'}
                onSelect={(selectedItem, index) => {
                  //console.log(selectedItem, index);
                  settxt({...txt, nganh: index}), setsv(true);

                  //  settxt({...txt, tennganh: selectedItem});
                }}
                defaultButtonText={'Chọn ngành học'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                renderDropdownIcon={isOpened => {
                  return (
                    <Image
                      style={styles.imgselecbox}
                      source={require('../img/dropdown.png')}></Image>
                  );
                }}
                buttonTextStyle={styles.bntselect}
                buttonStyle={styles.selecbox}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
              {isnganh && <Text style={{color: 'red'}}>{errnganh.ten}</Text>}
              <View style={[styles.input1, {flexDirection: 'row'}]}>
                <View
                  style={{
                    width: '15%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={styles.imgselecbox1}
                    source={require('../img/date.png')}></Image>
                </View>
                <View style={{width: '85%'}}>
                  <TextInput
                    value={txt.tuoi}
                    style={{paddingRight: 10}}
                    onChangeText={text =>
                      settxt({...txt, tuoi: text}, setsv(true))
                    }
                    placeholder="Nhập ngày sinh"></TextInput>
                </View>
              </View>
              {istuoi && <Text style={{color: 'red'}}>{errtuoi.ten}</Text>}
              <View style={[styles.input1, {flexDirection: 'row'}]}>
                <View
                  style={{
                    width: '15%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={styles.imgselecbox1}
                    source={require('../img/gmail.png')}></Image>
                </View>
                <View style={{width: '85%'}}>
                  <TextInput
                    value={txt.gmail}
                    style={{paddingRight: 10}}
                    onChangeText={text =>
                      settxt({...txt, gmail: text}, setsv(true))
                    }
                    placeholder="Nhập gmail"></TextInput>
                </View>
              </View>
              {isgmail && <Text style={{color: 'red'}}>{errgmail.gmail}</Text>}
              <TextInput
                value={txt.diemmanh}
                onChangeText={text =>
                  settxt({...txt, diemmanh: text}, setsv(true))
                }
                style={styles.input}
                placeholder="Nhập điểm mạnh"></TextInput>
              {isdiemmanh && (
                <Text style={{color: 'red'}}>{errdiemmanh.ten}</Text>
              )}
              <TextInput
                value={txt.diemyeu}
                onChangeText={text =>
                  settxt({...txt, diemyeu: text}, setsv(true))
                }
                style={styles.input}
                placeholder="Nhập điểm yếu"></TextInput>
              {isdiemyeu && (
                <Text style={{color: 'red'}}>{errdiemyeu.ten}</Text>
              )}
              <View
                style={{
                  width: '100%',
                  height: 50,
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity onPress={() => _save()} style={styles.bnt}>
                  <Text style={{fontSize: 25}}>save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => _preview()} style={styles.bnt}>
                  <Text style={{fontSize: 25}}>preview</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
      {!preview && (
        <View>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <Image
              style={{width: 200, height: 200, borderRadius: 100}}
              source={{
                uri: 'data:image/jpeg;base64,' + bs64,
                //uri: bs64,
              }}></Image>
          </View>
          <Text style={styles.text}>Tên :{txt.ten} </Text>
          <Text style={styles.text}>Ngành :{nganh[txt.nganh]} </Text>
          <Text style={styles.text}>ngày sinh :{txt.tuoi} </Text>
          <Text style={styles.text}>tuổi :{tinhtuoi(txt.tuoi)} </Text>
          <Text style={styles.text}>gmail :{txt.gmail} </Text>
          <Text style={styles.text}>điểm mạnh :{txt.diemmanh} </Text>
          <Text style={styles.text}>điểm yếu :{txt.diemyeu} </Text>

          <Button onPress={() => _xuat()} title="edit"></Button>
        </View>
      )}
    </View>
  );
};

export default Lap_2_1;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginTop: 5,
    height: 50,
    backgroundColor: 'white',
  },
  input1: {
    width: '100%',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,

    marginTop: 5,
    height: 50,
    backgroundColor: 'white',
  },
  selecbox: {
    width: '100%',

    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginTop: 5,
  },
  bnt: {
    width: '40%',
    height: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  imgselecbox: {
    width: 30,
    height: 30,
  },
  imgselecbox1: {
    width: 30,
    height: 30,
  },
  dropdown1DropdownStyle: {backgroundColor: 'green'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  bntselect: {
    textAlign: 'left',
  },
  text: {
    fontSize: 30,
  },
});
