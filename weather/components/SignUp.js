import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.signupGroup}>
      <Button
        title="Log in"
        onPress={() => navigation.navigate('Register')}
        color="#151A7B"
        style={styles.button}
      />

      <View style={{ marginBottom: 10 }} />

      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Register')}
        color="#0077B6"
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signupGroup: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    paddingLeft: 40,
    borderRadius: 10,
  },
  signUp: {
    fontSize: 10,
    fontWeight: '500',
    color: '#EEE7DA',
  },
});
