import React, { useState } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import OAuth from '../components/OAuth';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const SignInAxios = async () => {
    await axios
      .create({
        baseURL: 'http://10.0.2.2:3000',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .post('/login', {
        email,
        password,
      })
      .then(function (response) {
        console.log('response');
        if (response.data.token) {
          setToken(response.data.token);
          // add a boolean value in backend to check if user already has a profile
          navigation.navigate('ProfilePic', { token: response.data.token });
        }
        response.data.error ? setError(response.data.error) : null;
        console.log(response.data.error);
        console.log(response.data.token);
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      });
  };
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
        <TextInput
          style={styles.textInputStyle}
          placeholder=" Enter email or username"
          value={email}
          onChangeText={(newTerm) => setEmail(newTerm)}
        />
      </View>

      {/* ENTER PASSWORD BOX */}
      <View style={{ paddingTop: height * 0.025, paddingBottom: height * 0.012 }}>
        <TextInput
          style={styles.textInputStyle}
          placeholder=" Enter password"
          secureTextEntry
          value={password}
          onChangeText={(newTerm) => setPassword(newTerm)}
        />
        {/* <View style={{ alignItems: 'center', paddingTop: height*0.01 }}>
          <TouchableOpacity onPress={() => SignInAxios()}>
            <Entypo name="arrow-bold-right" size={36} color="black" />
          </TouchableOpacity>
        </View> */}
      </View>

      <View style ={{
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 3,
        }}>
        <Button   
            onPress={() => SignInAxios()}
            // style={styles.acctButton}
            title=" Create Account"
            color="#D9B580"
            
          />
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
          <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Text>
        </View>
        {/* Forgot Password */}
        <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('ResetPw')}>
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
    paddingLeft: width * 0.02,
    width: width * 0.8,
    height: height * 0.052,
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default SignIn;
