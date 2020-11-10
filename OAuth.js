import React from 'react';
import { StyleSheet, Text, Image, View, Alert, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const width = dimensions.width;
const height = dimensions.height;

const OAuth = () => {
    
    return(
        <View style={{alignItems: 'center'}}>
            <View style={{paddingTop: height*.012, flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.facebookLogo} source = {require('./images/facebook_logo.png') } />
                <Text style={{color: 'blue'}} onPress={() => Alert.alert('Facebook Button Pressed')}> 
                    Connect with Facebook
                </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.googleLogo} source = {require('./images/google_logo.png') } />
                    <Text style={{paddingLeft: width*.012, color: 'blue'}} onPress={() => Alert.alert('Google Button Pressed')}> 
                       Connect with Google
                    </Text>
            </View>
        </View>
        
    );
}


const styles = StyleSheet.create({
    facebookLogo: {
        width: width*.07,
        height: height*0.06,
        resizeMode: 'contain'
    },
    googleLogo: {
        
        width: width*.043,
        height: height*.043,
        resizeMode: 'contain'
    }
});

export default OAuth;