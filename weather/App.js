import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from './etona';
import Logins from './etonatlga';


const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions = {{ headerShown: false }}>
        <Stack.Screen name="Logins" component={Logins} />
        <Stack.Screen name="Register" component={Register} />


      </Stack.Navigator>
    </NavigationContainer>


  );
}

