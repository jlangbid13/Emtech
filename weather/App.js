import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import frontpg from './components/frontpg';
const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions = {{ headerShown: false }}>
        <Stack.Screen name="Login" component={frontpg} />

      </Stack.Navigator>
    </NavigationContainer>


  );
}

