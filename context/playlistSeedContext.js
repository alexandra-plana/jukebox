import React from "react";


const PlayListSeedContext=React.createContext({Playlist:[]});
export const PlayListSeedProvider =({children}) =>{
    const [Playlist, setPlayList] = React.useState([]);
    return (
         <PlayListSeedContext.Provider value={[]}>
            {children}
        </PlayListSeedContext.Provider>
    )
    
}
export const usePlayListSeedContext = () => React.useContext (PlayListSeedContext);