import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    } else if (!taskText) {
      alert('Please enter a task');
    } else {
      alert('Task already exists!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
