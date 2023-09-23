import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Input from './Input';
import SignUp from "./SignUp";
import Account from './forgotpass';


export default function frontpg({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../assets/WeatherEats.png')}
          style={styles.logoImage}
        />
        <View style={{ marginBottom: 20 }} />
        <Text style={styles.subtext}>
          Log In
        </Text>
      </View>
      <Input />
      <Account />
      <SignUp />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#E3F0F6',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#E3F0F6',
    marginBottom: 20,
    marginTop: 100, 
  },
  logoImage: {
    width: 368,
    height: 225,

  },
  subtext: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Georama',
    fontWeight: '400',
  },
});
