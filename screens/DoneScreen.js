import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Pressable,
  TouchableOpacity,
  Text,
  Easing,
} from 'react-native';

//ICON
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const DoneScreen = ({ navigation }) => {
  // const animation = useState(new Animated.Value(0))[0];

  // animation.setValue(0);
  // const StartAnimation = () => {
  //   Animated.loop(
  //     Animated.timing(animation, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true,
  //       easing: Easing.linear,
  //     })
  //   ).start();
  // };
  // useEffect(() => {
  //   StartAnimation();
  // }, []);
  // const RotateView = animation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg'],
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Done</Text>
      {/* <Animated.View style={{ transform: [{ rotate: RotateView }] }}> */}
        <TouchableOpacity
          onPress={() => navigation.replace('LoginScreen')}
          style={styles.rotate}
        >
          <Text>
            {/* <MaterialCommunityIcons name="reload" size={80} color="#ff9500" /> */}
            {/* <FontAwesome5 name="backward" size={70} color="black" /> */}
            <AntDesign name="fastbackward" size={70} color="black" />
          </Text>
        </TouchableOpacity>
      {/* </Animated.View> */}
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
    paddingBottom: 100,
  },
  rotate: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
    width: 80,
    height: 80,
  },
});
export default DoneScreen;
