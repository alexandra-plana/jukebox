import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType, useAuthRequest } from 'expo-auth-session';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { useAuthContext } from '../context/authContext';

import { CLIENT_ID, REDIRECT_URI } from '@env';

const authData = {
  client_id: CLIENT_ID,
  redirectUri: REDIRECT_URI,
};

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function LoginScreen({ navigation }) {
  const authContext = useAuthContext();
  const [, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: authData.client_id,
      scopes: [
        'user-read-email',
        'playlist-modify-public',
        'user-read-private',
        'user-modify-playback-state',
        'user-read-playback-state',
        'streaming',
        'playlist-modify-public',
        'user-read-recently-played',
        'user-library-read',
      ],
      usePKCE: false,
      redirectUri: authData.redirectUri,
      json: true,
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      if (access_token) {
        authContext.Token = access_token;
        navigation.replace('ButtonScreen');
      }
    }
  }, [response]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>JUKE</Text>
          <Text style={styles.title}>BOX</Text>
          {/* request API login */}
          <Pressable
            onPress={() => {
              promptAsync();
            }}
          >
            <View style={styles.loginContainer}>
              <Image
                style={styles.logo}
                source={require('../assets/spotify-icon-black.png')}
              ></Image>

              <Text style={styles.loginText}>log in</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 150,
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  logo: {
    padding: 10,
    width: 60,
    height: 60,
  },
  loginContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 30,
    marginLeft: 20,
  },
});
