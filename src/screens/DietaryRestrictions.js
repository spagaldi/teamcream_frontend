import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import axiosWithoutToken from '../api/axiosWithoutToken';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const DietaryRestrictions = ({ navigation, route }) => {
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isDairyfree, setIsDairyfree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isGlutenfree, setIsGlutenfree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const DietaryRestrictionAxios = async () => {
    setLoading(true);
    await axiosWithoutToken
      .post('login', {
        isVegetarian,
        isDairyfree,
        isVegan,
        isGlutenfree,
      })
      .then(function (response) {
        setLoading(false);

        if (response.data.sucess) {
          navigation.navigate('Home', { token: response.data.token });
        }

        if (response.data.error) {
          setError(response.data.error);
          setIsVegetarian(false);
          setIsDairyfree(false);
          setIsVegan(false);
          setIsGlutenfree(false);

          setTimeout(() => {
            setError('');
          }, 5000);
        }
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      });
  };

  return (
    // this is how to get profilepic from previous screen
    //  <Image source={navigation.state.params.profilePicture} />
    // or <Image source={navigation.getParam('profilePicture')} />
    <View style={styles.canvas}>
      {/* Header: please select all that Apply */}

      <View style={{ top: height * 0.15 }}>
        <Text style={styles.texttitle}>Please Select All That Apply:</Text>
      </View>

      {/* Container of all the boxes */}
      <View style={styles.boxContainer}>
        {/* isVegetarian Box */}
        <TouchableOpacity style={styles.boxes} onPress={() => setIsVegetarian(!isVegetarian)}>
          <Text style={styles.text}>Vegetarian?</Text>
          <View style={styles.checkBox}>
            <MaterialIcons
              name={isVegetarian ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>

        {/* isDairyFree Box */}
        <TouchableOpacity style={styles.boxes} onPress={() => setIsDairyfree(!isDairyfree)}>
          <Text style={styles.text}>Dairy-free?</Text>
          <View style={styles.checkBox}>
            <MaterialIcons
              name={isDairyfree ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>

        {/* isVegan Box */}
        <TouchableOpacity style={styles.boxes} onPress={() => setIsVegan(!isVegan)}>
          <Text style={styles.text}>Vegan?</Text>
          <View style={styles.checkBox}>
            <MaterialIcons
              name={isVegan ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>

        {/* isGlutenFree Box */}
        <TouchableOpacity style={styles.boxes} onPress={() => setIsGlutenfree(!isGlutenfree)}>
          <Text style={styles.text}>Gluten-free?</Text>
          <View style={styles.checkBox}>
            <MaterialIcons
              name={isGlutenfree ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>

        {/* Confirm Buttom */}
        <Button
          title="Confirm your choices"
          color="#D98580"
          onPress={() => DietaryRestrictionAxios()}
        />
      </View>

      {/* next and back button */}
      {/* <TouchableOpacity style={styles.button}>
        <Text>Confirm Your Choices</Text>
      </TouchableOpacity> */}
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
  title: {
    fontWeight: '900',
    fontSize: 26,
    alignContent: 'center',
  },
  checkBox: {
    top: '20%',
    position: 'absolute',
    right: 0,
    marginRight: width * 0.03,
  },
  boxContainer: {
    marginTop: height * 0.2,
    width: width * 0.95,
    height: height * 0.55,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#C1BEBE',
    height: '4.4%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 3,
    top: '13%',
    left: '32s%',
  },

  text: { top: '30%', paddingLeft: 6 },
  buttontext: { top: '30%', left: '8%' },
});

export default DietaryRestrictions;
