import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const ProfilePic = ({ navigation }) => {
  const [isVegetarian, setIsVegetarian] = useState(true);

  return (
    <View style={styles.canvas}>
      {/* Profilepic img */}
      <Image
        resizeMode="contain"
        style={{ width: 0.75 * width, height: 0.3 * height }}
        source={require('../../images/add_photo_icon_profilepic.png')}
      />

      {/* Next Button */}
      <TouchableOpacity
        style={{ top: '1%' }}
        onPress={() => navigation.navigate('DietaryRestrictions')}>
        <Text
          style={{
            fontStyles: 'Roboto',
            width: 300,
            height: 35,
            backgroundColor: '#C1BEBE',
            borderColor: 'black',
            borderWidth: 1,
          }}>
          Next
        </Text>
      </TouchableOpacity>

      {/* Choose an Icon */}
      <Text
        style={{
          top: '50%',
        }}>
        Choose an Icon
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: '#fef4d1',
    alignItems: 'center',
  },

  boxes: {
    backgroundColor: 'white',
    height: '10%',
    marginTop: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 3,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#C1BEBE',
    height: '4.4%',
    marginTop: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 3,
    top: '13%',
    left: '32s%',
  },

  text: { top: '30%', paddingLeft: 6, width: 100 },
  buttontext: { top: '30%', left: '8%', width: 90 },
});

export default ProfilePic;
