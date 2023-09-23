import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, Linking } from 'react-native';

export default function Logins({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('./assets/WeatherEats.png')}
          style={styles.logoImage}
        />
        <View style={{ marginBottom: 20 }} />
        <Text style={styles.subtext}>
          Log In
        </Text>
      </View>
      <View style={styles.inputGroup}>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.emailInput}
          />
        </View>
        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.account}>
        <TouchableOpacity onPress={() => Linking.openURL('URL_HERE')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupGroup}>
        <View style={styles.button}>
          <Button
            title="Log in"
            onPress={() => navigation.navigate('Register')}
            color="#151A7B"
          />
        </View>
        <View style={{ marginBottom: 10 }} />
        <View style={styles.button}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Register')}
            color="#0077B6"
          />
        </View>
      </View>
      
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

    fontWeight: '400',
  },
  inputGroup: {
    paddingTop: 10,
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: 'black',
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 5,
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
  signupGroup: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 312,
    borderRadius: 10,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
    marginLeft: 230,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 3,
  },
  forgotPasswordText: {
    color: '#4A4238',
    fontSize: 10,
    fontWeight: '500',
  },
});
