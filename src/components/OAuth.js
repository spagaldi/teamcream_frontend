// Android Client ID 1082251707964-3q24citcdtoeo8a7l1rapuc5v5ptvggd.apps.googleusercontent.com
// IOS CLient ID 1082251707964-qu924lu7cj0hcbtu6t7ppq23nb3c9b43.apps.googleusercontent.com

import React from 'react';
import { StyleSheet, Text, Image, View, Alert, Dimensions, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import * as Google from 'expo-google-app-auth';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const OAuth = ({ navigation }) => {
  const signInGoogle = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        iosClientId: '1082251707964-qu924lu7cj0hcbtu6t7ppq23nb3c9b43.apps.googleusercontent.com',
        androidClientId:
          '1082251707964-3q24citcdtoeo8a7l1rapuc5v5ptvggd.apps.googleusercontent.com',
        iosStandaloneAppClientId:
          '1082251707964-qu924lu7cj0hcbtu6t7ppq23nb3c9b43.apps.googleusercontent.com',
        androidStandaloneAppClientId:
          '1082251707964-3q24citcdtoeo8a7l1rapuc5v5ptvggd.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (type === 'success') {
        console.log('success');
        /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        console.log(accessToken);
        console.log(user);

        navigation.navigate('Home');

        // TODO!
        // Call backend, send email to them... they either create a new user or return existing user json web token
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ paddingTop: height * 0.012, flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.facebookLogo} source={require('../../images/facebook_logo.png')} />
        <TouchableOpacity onPress={() => Alert.alert('Facebook Button Pressed')}>
          <Text style={{ color: 'blue' }}>Connect with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.googleLogo} source={require('../../images/google_logo.png')} />
        <TouchableOpacity onPress={() => signInGoogle()}>
          <Text style={{ paddingLeft: width * 0.012, color: 'blue' }}>Connect with Google</Text>
        </TouchableOpacity>
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

export default withNavigation(OAuth);
