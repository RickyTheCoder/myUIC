import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import { View, TextInput, Button, Text} from 'react-native';

import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginScreen from './Login.js';
import HomeScreen from './Home.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login', headerLeft: null }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({ navigation }) => ({
            title: 'MyUIC Home',
            headerLeft: null, 
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: 'blue',fontWeight: 'bold', marginRight: 15 }}>Logout</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}