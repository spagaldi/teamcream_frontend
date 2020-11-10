import React from 'react';
import { StyleSheet, Text, Image, View, Alert } from 'react-native';

const OAuth = () => {
    return(
        <View style={{alignItems: 'center'}}>
            <View style={{paddingTop: 4, flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.facebookLogo} source = {require('./images/facebook_logo.png') } />
                <Text style={{color: 'blue'}} onPress={() => Alert.alert('Facebook Button Pressed')}> 
                    Connect with facebook
                </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.googleLogo} source = {require('./images/google_logo.png') } />
                    <Text style={{paddingLeft: 5, color: 'blue'}} onPress={() => Alert.alert('Google Button Pressed')}> 
                       Connect with google
                    </Text>
            </View>
        </View>
        
    );
}


const styles = StyleSheet.create({
    facebookLogo: {
        width: 35,
        height: 35,
        resizeMode: 'center'
    },
    googleLogo: {
        
        width: 20,
        height: 20,
        resizeMode: 'center'
    }
});

export default OAuth;