import { Text, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { useSliderContext } from '../../context/sliderContext';
import { styles } from './sliderStyles';

const SliderInstrument = () => {
  const sliderContext = useSliderContext();

  return (
    <View style={styles.container}>
      <Text>instrument</Text>

      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        value={0.5}
        onValueChange={(value) =>
          (sliderContext.Instrument = parseFloat(value.toFixed(1)))
        }
      />
    </View>
  );
};

export default SliderInstrument;
