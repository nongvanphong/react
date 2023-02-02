import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Xuat from './Xuat';

// const PreviewProfile = props => {
//   console.log('props', props);
//   return (
//     <View>
//       <Text>Tên: {props.profile.ten}</Text>
//       <Text>Ngành: {props.profile.nganh}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => props.setIsEdit(true)}>
//         <Text style={{color: '#fff'}}>Edit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const Nhap = () => {
  const [profile, setProfile] = useState({
    ten: '',
    nganh: '',
    tuoi: 0,
    diemyeu: '',
    diemmanh: '',
  });
  const [isEdit, setIsEdit] = useState(true);
  const [erros, setErros] = useState({});
  const [ten, sten] = useState();
  const [ten1, sten1] = useState(false);

  const handleSubmit = () => {
    if (profile.ten === '') {
      setErros({...erros, ten: 'tên kho được để trống!'});
      sten1(true);
    } else {
      sten1(false);
    }

    setIsEdit(false);
  };

  console.log('profile', profile);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {isEdit && (
        <View>
          <TextInput
            defaultValue={profile.ten}
            onChangeText={text => {
              setProfile({...profile, ten: text});
            }}
            style={styles.textInput}
            placeholder="nhập tên"
          />
          {ten1 && <Text style={{color: 'red'}}>{erros.ten}</Text>}
          <TextInput
            defaultValue={profile.nganh}
            onChangeText={text => {
              setProfile({...profile, nganh: text});
            }}
            style={styles.textInput}
            placeholder="nhập ngành"
          />
          <TextInput
            onChangeText={text => {
              setProfile({...profile, tuoi: text});
            }}
            style={styles.textInput}
            placeholder="nhập tuổi"
          />
          <TextInput
            onChangeText={text => {
              setProfile({...profile, diemyeu: text});
            }}
            style={styles.textInput}
            placeholder="nhập điểm yếu"
          />
          <TextInput
            onChangeText={text => {
              setProfile({...profile, diemmanh: text});
            }}
            style={styles.textInput}
            placeholder="nhập điểm mạnh"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{color: '#fff'}}>Change</Text>
          </TouchableOpacity>
        </View>
      )}
      {!isEdit && <Xuat setIsEdit={setIsEdit} profile={profile} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});
export default Nhap;
