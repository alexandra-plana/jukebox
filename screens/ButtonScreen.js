import React from 'react';
import { Button, Text, View, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//COMPONENTS
import ButtonContainer from '../components/ButtonContainer';

export default function ButtonScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text>add up to 5</Text>
        <>
          <ButtonContainer />
          <Pressable onPress={() => navigation.navigate('SliderScreen')}>
            <AntDesign name="arrowright" size={24} color="black" />
          </Pressable>
        </>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    paddingVertical: 30,

    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
