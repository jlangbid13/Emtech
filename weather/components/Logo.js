/*import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function Logo({navigation}) {
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

  
        
      </View>
    );
  }

const styles = StyleSheet.create({

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