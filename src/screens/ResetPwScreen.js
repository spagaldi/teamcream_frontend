import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import axios from 'axios';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const ResetPw = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const ResetPwAxios = async () => {
    await axios
      .create({
        baseURL: 'http://10.0.2.2:3000',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .put('/forgotpassword', {
        email,
      })
      .then(function (response) {
        console.log('response');
        if (response.data.success) {
          navigation.navigate('EmailSent');
        }
        response.data.error ? setError(response.data.error) : null;
        console.log(response.data.error);
        console.log(response.data.success);
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.boldedText}>Send Reset Password Link</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ height: height * 0.003, width: width * 0.8, backgroundColor: 'black' }} />
        </View>
      </View>
      <View style={{ alignItems: 'center', padding: height * 0.035 }}>
        <TextInput
          style={styles.textInputStyle}
          placeholder=" Enter email"
          value={email}
          onChangeText={(newTerm) => setEmail(newTerm)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => ResetPwAxios()}>
        <Text>Send Link</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: height * 0.035 }}>
        <View style={{ height: height * 0.003, width: width * 0.8, backgroundColor: 'black' }} />
      </View>
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Text>Already have an account? </Text>

        <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('SignIn')}>
          {' '}
          Log In.
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
    justifyContent: 'center',
  },
  textInputStyle: {
    width: width * 0.8,
    height: height * 0.052,
    paddingLeft: width * 0.02,
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
  },
  boldedText: {
    fontSize: RFPercentage(3.5),
    textAlign: 'center',
    fontWeight: 'bold',
    margin: height * 0.012,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D9B580',
    padding: height * 0.018,
    width: width * 0.8,
  },
});

export default ResetPw;
