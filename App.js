import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import SignIn from './src/screens/SignInScreen.js';
import Username from './src/screens/UsernameScreen.js';
import ResetPw from './src/screens/ResetPwScreen.js';
import DietaryRestrictions from './src/screens/DietaryRestrictions.js';

const navigator = createStackNavigator(
  {
    SignIn,
    Username,
    ResetPw,
    DietaryRestrictions
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      title: 'Cooking with Crumbs'
    }
  }
)

export default createAppContainer(navigator);