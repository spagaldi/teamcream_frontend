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
import { ScrollView } from 'react-native-gesture-handler';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const ProfilePic = ({ navigation }) => {
  const [profilePicture, setProfilePicture] = useState(require("../../images/profilepicicons/Group_15.png"));

  return (
    <View style={styles.canvas}>
      {/* Profilepic img */}
      <Image
        resizeMode="cover"
        style={{backgroundColor: "white", width: 0.55 * width, height: 0.25 * height, borderRadius: 400/2, borderColor: "black", borderWidth: 2}}
        source={profilePicture}
      />

      {/* Next Button */}
      <TouchableOpacity
        style={{ top: '2%' }}
        onPress={() => navigation.navigate('DietaryRestrictions')}>
        <Text
          style={{
            fontStyles: 'Roboto',
            width: 300,
            height: 35,
            backgroundColor: '#C1BEBE',
            borderColor: 'black',
            borderWidth: 1,
            textAlign: "center",
          }}>
          Next
        </Text>
      </TouchableOpacity>

      {/* Choose an Icon */}
      <Text
        style={{
          top: '6%',
          right: '25%',
          fontWeight: 'bold',
          fontSize: 20
        }}>
        Choose an Icon
      </Text>
      <ScrollView style = {{width: width * .90, top: height * .06}}>
        <View style = {{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/popcorn.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/popcorn.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/burger.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/burger.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/chips.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/chips.png")}/>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/bento_box.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/bento_box.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/coffee.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/coffee.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/food_truck.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/food_truck.png")}/>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/fork.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/fork.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/hotdog.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/hotdog.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/rice.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/rice.png")}/>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/menu.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/menu.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/ketchup.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/ketchup.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/soda.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/soda.png")}/>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: "row", marginBottom: "23%"}}>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/taco.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/taco.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/icecream.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/icecream.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setProfilePicture(require("../../images/profilepicicons/donut.png"))}>
            <Image resizeMode="contain" style={styles.icons} source = {require("../../images/profilepicicons/donut.png")}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  icons: {width: 100, height: 100, marginTop: 10, marginLeft: 12, marginRight: 12, borderColor: "black", borderWidth: 2, borderRadius: 400/2, backgroundColor: "white"},
});

export default ProfilePic;
