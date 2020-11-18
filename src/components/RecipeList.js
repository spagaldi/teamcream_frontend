import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import RecipeDetail from './RecipeDetail';

const RecipeList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            // <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
            <TouchableOpacity onPress={() => console.log(item.id)}>
              <RecipeDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 15,
  },
});

export default withNavigation(RecipeList);
