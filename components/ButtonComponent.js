import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonComponent = ({ genre, selected }) => {
  return (
    <>
      <View style={styles.button}>
        <Text>{genre}</Text>
      </View>
      {selected && <View style={styles.overlay}/>}
    </>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 95,
    padding:6,
    backgroundColor: 'rgb(209,209,214)',
    borderRadius: 5,
    marginHorizontal:5,
    marginVertical:7,
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    height: 45,
    width: 95,
    borderRadius: 5,
    marginHorizontal:5,
    marginVertical:7,
    top:0,
    left:0
  },
});
