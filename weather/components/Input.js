import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input() {

  
  return (
    <View style={styles.inputGroup}>
      {/* Email Input */}
      <View style={styles.container}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.emailInput}

        />
      </View>
      {/* Password Input */}
      <View style={styles.container}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.passwordInput}
          
          secureTextEntry
        />
        
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    paddingTop: 10,

  },
  container: {
    alignItems: 'center',
    marginBottom: 10,

  },
  label: {
    color: 'black',
    fontSize: 11,

    fontWeight: '500',
    marginBottom: 5, // Adjust this value to control the spacing between the label and input
  },
  emailInput: {
    width: 312,
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 10,
  },
  passwordInput: {
    width: 312,
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 10,
  },

});