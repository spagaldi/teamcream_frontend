import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: '#fef4d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Username extends React.Component{
    render(){
        return (
            <View style={styles.canvas}>
            <Text fontStyles="Rubik">Username</Text>
            <StatusBar style="auto" />
            </View>
        );
    }
}
