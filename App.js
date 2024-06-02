import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './Navigator/Navigation';
import SignUpScreen from "./Components/SignUpScreen"

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Navigation"  component={Navigation} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
        </NavigationContainer>
  );
}

