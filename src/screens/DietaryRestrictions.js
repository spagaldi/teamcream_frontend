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

const DietaryRestrictions = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.canvas}>
      {/* Header: please select all that Apply */}
      <View style={{ top: height * 0.15 }}>
        <Text
          style={{
            fontWeight: '900',
            fontFamily: 'Roboto',
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
        <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: '900' }}>
          Dietary Restrictions
        </Text>

        {/* The boxes */}
        <View style={styles.boxes}>
          <Text style={styles.text}>Vegetarian?</Text>
          <View style={{ alignItems: 'flex-end', marginRight: width * 0.03 }}>
            <FontAwesome name="circle" size={14} color="red" />
          </View>
        </View>

        <View style={styles.boxes}>
          <Text style={styles.text}>Dairy Free?</Text>
          <View style={{ alignItems: 'flex-end', marginRight: width * 0.03 }}>
            <FontAwesome name="circle" size={14} color="#00FF38" />
          </View>
        </View>

        <View style={styles.boxes}>
          <Text style={styles.text}>Vegan?</Text>
          <View style={{ alignItems: 'flex-end', marginRight: width * 0.03 }}>
            <FontAwesome name="circle" size={14} color="red" />
          </View>
        </View>

        <View style={styles.boxes}>
          <Text style={styles.text}>Gluten Free?</Text>
          <View style={{ alignItems: 'flex-end', marginRight: width * 0.03 }}>
            <FontAwesome name="circle" size={14} color="red" />
          </View>
        </View>
      </View>
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

  text: { top: '30%', paddingLeft: 6, width: 100 },
});

export default DietaryRestrictions;
