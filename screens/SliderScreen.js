import { StyleSheet, Text, View ,Button, Pressable} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

//SLIDER COMPONENTS
import SliderPopular from '../components/sliders/SliderPopular';
import SliderEnergy from '../components/sliders/SliderEnergy';
import SliderDance from '../components/sliders/SliderDance';
import SliderInstrument from '../components/sliders/SliderInstrument';
import { SliderProvider } from '../context/sliderContext';

const SliderScreen = ({ navigation }) => {
  const playListReady = () => {
    navigation.navigate('PlaylistScreen');
  };

  return (
    <View style={styles.container}>
    <View style={styles.sliders}>
      <SliderProvider>
        <SliderPopular />
        <SliderEnergy />
        <SliderDance />
        <SliderInstrument />
      </SliderProvider>
    </View>
    
    {/* NAVIGATION */}
    <View style={styles.navigation}>

    <Pressable onPress={()=>{navigation.navigate('ButtonScreen')}} style={styles.arrow}>
    <AntDesign name="arrowleft" size={24} color="black" />
    </Pressable>

    <Pressable onPress={()=>playListReady()} style={styles.arrow}>
    <AntDesign name="arrowright" size={24} color="black" />
    </Pressable>

    </View>



    </View>
  );
};

export default SliderScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:60,
  },
  sliders:{
  },
  navigation:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between'
  }
});
