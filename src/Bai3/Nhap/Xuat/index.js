import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Xuat = props => {
  console.log('props', props);
  return (
    <View>
      <Text>Tên: {props.profile.ten}</Text>
      <Text>Ngành: {props.profile.nganh}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.setIsEdit(true)}>
        <Text style={{color: '#fff'}}>Edit</Text>
      </TouchableOpacity>
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
export default Xuat;
