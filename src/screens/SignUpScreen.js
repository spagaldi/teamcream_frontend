import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TextInputComponent,
  Alert,
  Dimensions,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import axios from 'axios';
import OAuth from '../components/OAuth';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const SignUpAxios = async () => {
    await axios
      .create({
        baseURL: 'http://10.0.2.2:3000',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .post('/signup', {
        email,
        password,
      })
      .then(function (response) {
        console.log('response');
        console.log(response.data);
        if (response.data.token) {
          setToken(response.data.token);
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

  console.log(email, password);

  return (
    <KeyboardAwareScrollView 
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={styles.container}
    scrollEnabled={false}>
      <View style={styles.logo}>
        <Image source={require('../../images/cwc_logo_simple.png')} style={styles.CWCLogo} />
      </View>
      <View style={styles.SignUpInput}>
        <Text style={styles.SignUpText}>Email Sign-Up</Text>
        <TextInput
          style={styles.inputBox}
          placeholder=" Enter Email or username"
          value={email}
          onChangeText={(newTerm) => setEmail(newTerm)}
        />
        <TextInput
          style={styles.inputBox}
          placeholder=" Enter Password"
          value={password}
          onChangeText={(newTerm) => setPassword(newTerm)}
        />
        <Button
          onPress={() => SignUpAxios()}
          // style={styles.acctButton}
          title=" Create Account"
          color="#D9B580"
        />
      </View>

      {error ? <Text>{error}</Text> : null}

      {/* LINE OR LINE */}
      <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.line} />
        <View>
          <Text style={{ width: width * 0.1, textAlign: 'center' }}>OR</Text>
        </View>
        <View style={styles.line} />
      </View>

      {/* Facebook and google OAuth */}
      <View style={styles.OAuth}>
        <OAuth />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    flex: 0.4,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    right: width * 0.3,
  },
  CWCLogo: {
    width: width * 0.25,
    height: height * 0.25,
    resizeMode: 'contain',
  },
  SignUpInput: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    width: width * 0.85,
  },
  SignUpText: {
    paddingBottom: '5%',
    fontFamily: 'monospace',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 20,
    borderBottomWidth: 2,
    marginBottom: '8%',
  },
  inputBox: {
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 0.5,
    marginTop: '0%',
    marginBottom: '7%',
    height: '20%',
  },
  line: {
    flex: 0.5,
    height: height * 0.002,
    backgroundColor: 'black',
  },
  OAuth: {
    justifyContent: 'center',
    paddingBottom: '20%',
  },
});

export default SignUp;
