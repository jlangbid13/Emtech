import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignUp() {
  return (
    <View style={styles.signupGroup}>
    <TouchableOpacity style={styles.container}>
      <Text style={styles.signUp}>Log in</Text>
    </TouchableOpacity>

    <View style={{ marginBottom: 10 }} />


    <TouchableOpacity style={styles.containers}>
      <Text style={styles.signUp}>Sign Up</Text>
    </TouchableOpacity>
    </View>
    
    

    
  )
}

const styles = StyleSheet.create({
  signupGroup:{ // Add spacing between input and Sign Up
    alignItems: "center",
    marginTop: 20,

  },
  container: {
    width: 312,
    height: 25,
    borderRadius: 6,
    backgroundColor: '#151A7B',
    alignItems: "center",
    justifyContent: "center",   
  },
  containers: {
    width: 312,
    height: 25,
    borderRadius: 6,
    backgroundColor: '#0077B6',
    alignItems: "center",
    justifyContent: "center",

  },
  signUp: {
    fontSize: 10,

    fontFamily: 'Familjen Grotesk',
    fontWeight: '500',
    color: '#EEE7DA',
  }
})