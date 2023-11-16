
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


function ToDoForm({addTask}){

  const [taskText, setTaskText] = React.useState('');

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
  }



    return(
      <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={(text) => setTaskText(text)}
            value={taskText}
            />
        <Button title="Add Task" onPress={handleAddTask}/>
      </View>
    )
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

export default ToDoForm;