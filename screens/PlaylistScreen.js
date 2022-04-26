import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Text,
} from 'react-native';
// import { Swipeable, Animated } from 'react-native-gesture-handler';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
//CONTEXT
import { usePlayListSeedContext } from '../context/playlistSeedContext';
import { useAuthContext } from '../context/authContext';
import { useSliderContext } from '../context/sliderContext';
import { usePlayListUriContext } from '../context/playlistUriContext';

//COMPONENTS
import SongModal from '../components/SongModal';
import SwipableSong from '../components/SwipableSong';
import { FlatList } from 'react-native-gesture-handler';

const SpotifyWebApi = require('spotify-web-api-node');
const SpotifyApi = new SpotifyWebApi();

const PlaylistScreen = ({ navigation }) => {
  const playListSeedContext = usePlayListSeedContext(); // all tracks with full info
  const playListUriContext = usePlayListUriContext(); // to set track uris
  const sliderContext = useSliderContext(); // to get slider seeds

  const authContext = useAuthContext();
  SpotifyApi.setAccessToken(authContext.Token);
  const [playList, setPlayList] = React.useState([]);

  let recommendations = [];
  let recommendationsUri = [];

  // GET PLAYLIST FROM API
  React.useEffect(() => {
    SpotifyApi.getRecommendations({
      target_energy: Number(sliderContext.Energy),
      target_danceability: Number(sliderContext.Dance),
      target_popularity: Number(sliderContext.Popular),
      target_instrumentalness: Number(sliderContext.Instrument),
      seed_genres: playListSeedContext.Playlist
        ? playListSeedContext.Playlist.join(',')
        : 'indie', // hardcoded alternative
      limit: 20,
    }).then(
      function (data) {
        recommendations = data.body.tracks;
        setPlayList([...recommendations]);
      },
      function (err) {
        console.log('Something went wrong!', err);
        throw new Error(err.message);
      }
    );
  }, []);

  const deleteSong = (item) => {
    setPlayList(playList.filter((i) => i.name !== item.name));
  };

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState(null);

  const renderItem = ({ item, key }) => {
    recommendationsUri.push(item.uri);

    return (
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          setModalInfo(item);
        }}
      >
        <SwipableSong item={item} deleteSong={deleteSong} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={playList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>

      <SongModal
        modalInfo={modalInfo}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />

      <View style={styles.navigation}>
        <Pressable
          onPress={() => navigation.navigate('SliderScreen')}
          style={styles.arrow}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Pressable
          onPress={() => {
            playListUriContext.Uris = [...recommendationsUri]; // set playlist uri context
            navigation.replace('SendScreen');
          }}
        >
          <AntDesign name="arrowright" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingTop:70,
    flex: 1,
    maxWidth:'100%'
  },

  navigation: {
    flexDirection: 'row',
    width: '80%',
    // paddingTop: 20,
    paddingBottom:60,
    justifyContent: 'space-between',
  },
});
