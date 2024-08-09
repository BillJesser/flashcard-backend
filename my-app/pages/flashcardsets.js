import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ReviewFlashcardSetsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [flashcardSets, setFlashcardSets] = useState([
    { id: '1', title: 'Spanish Vocabulary' },
    { id: '2', title: 'Biology Terms' },
    { id: '3', title: 'History Dates' },
    // Add more flashcard sets here
  ]);

  const filteredFlashcardSets = flashcardSets.filter(set =>
    set.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectSet = (setId) => {
    // Navigate to a screen to review the selected flashcard set
    navigation.navigate('FlashcardSetDetail', { setId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Flashcard Sets</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search Flashcard Sets"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredFlashcardSets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectSet(item.id)}>
            <View style={styles.flashcardSetItem}>
              <Text style={styles.flashcardSetTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  flashcardSetItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 5,
  },
  flashcardSetTitle: {
    fontSize: 18,
  },
});

export default ReviewFlashcardSetsScreen;
