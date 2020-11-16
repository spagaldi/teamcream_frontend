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
import { MaterialIcons } from '@expo/vector-icons';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const DietaryRestrictions = ({ navigation }) => {
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isDairyfree, setIsDairyfree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isGlutenfree, setIsGlutenfree] = useState(false);

  return (
    <View style={styles.canvas}>
      {/* Header: please select all that Apply */}
      <View style={{ top: height * 0.15 }}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 26,
            width: width - 30,
          }}>
          {' '}
          Please Select All That Apply:
        </Text>
      </View>

      {/* Container of all the boxes */}
      <View
        style={{
          top: height * 0.2,
          backgroundColor: styles.canvas.backgroundColor,
          width: width - 40,
          height: height * 0.55,
          flexDirection: 'column',
        }}>
        {/* Header of the container "Dietary Restriction" */}
        <Text style={{ fontSize: 20, fontWeight: '900' }}>Dietary Restrictions</Text>

        {/* The boxes */}
        <TouchableOpacity style={styles.boxes} onPress={() => setIsVegetarian(!isVegetarian)}>
          <Text style={styles.text}>Vegetarian?</Text>
          <View style={{ top: '20%', position: 'absolute', right: 0, marginRight: width * 0.03 }}>
            <MaterialIcons name={isVegetarian?"check-box" : "check-box-outline-blank"} size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxes} onPress={() => setIsDairyfree(!isDairyfree)}>
          <Text style={styles.text}>Dairy Free?</Text>
          <View style={{ top: '20%', position: 'absolute', right: 0, marginRight: width * 0.03 }}>
            <MaterialIcons name={isDairyfree?"check-box" : "check-box-outline-blank"} size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxes} onPress={() => setIsVegan(!isVegan)}>
          <Text style={styles.text}>Vegan?</Text>
          <View style={{ top: '20%', position: 'absolute', right: 0, marginRight: width * 0.03 }}>
            <MaterialIcons name={isVegan?"check-box" : "check-box-outline-blank"} size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxes} onPress={() => setIsGlutenfree(!isGlutenfree)}>
          <Text style={styles.text}>Gluten Free?</Text>
          <View style={{ top: '20%', position: 'absolute', right: 0, marginRight: width * 0.03 }}>
            <MaterialIcons name={isGlutenfree?"check-box" : "check-box-outline-blank"} size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* next and back button */}
      {/*<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfilePic')}>
        <Text style={styles.buttontext}>Next</Text>
      </TouchableOpacity>*/}
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

export default DietaryRestrictions;
