import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './components/Logo';
import Input from './components/Input';
import SignUp from "./components/SignUp";
import Account from './components/Account';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Input />
      <SignUp/>
      <Account/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#E3F0F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});