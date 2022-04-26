// eslint-disable-next-line
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useAuthContext } from '../context/authContext';
import { usePlayListUriContext } from '../context/playlistUriContext';

const SpotifyWebApi = require('spotify-web-api-node');
const SpotifyApi = new SpotifyWebApi();

export default function DoneScreen() {
  const authContext = useAuthContext();
  const playListUriContext = usePlayListUriContext();
  SpotifyApi.setAccessToken(authContext.Token);
  const [input, setInput] = React.useState(null);

  const sendPlaylist = () => {
    console.log('sending playlist');

    SpotifyApi.createPlaylist(input, {
      description: 'created with jukebox',
      public: true,
    })
      .then(
        function (data) {
          let playlistId = data.body.id;
          console.log('Created playlist!', playlistId);
          return data.body.id;
        },
        function (err) {
          console.log('Something went wrong! Done Screen', err);
          throw new Error(err.message);
        }
      )
      .then(function (id) {
        setInput(''); //!TODO: clean up 
        return SpotifyApi.addTracksToPlaylist(id, playListUriContext.Uris);

      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.center}>
          <View styles={styles.titleContainer}>
            <Text style={styles.titleText}>Done</Text>
            <TextInput
              style={styles.input}
              onChangeText={setInput}
              value={input}
              placeholder="playlist name"
            />
          </View>

          <View>
            <TouchableOpacity onPress={() => sendPlaylist()}>
              <Image
                style={styles.logo}
                source={require('../assets/spotify-icon-black.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 100,
    paddingTop: 100,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,

    marginVertical: 70,
  },
  input: {
    fontSize: 50,
    color: 'rgb(174,174,178)',
  },
});
