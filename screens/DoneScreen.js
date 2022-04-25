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
  const playListUriContext=usePlayListUriContext();
  SpotifyApi.setAccessToken(authContext.Token);
  const [input, onChangeInput] = React.useState(null);

  const sendPlaylist = () => {
    console.log('sending playlist');

    SpotifyApi.createPlaylist(input, {  
      description: 'created with jukebox',
      public: true,
    })
      .then(
        function (data) {
          playlistId = data.body.id;
          console.log('Created playlist!', playlistId);
          return data.body.id;
        },
        function (err) {
          console.log('Something went wrong! Done Screen', err);
          throw new Error(err.message);
        }
      )
      .then(function (id) {
        return SpotifyApi.addTracksToPlaylist(id, playListUriContext.Uris);
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
              onChangeText={onChangeInput}
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
    // fontWeight:'900',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 100,
    // fontWeight:'700',
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
