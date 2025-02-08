import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import backgroundImage from './image.png';
import Svg, { Path, ClipPath, Defs, Image as SvgImage } from 'react-native-svg';
import { Linking } from 'react-native';


export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="contain"
    >
      <View style={styles.container}>
        <Text style={styles.title}> MyUIC Login!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="grey"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="grey"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

       <TouchableOpacity onPress={() => Linking.openURL('https://identity.uillinois.edu/iamFrontEnd/iam/start?campus=uic')} >
         <Text style={styles.signupText}>
           Trouble logging in?
         </Text>
         <Text style={styles.signupLink}>
           Change Password
         </Text>
       </TouchableOpacity>
     </View>
   </ImageBackground>
 );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    height: 260,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 5,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)', 
    padding: 20,
    borderRadius: 19,
    alignItems: 'center',
    width: '85%',
    marginTop: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#e60000',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#666',
    fontSize: 14,
  },
  signupLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  bottomImage: {
    width: '100%', // Or a specific width
    height: 150, // Or a specific height
    position: 'absolute',
    bottom: 30,
    // Add marginTop if needed to slightly lift it
    // marginTop: 10,
  },
});
