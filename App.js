import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './src/screens/SignInScreen.js';
import SignUp from './src/screens/SignUpScreen';
import Username from './src/screens/UsernameScreen.js';
import ResetPw from './src/screens/ResetPwScreen.js';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import DietaryRestrictions from './src/screens/DietaryRestrictions.js';

export default function App() {
  return (  
    // <ResetPw/>
    // <SignUp />

    // <SignIn /> 

    // <Username /> 
       <DietaryRestrictions />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF4D1',
    alignItems: 'center',
  },
  button: {
    paddingTop: 15,
    backgroundColor: '#ffffff',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15       
 }
});
