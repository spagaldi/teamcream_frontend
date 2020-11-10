import { StatusBar } from 'expo-status-bar';
import React from 'react';
import OAuth from './OAuth.js'
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <View style={{paddingTop: 50}}>
                <Image  
                    style={{ width: 350, height: 300}} 
                    source={require('./images/crumbs_logo.png')}
               />
            </View>

            {/*Sign in*/} 

            <View style={{padding: 15}}>
            <Text>Sign up!</Text> 
                <StatusBar style="auto" />
            </View>
            {/* ENTER EMAIL BOX */}
            <View>
                <TextInput
                    style={{ width: 300, height: 35, backgroundColor: '#D9B580', borderColor: 'black', borderWidth: 1 }}
                    placeholder="Enter email or username"
                />
            </View>

             {/* ENTER PASSWORD BOX */}
            <View style={{paddingTop: 15}}>
                <TextInput
                style={{ width: 300, height: 35, backgroundColor: '#D9B580', borderColor: 'black', borderWidth: 1 }}
                placeholder="Enter password"
                />
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress= {() => Alert.alert('Enter password button pressed')}>
                    <Image source={require('./images/submit.png')}
                        style={{ width: 50, height: 50 }}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* LINE OR LINE */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 2, backgroundColor: 'black', marginLeft: "5%"}}/>
                <View>
                    <Text style={{width: 50, textAlign: 'center', fontFamily: 'Roboto'}}>OR</Text>
                </View>
                <View style={{flex: 1, height: 2, backgroundColor: 'black', marginRight: "5%"}}/>
            </View>

            <View style={{alignItems:'center'}}>
            </View>

            {/* Facebook and google OAuth*/}
            <OAuth/>

            {/* SIGN UP */}

            <View style={{ paddingTop: 100, flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{marginRight: 5}}>
                    No Account? 
                </Text>
                <Text style={{fontWeight: 'bold'}} onPress={() => Alert.alert('Sign up link pressed')}>
                    Sign up
                </Text>
            </View>

            {/* Forgot Password */}
            <Text style={{fontWeight: 'bold'}} onPress={() => Alert.alert('Forgot password link pressed')}>
                    Forgot Password?
            </Text>
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

export default SignIn;


  