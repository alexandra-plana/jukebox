// IMPORTS
import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

//COMPONENTS
import PlaySlider from './PlaySlider';

//CONTEXT
import { useAuthContext } from '../context/authContext';
import AutoText from './AutoText';

//API
const SpotifyWebApi = require('spotify-web-api-node');
const SpotifyApi = new SpotifyWebApi();

const SongModal = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;
  const modalInfo = props.modalInfo;
  const [isPlaying, setIsPlaying] = React.useState(false);

  // API
  const authContext = useAuthContext();
  SpotifyApi.setAccessToken(authContext.Token);

  let uri;

  //TOGGLE PLAY-STOP

  const startPlay = () => {
    SpotifyApi.play({
      uris: [String(uri)],
    }).then(
      function () {
        setIsPlaying(true);
        console.log('Playback started');
      },
      function (err) {
        console.log('Something went wrong!', err);
      }
    );
  };

  const stopPlay = () => {
    setIsPlaying(false);
    SpotifyApi.pause().then(
      function () {
        setIsPlaying(false);
        console.log('Playback stopped');
      },
      function (err) {
        console.log('Something went wrong!', err);
      }
    );
  };

  return (
    modalInfo && (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.songInfo}>
                <Image
                  source={{
                    uri: modalInfo.album.images[0].url,
                    height: 250,
                    width: 250,
                  }}
                />
                <View style={styles.infoText}>
                  <AutoText>
                    <Text
                      numberOfLines={1}
                      style={{ fontWeight: '600', fontSize: 24 }}
                    >
                      {modalInfo.name}
                    </Text>
                  </AutoText>
                  <Text style={{ fontSize: 18 }}>
                    {modalInfo.artists[0].name}
                  </Text>
                </View>
              </View>

              {/* SLIDER */}
              <PlaySlider
                duration={modalInfo.duration_ms}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
              {/* PLAY - STOP BUTTON BUTTON */}
              {!isPlaying ? (
                <Pressable
                  style={styles.buttonPlayPause}
                  onPress={() => {
                    uri = modalInfo.uri;
                    startPlay();
                  }}
                >
                  <AntDesign name="caretright" size={35} color="black" />
                </Pressable>
              ) : (
                <Pressable
                  style={styles.buttonPlayPause}
                  onPress={() => {
                    stopPlay();
                  }}
                >
                  <Ionicons name="pause" size={33} color="black" />
                </Pressable>
              )}

              {/* HIDE BUTTON */}
              <Pressable
                onPress={() => {
                  stopPlay();
                  setModalVisible(!modalVisible);
                }}
              >
                <EvilIcons
                  name="chevron-down"
                  size={70}
                  style={styles.downArrow}
                />
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  buttonPlayPause: {},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // backgroundColor:'rgba(142, 142, 147,0.3)'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 40,
    paddingHorizontal: 20,
    width: 300,
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  songInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  infoText: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  downArrow: {
    marginVertical: 10,
    color: '#aeaeb2',
  },
});

export default SongModal;
