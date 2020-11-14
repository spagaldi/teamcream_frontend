import React from 'react';
import { StyleSheet, Text, Image, View, Alert, Dimensions } from 'react-native';
import axios from 'axios';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const OAuth = () => {
  const axiosGoogle = async() => {
    await axios.create({
      baseURL: 'http://10.0.2.2:3000',
      headers: {
        'Content-Type': 'application/json'
      },
    }).
  get('/google')
    .then(function (response) {
      console.log('response');
      console.log(response.data);
      console.log(response.data.token);
    })
    .catch(function (error) {
      console.log('error');
      console.log(error);
    });
  }
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ paddingTop: height * 0.012, flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.facebookLogo} source={require('../../images/facebook_logo.png')} />
        <Text style={{ color: 'blue' }} onPress={() => Alert.alert('Facebook Button Pressed')}>
          Connect with Facebook
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.googleLogo} source={require('../../images/google_logo.png')} />
        <Text
          style={{ paddingLeft: width * 0.012, color: 'blue' }}
          onPress={() => axiosGoogle()}>
          Connect with Google
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  facebookLogo: {
    width: width * 0.07,
    height: height * 0.06,
    resizeMode: 'contain',
  },
  googleLogo: {
    width: width * 0.043,
    height: height * 0.043,
    resizeMode: 'contain',
  },
});

export default OAuth;
