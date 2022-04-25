import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { useAuthContext } from '../context/authContext';

import Slider from '@react-native-community/slider';

//API
const SpotifyWebApi = require('spotify-web-api-node');
const SpotifyApi = new SpotifyWebApi();

//HELPER FUNCS

const minutesAndSeconds = (position) => [
  // position is given in ms
  (Math.floor(position / (1000 * 60)) % 60) +
    ':' +
    (Math.floor(position / 1000) % 60).toString().padStart(2,'0'),
];

const PlaySlider = ({ duration, isPlaying, setIsPlaying }) => {
  //API;
  const authContext = useAuthContext();
  SpotifyApi.setAccessToken(authContext.Token);
  const [currentPosition, setCurrentPosition] = React.useState(0);

  React.useEffect(() => {}, []);

  // REQUEST POSITION CHANGE

  const seekRequest = (positionMs) => {
    // Seek To Position In Currently Playing Track
    console.log('positionMs in seek', positionMs);
    SpotifyApi.seek(positionMs).then(
      function () {
        console.log('Seek to ' + positionMs);
        console.log('mins and sec', minutesAndSeconds(positionMs));
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log('Something went wrong!', err);
      }
    );
  };

  //TIMER
  // const Timer = ({ duration }) => {
    // initialize timeLeft with the seconds prop


    const [timeLeft, setTimeLeft] = React.useState(duration);

    React.useEffect(() => {
      // exit early when we reach 0
      if (!timeLeft) return;

      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1000);
      }, 1000);

      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }, [timeLeft]);


  return (
    <View>
      {/* <Timer duration={duration} /> */}
      <Text>{minutesAndSeconds(timeLeft)}</Text>


      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#FF5733"
        maximumTrackTintColor="#000000"
        value={currentPosition} //?
        onSlidingComplete={(value) => {
          seekRequest(Math.floor(value));
          setCurrentPosition(Math.floor(value));

          console.log('value:', Math.floor(value));
        }}
      />
    </View>
  );
};

export default PlaySlider;

const styles = StyleSheet.create({});
