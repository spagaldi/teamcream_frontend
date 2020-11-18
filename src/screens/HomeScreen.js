import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationContext } from 'react-navigation';
import SearchBar from '../components/SearchBar';
import useRecipes from '../hooks/useRecipes';
import RecipeList from '../components/RecipeList';

const Tab = createBottomTabNavigator();

function Home() {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useRecipes();

  const filterResultsByPrice = (price) => {
    // price === $ $$ $$$
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
      // <SearchBar
      //   term={term}
      //   onTermChange={(newTerm) => setTerm(newTerm)}
      //   onTermSubmit={() => searchApi(term)}
      // /> 
    <View style={styles.container}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RecipeList title="Welcome Back!" results={filterResultsByPrice('$')} />
        <RecipeList title="Continue where you left off!" results={filterResultsByPrice('$$')} />
        <RecipeList title="What you can make right now!" results={filterResultsByPrice('$$$')} />
        <RecipeList title="Popular!" results={filterResultsByPrice('$$$')} />
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#FEF4D1',
  },
});

export default HomeScreen;
