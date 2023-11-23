
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
  
function ToDoList({ tasks }) {  

    return (
      <SafeAreaView>
        <ScrollView>
            {tasks.map((task, index) => ( 
            <Pressable key={index}>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>{task}</Text>
                </View>
            </Pressable>
            ))}
        </ScrollView>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    }
});

export default ToDoList;