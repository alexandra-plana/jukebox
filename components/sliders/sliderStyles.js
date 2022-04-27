import { StyleSheet } from 'react-native';
import React from 'react';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop:30,
    borderRadius:20,
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  slider:{
    width:250,
  }
});
