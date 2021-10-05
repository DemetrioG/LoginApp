import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './src/Login'
import SignIn from './src/SignIn'
import Home from './src/Home'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
