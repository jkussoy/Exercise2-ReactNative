import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Download from './Assets/be-a-Programmer.jpg';
import code from './Assets/code.jpeg';
import tech from './Assets/tech.jpeg';

const App = () => {
  const handlePress = () => {
    alert('Welcome to RN');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Basic Components in RN</Text>
    <ScrollView>
      <TextInput
        style={styles.inputcollum}
        placeholder="   Masukan Username anda"
        placeholderTextColor="black"
        secureTextEntry
      />
      <TextInput
        style={styles.inputcollum}
        placeholder="   Masukan Password Anda"
        placeholderTextColor="black"
        secureTextEntry
      />
      <TouchableOpacity
          onPress={handlePress}
          style={styles.touchableOpacity}>
          <Text style={styles.touchableText}>submit</Text>
        </TouchableOpacity>
        <View style={styles.colorBoxesContainer}>
          <View style={[styles.colorBox, {backgroundColor: 'black'}]} />
          <View style={[styles.colorBox, {backgroundColor: 'grey'}]} />
          <View style={[styles.colorBox, {backgroundColor: 'black'}]} />
        </View>
        <Image
          source={require('./Assets/uk.png')}
          style={styles.image}
        />
        <Text style={styles.uk}>Universitas Klabat</Text>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.image}
        />
        <Text style={styles.rn}>React Native</Text>
        <Image source={Download} style={styles.image} />
        <Text style={styles.prog}>Become A Professional Programer</Text>
        <Text style={styles.ty}>Thankyou For visiting</Text>
        <View style={styles.colorBoxesContainer1}>
          <View style={[styles.colorBox1, {backgroundColor: 'black'}]} />
          <View style={[styles.colorBox1, {backgroundColor: 'grey'}]} />
          <View style={[styles.colorBox1, {backgroundColor: 'black'}]} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#bebebe',
    borderColor: 'black',
    borderRadius: 10,
  },
  inputcollum: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  colorBoxesContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    borderRadius: 20,
    marginBottom: 20,
  },
  colorBox: {
    marginTop: 5,
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  colorBoxesContainer1: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    borderRadius: 20,
    marginBottom: 80,
  },
  colorBox1: {
    marginTop: 5,
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 20,
  },
  touchableOpacity: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  touchableText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  uk:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  rn:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  prog:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  ty:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
export default App;
