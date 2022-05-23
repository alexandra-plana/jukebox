import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Easing } from 'react-native';

//ICONS
import { AntDesign } from '@expo/vector-icons';

const DoneScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Done</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('LoginScreen')}
        style={styles.rotate}
      >
        <Text>
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
