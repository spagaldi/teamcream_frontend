import React from 'react';
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

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const ResetPw = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.boldedText}>Send Reset Password Link</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ height: height * 0.003, width: width * 0.8, backgroundColor: 'black' }} />
        </View>
      </View>
      <View style={{ alignItems: 'center', padding: height * 0.035 }}>
        <TextInput style={styles.textInputStyle} placeholder=" Enter email" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Send reset password link pressed')}>
        <Text>Send Link</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: height * 0.035 }}>
        <View style={{ height: height * 0.003, width: width * 0.8, backgroundColor: 'black' }} />
      </View>
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Text>Already have an account? </Text>
        
        <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('SignIn')}> Log In.</Text>
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
