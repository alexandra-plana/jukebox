
import React from 'react';
// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PlaylistScreen from './screens/PlaylistScreen';
import ButtonScreen from './screens/ButtonScreen';
import SliderScreen from './screens/SliderScreen';
import SendScreen from './screens/SendScreen';
import DoneScreen from './screens/DoneScreen';
//CONTEXT PROVIDERS
import { AuthProvider } from './context/authContext';
import { PlaylistProvider } from './context/playlistContext';
import { PlayListUriProvider } from './context/playlistUriContext';
import { PlayListSeedProvider } from './context/playlistSeedContext';

const Stack = createStackNavigator();

export default function App() {



  return (
    <AuthProvider>
      <PlayListSeedProvider>
        <PlaylistProvider>
          <PlayListUriProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
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
                  name="PlaylistScreen"
                  component={PlaylistScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SendScreen"
                  component={SendScreen}
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


