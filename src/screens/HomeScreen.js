import React, { useState } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationContext } from 'react-navigation';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SavedRecipes() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Inventory() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'pink',
        }}>
        <Tab.Screen
          name="Saved Recipes"
          component={SavedRecipes}
          options={{
            tabBarLabel: 'Saved Recipes',
            tabBarIcon: ({ color, size }) => <Octicons name="book" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <Entypo name="circle" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Inventory"
          component={Inventory}
          options={{
            tabBarLabel: 'Inventory',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="fridge-outline" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome name="search" size={24} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({

// });
export default HomeScreen;
