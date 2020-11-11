import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Dimensions, Alert} from 'react-native';

const dimensions = Dimensions.get('window');
const width = dimensions.width;
const height = dimensions.height;


const styles = StyleSheet.create({
    canvas: {
      flex: 1,
      backgroundColor: '#fef4d1',
      alignItems: "center"
    },
  });

const DietaryRestrictions = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style = {styles.canvas}>
            <View style={{top: height * .15}}>
                <Text style = {{
                    fontWeight: "900",
                    fontFamily: "Roboto",
                    fontSize: 26,
                    width: (width -30),
                }}> Please Select All That Apply:
                </Text>
            </View>
            <View style={{top: height * .25, backgroundColor: "#ffff", width: width - 40, height: height * .55, 
            flexDirection: "column"}}>
                <Text style={{fontFamily: "Roboto", fontSize:20, fontWeight: "900"}}>Dietary Restrictions</Text>
                <View style= {{backgroundColor: "red", height: '10%', marginTop: 10, borderStyle: "solid", borderColor: 'black', 
                borderWidth: 2, borderRadius: 3}}>
                    <Text style={{top: '30%', paddingLeft: 6, width: 100}}>Vegetarian?</Text>
                </View>
            </View>
        </View>
    )
}

export default DietaryRestrictions;