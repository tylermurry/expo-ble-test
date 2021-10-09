import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const updateText = () => setText("Hello Universe!")
  const [text, setText] = useState("Hello World!");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <Button title="Update Message" onPress={updateText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
