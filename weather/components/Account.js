import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

export default function Account() {
  return (
    <View style={styles.account}>

      <TouchableOpacity onPress={() => Linking.openURL('URL_HERE')}>
        <Text style={styles.createAccountText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    marginLeft: 200,
    marginRight: 10,
    marginBottom: 300,
    marginTop: 40,
  },
  newUserText: {
    color: 'rgba(42, 45, 52, 0.50)',
    fontFamily: 'Familjen Grotesk',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 'normal',
  },

  createAccountText: {
    color: '#4A4238',
    fontFamily: 'Familjen Grotesk',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 'normal',
  },
});