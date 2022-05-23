import { StyleSheet, Text, View } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import React from 'react';

const AutoText = ({ children }) => {
  return (
    <View style={{ paddingBottom: 5 }}>
      <TextTicker duration={7500} loop repeatSpacer={150} marqueeDelay={1500}>
        {children}
      </TextTicker>
    </View>
  );
};

export default AutoText;
