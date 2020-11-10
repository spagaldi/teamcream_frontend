import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './SignIn.js';
import Username from './Username.js';
import ResetPw from './ResetPw.js';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (  
    <ResetPw/>
  
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
