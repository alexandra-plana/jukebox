import { Text, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { useSliderContext } from '../../context/sliderContext';
import { styles } from './sliderStyles';

const SliderPopular = () => {
  const sliderContext = useSliderContext();

  return (
    <View style={styles.container}>
      <Text>popular</Text>

      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        value={0.5}
        onValueChange={(value) =>
          (sliderContext.Popular = parseInt(value * 100))
        }
      />
    </View>
  );
};

export default SliderPopular;
