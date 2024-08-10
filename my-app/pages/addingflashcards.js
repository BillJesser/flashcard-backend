import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';

const CreateFlashcardSetScreen = ({ navigation }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  const handleAddFlashcard = () => {
    if (word && definition) {
      const newFlashcard = { word, definition };
      setFlashcards([...flashcards, newFlashcard]);
      setWord('');
      setDefinition('');
    } else {
      Alert.alert('Error', 'Please enter both a word and a definition.');
    }
  };

  const handleFinish = () => {
    if (flashcards.length > 0) {
      // Implement logic to save flashcard set
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please add at least one flashcard.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Flashcard Set</Text>

      <TextInput
        style={styles.input}
        placeholder="Word"
        value={word}
        onChangeText={setWord}
      />

      <TextInput
        style={styles.input}
        placeholder="Definition"
        value={definition}
        onChangeText={setDefinition}
      />

      <Button title="Submit to Flashcard Set" onPress={handleAddFlashcard} />

      <FlatList
        data={flashcards}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.flashcard}>
            <Text style={styles.word}>{item.word}</Text>
            <Text style={styles.definition}>{item.definition}</Text>
          </View>
        )}
      />

      <Button 
        title="Done Adding Flashcards" 
        onPress={handleFinish} 
        color="#841584"
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  flashcard: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  definition: {
    fontSize: 16,
  },
});

export default CreateFlashcardSetScreen;
