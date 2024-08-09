import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlashcardSetDetailScreen = ({ route }) => {
  const { setId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcard Set Detail</Text>
      <Text style={styles.content}>Viewing flashcards for set ID: {setId}</Text>
      {/* Implement the logic to display the flashcards here */}
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
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FlashcardSetDetailScreen;
