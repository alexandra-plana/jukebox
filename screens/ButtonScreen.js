import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//COMPONENTS
import ButtonContainer from '../components/ButtonContainer';

export default function ButtonScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontWeight: '600', fontSize: 30 }}>Genres</Text>
        <Text>add up to 5</Text>
      </View>

      <ButtonContainer />

      <View style={styles.navigation}>
        {/* <Pressable onPress={()=>{setAddButtons(true)}}>
        <AntDesign name="pluscircle" size={50} color='rgb(255, 149, 0)' />
        </Pressable>  */}
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 50,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // justifyContent:'space-between',
    paddingTop: 20,
    paddingBottom: 60,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    marginTop: 100,
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
