import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const SignUp = () => {
    return (
        <View style={styles.container}>
            <View style={{paddingTop: 30}}>
                <Image source={{uri: 'https://imgur.com/wvhuIOc.png'}} //TODO: replace with image that's not cut off
                style={{ width: 275, height: 275 }}/>
            </View>
            <View style={{padding: 15}}>
            <Text>Sign up!</Text> 
                <StatusBar style="auto" />
            </View>
            <View>
                <TextInput
                    style={{ width: 300, height: 35, backgroundColor: '#D9B580', borderColor: 'black', borderWidth: 1 }}
                    placeholder="Enter email or username"
                />
            </View>
            <View style={{paddingTop: 15}}>
                <TextInput
                style={{ width: 300, height: 35, backgroundColor: '#D9B580', borderColor: 'black', borderWidth: 1 }}
                placeholder="Enter password"
                />
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress= {() => Alert.alert('Simple Button pressed')}>
                    <Image source={{uri: 'https://imgur.com/Lp3hAky.png'}} 
                        style={{ width: 50, height: 50 }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
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

export default SignUp;


  