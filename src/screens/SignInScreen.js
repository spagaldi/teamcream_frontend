import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import OAuth from '../components/OAuth';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: height * 0.05, marginBottom: height * 0.05 }}>
        <Image
          resizeMode="contain"
          style={{ width: 0.75 * width, height: 0.3 * height }}
          source={require('../../images/crumbs_logo.png')}
        />
      </View>

      {/* Sign in */}
      {/*
            <View style={{padding: height*.03}}>
            <Text>Sign up!</Text> 
                <StatusBar style="auto" />
            </View>
            */}
      {/* ENTER EMAIL BOX */}
      <View>
        <TextInput style={styles.textInputStyle} placeholder=" Enter email or username" />
      </View>

      {/* ENTER PASSWORD BOX */}
      <View style={{ paddingTop: height * 0.025, paddingBottom: height * 0.012 }}>
        <TextInput style={styles.textInputStyle} placeholder=" Enter password" />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Username')}>
            {/* <Image source={require('../../images/submit.png')}
                        style={{ width: width*.08, height: height*.08 }}/> */}
            <Entypo name="arrow-bold-right" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* LINE OR LINE */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{ flex: 1, height: height * 0.003, backgroundColor: 'black', marginLeft: '5%' }}
        />
        <View>
          <Text style={{ width: width * 0.1, textAlign: 'center' }}>OR</Text>
        </View>
        <View
          style={{ flex: 1, height: height * 0.003, backgroundColor: 'black', marginRight: '5%' }}
        />
      </View>

      <View style={{ alignItems: 'center' }} />

      {/* Facebook and google OAuth */}
      <OAuth />

      {/* SIGN UP */}

      <View style={styles.bottom}>
        <View style={{ flexDirection: 'row', paddingBottom: height * 0.01 }}>
          <Text>No Account? </Text>
          <Text style={{ fontWeight: 'bold' }} onPress={() => Alert.alert('Sign up link pressed')}>
            Sign up
          </Text>
        </View>
        {/* Forgot Password */}
        <Text
          style={{ fontWeight: 'bold' }}
          onPress={() => Alert.alert('Forgot password link pressed')}>
          Forgot Password?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF4D1',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: height * 0.05,
    alignItems: 'center',
  },
  textInputStyle: {
    width: width * 0.8,
    height: height * 0.052,
    backgroundColor: '#D9B580',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default SignIn;
