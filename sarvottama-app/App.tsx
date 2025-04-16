import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { API_URL } from '@env';

export default function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    console.log('Calling API:', API_URL);
    //fetch('https://sarvoapp-production.up.railway.app') // Replace with your IPv4 address
    fetch(API_URL)
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
