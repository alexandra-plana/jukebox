
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Pressable,
  Text,
  Easing,
} from 'react-native';
//ICON
import { AntDesign } from '@expo/vector-icons';

const DoneScreen = ({ navigation }) => {
  const animation = useState(new Animated.Value(0))[0];
  const CallAnimation = () => {
    animation.setValue(0);
    // Animated.loop(
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    })
    // ).start()
  };
//   useEffect(() => {
//     CallAnimation();
//   }, []);
  const RotateData = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Done</Text>
      <Animated.View style={{ transform: [{ rotate: RotateData }] }}>
        <Pressable onPress={() => navigation.replace('LoginScreen')} style={styles.rotate}>
          <Text>
            <AntDesign name="reload1" color={'#ff9500'} size={70} style={styles.spinner}/>
           
          </Text>
        </Pressable>
      </Animated.View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    titleText: {
    fontSize: 100,
    paddingBottom:100,

  },
  rotate:{
    justifyContent: 'center',
    alignItems: 'center',

  },
  spinner:{
    position:'absolute',
    bottom:60,
  }


});
export default DoneScreen;
