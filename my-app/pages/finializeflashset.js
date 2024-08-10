import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FlashcardSetDetailsScreen = ({ navigation }) => {
  const [setName, setSetName] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    // Auto-fill the current date when the component mounts
    const currentDate = new Date().toLocaleDateString();
    setDate(currentDate);
  }, []);

  const handleSaveSet = () => {
    // Handle the save logic here (e.g., save to a database or state)
    // Navigate back to a relevant screen, such as the home screen or a summary screen
    navigation.navigate('CreateFlashcardSet');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Set Name"
        value={setName}
        onChangeText={setSetName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Subject"
        value={subject}
        onChangeText={setSubject}
      />

      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        editable={false} // Prevents the user from editing the date
      />

      <Button title="Create New Set" onPress={handleSaveSet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default FlashcardSetDetailsScreen;
