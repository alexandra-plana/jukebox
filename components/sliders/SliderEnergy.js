import { Text, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { useSliderContext } from '../../context/sliderContext';
import { styles } from './sliderStyles';

const SliderEnergy = () => {
  const sliderContext = useSliderContext();

  return (
    <View style={styles.container}>
      <Text>energy</Text>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#ff9500"
        maximumTrackTintColor="#000000"
        value={0.5}
        onValueChange={(value) =>
          (sliderContext.Energy = parseFloat(value.toFixed(1)))
        }
      />
    </View>
  );
};

export default SliderEnergy;
