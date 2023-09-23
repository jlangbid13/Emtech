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
    fontSize: 20,
    marginLeft: 230,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 3,
  },

  createAccountText: {
    color: '#4A4238',
    fontFamily: 'Familjen Grotesk',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 'normal',
  },
});