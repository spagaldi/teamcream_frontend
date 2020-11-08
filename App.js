import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (  
    <View style={styles.container}>
      <Image source={require('C:\Shreya\UCSD\Junior Year\CSE 110\Frontend Files\AwesomeProject\cooking_with_crumbs_logo.PNG')} />
      <Text>Sign up!</Text> 
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF4D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
