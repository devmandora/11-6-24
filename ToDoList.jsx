import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: { flex: 1, marginTop: 10 },
  task: { fontSize: 18, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ddd' },
});
