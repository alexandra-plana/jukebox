import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Button,
} from 'react-native';

// IMPORTS
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import Slider from '@react-native-community/slider';
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
  const [playback, setPlayback] = React.useState(0);
  let uri;

  // //TOGGLE PLAY

  const startPlay = () => {
    {
      console.log('uri=', uri);
    }
    SpotifyApi.play({
      uris: [String(uri)],
    }).then(
      function () {
        setIsPlaying(true);
        console.log('Playback started');
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
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
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log('Something went wrong!', err);
      }
    );
  };



  return (
    modalInfo && (
      <View style={styles.centeredView}>
        {/* {console.log(modalInfo)} */}
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
                  setModalVisible(!modalVisible);
                  stopPlay();
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
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 40,
    paddingBottom: 80,
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
    marginBottom: 20,
    textAlign: 'center',
  },
  infoText: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  downArrow: {
    margin: 50,
  },
});

export default SongModal;
