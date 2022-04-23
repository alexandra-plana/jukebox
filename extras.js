//HOW TO FETCH SEED BY GENRE

/*
if (authContext.Token) {
SpotifyApi.setAccessToken(authContext.Token);
        // SpotifyApi.getMyTopArtists().then((data)=>{console.log(data.body)})
        // SpotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
        //   function(data) {
        //     console.log('Artist albums', data.body);
        //   },
        //   function(err) {
        //     console.error(err);
        //   }
        // );
        SpotifyApi.getRecommendations({
          min_energy: 0.4,
          // seed_artists: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'],
          seed_genres:'classical,country',
          min_popularity: 50
        })
      .then(function(data) {
        let recommendations = data.body;
        console.log(recommendations.tracks.map((el)=>el.name));
        
    
      }, function(err) {
        console.log("Something went wrong!", err);
      });
    
        
      }
     
      HOW TO GET CATEGORY SEEDS
      SpotifyApi.getAvailableGenreSeeds().then(
      function (data) {
        let genreSeeds = data.body;
        console.log(genreSeeds);
      },
      function (err) {
        console.log('Something went wrong!', err);
      }
    );

CREATE PLAYLIST
// Create a private playlist
spotifyApi.createPlaylist('My playlist', { 'description': 'My description', 'public': true })
  .then(function(data) {
    console.log('Created playlist!'); 
    GET RESPONSE URI -> .uri
     //!NEED ID
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Add tracks to a playlist
spotifyApi.addTracksToPlaylist('5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
  .then(function(data) {
    console.log('Added tracks to playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
*/ 