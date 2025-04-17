import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { API_URL } from '@env';

export default function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const callAPI = async () => {
      try {
        console.log('📡 Calling API:', API_URL);
        const response = await fetch(API_URL);
        const text = await response.text();
        console.log('✅ Response:', text);
        setMessage(text);
      } catch (err: any) {
        console.log('❌ Fetch failed:', err);
        setMessage('Error: ' + err.message + '\n' + JSON.stringify(err));
      }
    };

    callAPI();
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
