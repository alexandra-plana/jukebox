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
    (Math.floor(position / 1000) % 60).toString().padStart(2, '0'),
];

const PlaySlider = ({ duration, isPlaying, setIsPlaying }) => {
  //API;
  const authContext = useAuthContext();
  SpotifyApi.setAccessToken(authContext.Token);
  const [elapsed, setElapsed] = React.useState(0);
  const remaining = minutesAndSeconds(duration - elapsed);


  // REQUEST POSITION CHANGE

  const seekRequest = (positionMs) => {
    // Seek To Position In Currently Playing Track
    SpotifyApi.seek(positionMs).then(
      function () {
        console.log('mins and sec', minutesAndSeconds(positionMs));
      },
      function (err) {
        console.log('Something went wrong!', err);
      }
    );
  };

//SET TIMESTAMPS

  React.useEffect(() => {
    // exit early when we reach 0
    if (elapsed >= duration || !isPlaying) return;
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setElapsed(elapsed + 1000);
    }, 1000);
    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add elapsed as a dependency to re-rerun the effect
    // when we update it
  }, [elapsed, isPlaying]);

  return (
    <View>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#FF5733"
        maximumTrackTintColor="#000000"
        value={elapsed}
        onSlidingComplete={(value) => {
          setIsPlaying(true);
          seekRequest(Math.floor(value));
          setElapsed(Math.floor(value));
 
        }}
      />
      <View style={styles.textTimer}>
        <Text>{minutesAndSeconds(elapsed)}</Text>
        <Text>{remaining}</Text>
      </View>
    </View>
  );
};

export default PlaySlider;

const styles = StyleSheet.create({
  textTimer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
