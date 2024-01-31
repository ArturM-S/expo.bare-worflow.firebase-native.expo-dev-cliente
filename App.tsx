import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function App() {
  function handleSignIn() {
    auth()
      .signInWithEmailAndPassword('silvamarquesartur@gmail.com', '123456')
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
  return (
    <View style={styles.container}>
      <Text>Entrar com e-mail e senha</Text>
      <Button title="Entrar" onPress={handleSignIn} />
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
