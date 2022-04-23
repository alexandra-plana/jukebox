import React from "react";

const PlaylistContext=React.createContext({Playlist:[]});
export const PlaylistProvider =({children}) =>{
    const [Playlist, setPlaylist] = React.useState([]);
    return (
        <PlaylistContext.Provider value={{}}>
            {children}
        </PlaylistContext.Provider>
    )
    
}
export const usePlaylistContext = () => React.useContext(PlaylistContext);

