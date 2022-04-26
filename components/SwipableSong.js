import { StyleSheet, Pressable,View } from 'react-native';
import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import SongPlaylistComponent from './SongPlaylistComponent';

//ICON
import { Feather } from '@expo/vector-icons';

const SwipableSong = ({ item, deleteSong }) => {
  const renderLeftActions = () => {
    return (
      <Pressable
        style={styles.deleteBox}
        onPress={() => {
          deleteSong(item);
        }}
      > 
   

      <Feather name="x" size={30} color="white" />

      </Pressable>
    );
  };

  return (
    <Swipeable
      renderLeftActions={() => renderLeftActions()}
      leftOpenValue={-100}
    >
      <SongPlaylistComponent item={item} />
    </Swipeable>
  );
};
export default SwipableSong;

const styles = StyleSheet.create({
  deleteBox: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    width: 100,
    height: 64,
    marginTop: 4,
    marginLeft: 10,
    borderRadius: 5,
  },
});
