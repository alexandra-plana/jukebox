import React from 'react';
import { Button, Text, View, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//COMPONENTS
import ButtonContainer from '../components/ButtonContainer';

export default function ButtonScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 200 }}>add up to 5</Text>
      <ButtonContainer  />
      <View style={styles.navigation}>
        <Pressable onPress={() => navigation.navigate('SliderScreen')}>
          <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    marginTop:200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    paddingBottom: 60,
  },
});
