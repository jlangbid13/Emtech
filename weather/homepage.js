import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Register({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.register}>WeatherEats</Text>
        <View style={styles.inputContainer}>

        </View>
        

  
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E3F0F6',
      alignItems: 'center',
  
    },
});