import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const SongPlaylistComponent = (props) => {
  // console.log(props.item.name);
  return (
    <View  style={styles.container}>
      <View style={styles.titleImage}>
        <Image
          source={{
            uri: props.item.album.images[0].url,
            height: 60,
            width: 60,
          }}
        ></Image>
        <View numberOfLines={1} style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{props.item.name}</Text>
          </View>

          {/* Artist */}
          <Text>{props.item.artists[0].name}</Text>
        </View>
      </View>
      <View>
        <Text>x</Text>
      </View>
    </View>
  );
};

export default SongPlaylistComponent;

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 10,
    // backgroundColor: '#a273de',
    borderRadius: 5,
    marginVertical: 3,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    minWidth: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft:10
  },
  titleText: {
    fontWeight: '600',
  },
  titleImage:{
    flexDirection:'row',
    flex:2,
  },
  titleContainer: {
    // marginLeft:5
    // flex: 1,
  },
  selected: {},
});
