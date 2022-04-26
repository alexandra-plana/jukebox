import { Text, View, StyleSheet, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import ButtonComponent from './ButtonComponent';

import { usePlayListSeedContext } from '../context/playlistSeedContext';

//API
const SpotifyWebApi = require('spotify-web-api-node');
const SpotifyApi = new SpotifyWebApi();

const ButtonContainer = () => {
  const playlistSeedContext = usePlayListSeedContext();

  const [selectedItems, setSelectedItems] = React.useState([]);
  const hardGenres = [
    'indie',
    'hip-hop',
    'rock',
    'pop',
    'mood',
    'alternative',
    'party',
    'classical',
    'techno',
    'punk',
    'reggae',
    'trance',
    'trip-hop',
    'r-n-b',
    'new-age'
  ];
  // SELECTED BUTTONS HANDLER

  const selectHandler = (item) => {
    if (selectedItems.length < 5) {
      if (selectedItems.includes(item)) {
        let newSelectedItems = selectedItems.filter((i) => i !== item);
        playlistSeedContext.Playlist = [...newSelectedItems];
        setSelectedItems(newSelectedItems);
      } else {
        let newSelectedItems = [...selectedItems, item];
        playlistSeedContext.Playlist = [...newSelectedItems];
        setSelectedItems(newSelectedItems);
      }
    } else if (selectedItems.length === 5) {
      if (selectedItems.includes(item)) {
        let newSelectedItems = selectedItems.filter((i) => i !== item);
        playlistSeedContext.Playlist = [...newSelectedItems];
        setSelectedItems(newSelectedItems);
      }
    }
  };

  const hasBeenSelected = (item) => {
    return selectedItems.includes(item);
  };

  return (
    <View style={styles.buttonContainer}>
      {hardGenres.length ? (
        // map through genres array and display them
        hardGenres.map((genre, key) => {
          return (
            <Pressable key={key} onPress={() => selectHandler(genre)}>
              <TouchableOpacity>
                <View>
                  <ButtonComponent
                    genre={genre}
                    selected={hasBeenSelected(genre)}
                  />
                </View>
              </TouchableOpacity>
            </Pressable>
          );
        })
      ) : (
        <Text>nothing yet</Text>
      )}
    </View>
  );
};

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 40,
  },
});

//* EXTRA -- GET AVAILABLE GENRE SEEDS

// import { useAuthContext } from '../context/authContext';
// const [listOfGenres, setListOfGenres] = React.useState([]);
// const authContext=useAuthContext();

// if (authContext.Token) {
//   SpotifyApi.setAccessToken(authContext.Token);

//   React.useEffect(() => {
//     SpotifyApi.getAvailableGenreSeeds().then(
//       function (data) {
//         const genreSeeds = data.body;
//         setListOfGenres(genreSeeds.genres.slice(0, 15));
//       },
//       function (err) {
//         console.log('Something went wrong!', err);
//       }
//     );
//   }, []);
// }
