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
import js from './Assets/javascript.jpeg';
import vscode from './Assets/vscode.png';

const App = () => {
  const handlePress = () => {
    alert('Welcome to RN');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Haiii</Text>
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
        <Text style={styles.hy}>Welcome To Basic Component In RN</Text>
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
        <Image source={vscode} style={styles.image} />
        <Text style={styles.vscode}>Visual Studio Code</Text>
        <Image source={js} style={styles.image} /> 
        <Text style={styles.js}>Java Script</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#bebebe',
    borderColor: 'black',
    borderRadius: 50,
  },
  inputcollum: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 30,
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
    marginBottom: 120,
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
  hy: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  uk: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  rn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  prog: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  ty: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,

  },
  js: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  vscode: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
export default App;
