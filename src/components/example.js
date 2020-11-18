import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const example = () => {
  return (
    <View style={{ paddingTop: 30 }}>
      <Image
        source={require('../../images/cooking_with_crumbs_logo.PNG')} // TODO: replace with image that's not cut off
        style={{ width: 275, height: 275 }}
      />
    </View>
  );
};

export default example;
