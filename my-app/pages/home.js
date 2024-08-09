import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleCreateFlashcardSet = () => {
    // Navigate to the screen where users can create a new flashcard set
    navigation.navigate('CreateFlashcardSet');
  };

  const handleReviewFlashcardSets = () => {
    // Navigate to the screen where users can review existing flashcard sets
    navigation.navigate('ReviewFlashcardSets');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>What would you like to do?</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Create New Flashcard Set" 
          onPress={handleCreateFlashcardSet} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Review Flashcard Sets" 
          onPress={handleReviewFlashcardSets} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
});

export default HomeScreen;
