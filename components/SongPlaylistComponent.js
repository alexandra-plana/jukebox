import { StyleSheet, Text, View, Image,Pressable } from 'react-native';
import React from 'react';

const SongPlaylistComponent = ({item}) => {
  // console.log(.item.name);
  return (
    <View  style={styles.container}>
      <View style={styles.titleImage}>
        <Image
          source={{
            uri: item.album.images[0].url,
            height: 60,
            width: 60,
          }}
        ></Image>
        <View numberOfLines={1} style={styles.textContainer}>
            <Text style={styles.titleText}>{item.name}</Text>
          <Text>{item.artists[0].name}</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={()=>{console.log(item.name)}}>

        <Text>x</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SongPlaylistComponent;

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 10,
    borderRadius: 5,
    marginVertical: 3,
    flexDirection: 'row',
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
  }
});
