import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ButtonComponent = ({ genre, selected }) => {
  return (
    <>
      <View style={styles.button}>
        {selected && <View style={styles.overlay} />}
        <Text>{genre}</Text>
      </View>
    </>
  );
};

export default ButtonComponent;
//!TODO reduce padding btw pic and name
//TODOapp padding btw somg title

const styles = StyleSheet.create({

  button:{
    backgroundColor: 'white',
    marginTop:30,
    borderRadius:20,
    height: 45,
    width: 95,
    padding: 6,
    marginHorizontal: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  
  overlay: {
    backgroundColor: 'rgba(255, 149, 0,0.9)',
    position: 'absolute',
    height: 45,
    width: 95,
    borderRadius: 20,
    marginHorizontal: 5,

 
  },
});
