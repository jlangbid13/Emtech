import React from 'react';
import { StatusBar, TextInput, View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.register}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <Button
          title="Log In" color="#0077B6"
          onPress={() => navigation.navigate('Logins')}
        />
      </View>
      
        <TouchableOpacity>
        <Text style={styles.backToLogin} >
        
        Back to Login
        </Text>
        </TouchableOpacity>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F0F6',
    alignItems: 'center',

  },

  register: {
    fontSize: 45,
    marginTop: 60,
    fontWeight: 'bold',
  },

  inputContainer: {
    marginTop: 100,
    marginBottom: 50,
    padding: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '80%',
    backgroundColor: 'pink', 
  },

  input: {
    height: 40,

    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 10,
  },

  backToLogin: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
});
