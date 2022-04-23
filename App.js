import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PlaylistScreen from './screens/PlaylistScreen';
import ButtonScreen from './screens/ButtonScreen';
import SliderScreen from './screens/SliderScreen';
import DoneScreen from './screens/DoneScreen';
import { AuthProvider } from './context/authContext';
import { PlaylistProvider } from './context/playlistContext';
import { PlayListUriProvider } from './context/playlistUriContext';

import { PlayListSeedProvider } from './context/playlistSeedContext';


const Stack = createStackNavigator();

export default function App() {
  
  // in AuthProvider value={{ Token, setToken }}
  return (
    <AuthProvider >
          <PlayListSeedProvider>
            <PlaylistProvider>
              <PlayListUriProvider>
                
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="PlaylistScreen"
            component={PlaylistScreen}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="ButtonScreen"
            component={ButtonScreen}
            options={{ headerShown: false }}
            />
              <Stack.Screen
            name="SliderScreen"
            component={SliderScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="DoneScreen"
            component={DoneScreen}
            options={{ headerShown: false }}
            />

        </Stack.Navigator>
      </NavigationContainer>
              </PlayListUriProvider>

            </PlaylistProvider>
            </PlayListSeedProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
