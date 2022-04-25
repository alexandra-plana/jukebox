import {
  StyleSheet,
  View,
  Text,
  Pressable,

} from 'react-native';
import React from 'react';
import { useAuthContext } from '../context/authContext';

import Slider from '@react-native-community/slider';


//API 
const SpotifyWebApi = require('spotify-web-api-node');
const SpotifyApi = new SpotifyWebApi();



//HELPER FUNCS

const minutesAndSeconds = (position) => [ // position is given in ms 
Math.floor(position/(1000*60))%60 + ":" + Math.floor(position/1000)%60
];

const PlaySlider = ({duration,isPlaying, setIsPlaying}) => {
  //API;
  const authContext = useAuthContext();
  SpotifyApi.setAccessToken(authContext.Token);
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const [timerStarted,setTimerStarted] = React.useState(false);
  
  React.useEffect(()=>{
    
  }
  ,[])

  // REQUEST POSITION CHANGE

  const seekRequest = (positionMs) => {
    // Seek To Position In Currently Playing Track
    console.log('positionMs in seek',positionMs)
    SpotifyApi.seek(positionMs).then(
      function () {
        console.log('Seek to ' + positionMs);
        console.log('mins and sec',minutesAndSeconds(positionMs))
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log('Something went wrong!', err);
      }
    );
  };

//  SET INTERVAL FOR CURRENT POSITION

isPlaying && !timerStarted && setInterval(()=>{
  isPlaying && !timerStarted && setCurrentPosition(Math.floor(currentPosition)+1000);
  isPlaying && !timerStarted && console.log('current position in setInterval: ',currentPosition);
  setTimerStarted(true)
  },1000)



  return (
    <View>
      

      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#FF5733"
        maximumTrackTintColor="#000000"
        value={currentPosition} //?
        onSlidingComplete={(value) => {
          seekRequest(Math.floor(value));
          setCurrentPosition(Math.floor(value))
          
          console.log('value:',Math.floor(value))
        }}
      />
    </View>
  );
};

export default PlaySlider;

const styles = StyleSheet.create({});
