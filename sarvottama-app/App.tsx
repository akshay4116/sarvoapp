import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('https://sarvoapp-production.up.railway.app') // Replace with your IPv4 address
      .then(res => res.text())
      .then(setMessage)
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <StatusBar style="auto" />
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
