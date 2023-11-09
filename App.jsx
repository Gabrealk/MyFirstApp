/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  return (
    <SafeAreaView>

      <ToDoList/>
      <ToDoForm />
     
    </SafeAreaView>
  );
}


export default App;
