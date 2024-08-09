import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/login';
import RegisterScreen from '../pages/register';
import HomeScreen from '../pages/home';
import CreateFlashcardSetScreen from '../pages/addingflashcards'; // Placeholder
import ReviewFlashcardSetsScreen from '../pages/flashcardsets'; // Placeholder
import FlashcardSetDetailScreen from '../pages/flashcardViewing'; // Placeholder
import FinalizeSet from '../pages/finializeflashset'; // Placeholder


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Register' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="CreateFlashcardSet" 
          component={CreateFlashcardSetScreen} 
          options={{ title: 'Create Flashcard Set' }} 
        />
        <Stack.Screen 
          name="ReviewFlashcardSets" 
          component={ReviewFlashcardSetsScreen} 
          options={{ title: 'Review Flashcard Sets' }} 
        />
        <Stack.Screen 
          name="FlashcardSetDetail" 
          component={FlashcardSetDetailScreen} 
          options={{ title: 'Flashcard Set Detail' }} 
        />
        <Stack.Screen 
          name="FinalizeSet" 
          component={FinalizeSet} 
          options={{ title: 'Finalize Set' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;