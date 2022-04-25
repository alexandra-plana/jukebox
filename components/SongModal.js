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

//COMPONENTS
import PlaySlider from './PlaySlider';

//CONTEXT
import { useAuthContext } from '../context/authContext';

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
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.songInfo}>
                <Image
                  source={{
                    uri: modalInfo.album.images[0].url,
                    height: 200,
                    width: 200,
                  }}
                />
                <View style={styles.infoText}>
                  <Text style={{ fontWeight: '600' }}>{modalInfo.name}</Text>
                  <Text>{modalInfo.artists[0].name}</Text>
                </View>
              </View>

              {/* PLAY - STOP BUTTON BUTTON */}
              {!isPlaying ? (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    uri = modalInfo.uri;
                    startPlay();
                  }}
                >
                  <AntDesign name="caretright" size={24} color="black" />
                </Pressable>
              ) : (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    stopPlay();
                  }}
                >
                  <Ionicons name="pause" size={23} color="black" />
                </Pressable>
              )}

              {/* SLIDER */}
              
              <PlaySlider duration={modalInfo.duration_ms} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>

              {/* HIDE BUTTON */}
              <Pressable
                onPress={() => {
                  stopPlay();
                  setModalVisible(!modalVisible);
                }}
              >
                <AntDesign
                  name="downcircleo"
                  size={30}
                  color="grey"
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 40,
    // paddingBottom: 60,
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
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
  songInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  infoText: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  downArrow: {
    marginVertical: 30,
  },
});

export default SongModal;
