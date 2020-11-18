import React, { useState } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Dimensions,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import OAuth from '../components/OAuth';
import DietaryRestrictions from './DietaryRestrictions';

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
          navigation.navigate('Home', { token: response.data.token });
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
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.logoStyle}
          source={require('../../images/crumbs_logo2.png')}
        />
      </View>
      <TextInput
        style={styles.textInputStyle}
        placeholder=" Enter email or username"
        value={email}
        onChangeText={(newTerm) => setEmail(newTerm)}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder=" Enter password"
        secureTextEntry
        value={password}
        onChangeText={(newTerm) => setPassword(newTerm)}
      />

      <TouchableHighlight style={styles.loginButtonWrapper}>
        <Button onPress={() => SignInAxios()} title="Login" color="#D9B580" />
      </TouchableHighlight>

      {/* LINE OR LINE */}
      <View style={styles.lineOrLine}>
        <View style={styles.leftLine} />
        <View>
          <Text style={styles.or}>OR</Text>
        </View>
        <View style={styles.rightLine} />
      </View>

      {/* Facebook and google OAuth */}
      <OAuth />

      {/* SIGN UP */}
      <View style={styles.accountWrapper}>
        <View style={styles.noAccount}>
          <Text>No Account? </Text>
          <Text style={styles.textWeight} onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Text>
        </View>
        {/* Forgot Password */}
        <Text style={styles.textWeight} onPress={() => navigation.navigate('ResetPw')}>
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
  },
  imageContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: 0.8 * width,
    height: 0.375 * height,
  },
  textInputStyle: {
    paddingLeft: width * 0.02,
    width: width * 0.76,
    height: height * 0.052,
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 15,
    flexDirection: 'row',
    marginHorizontal: width * 0.12,
  },
  loginButtonWrapper: {
    marginHorizontal: width * 0.12,
    width: width * 0.76,
    height: height * 0.052,
    justifyContent: 'center',
    marginBottom: 15,
  },
  lineOrLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftLine: {
    flex: 1,
    height: height * 0.003,
    backgroundColor: 'black',
    marginLeft: '12%',
  },
  or: {
    width: width * 0.1,
    textAlign: 'center',
  },
  rightLine: {
    flex: 1,
    height: height * 0.003,
    backgroundColor: 'black',
    marginRight: '12%',
  },
  accountWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  noAccount: {
    flexDirection: 'row',
    marginBottom: height * 0.01,
  },
  textWeight: { fontWeight: 'bold' },
});

export default SignIn;
