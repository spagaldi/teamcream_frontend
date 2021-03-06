import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRecipes from '../hooks/useRecipes';
import RecipeList from '../components/RecipeList';
// import BottomMenu from '../components/BottomMenu';

const HomeScreen = () => {
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
      {/* <BottomMenu /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#FEF4D1',
  },
});

export default HomeScreen;
