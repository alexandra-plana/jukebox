import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import MoodSlider from '../components/MoodSlider';

const SliderScreen = ({ navigation }) => {
  const playListReady = () => {
    navigation.navigate('PlaylistScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: '600', fontSize: 30 }}>Mood</Text>
      <View style={styles.sliders}>
        <MoodSlider mood="Popular" />
        <MoodSlider mood="Energy" />
        <MoodSlider mood="Dance" />
        <MoodSlider mood="Instrument" />
      </View>

      {/* NAVIGATION */}
      <View style={styles.navigation}>
        <Pressable
          onPress={() => {
            navigation.navigate('ButtonScreen');
          }}
          style={styles.arrow}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>

        <Pressable onPress={() => playListReady()} style={styles.arrow}>
          <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default SliderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
  },
  navigation: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
});
