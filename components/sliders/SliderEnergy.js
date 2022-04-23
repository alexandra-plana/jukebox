import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import { useSliderContext } from '../../context/sliderContext';

const SliderEnergy = () => {
 
  const sliderContext=useSliderContext();

  return (
    <View style={styles.container}>
      <Text>energy</Text>


      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        value={.5}
        onValueChange={value=>sliderContext.Energy=parseFloat(value.toFixed(1))}
      />
    </View>
  )
}

export default SliderEnergy

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15,
    }
})