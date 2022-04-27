import React from "react";


const PlayListUriContext=React.createContext({Uris:[]});
export const PlayListUriProvider =({children}) =>{
    return (
         <PlayListUriContext.Provider value={[]}>
            {children}
        </PlayListUriContext.Provider>
    )
    
}
export const usePlayListUriContext = () => React.useContext (PlayListUriContext);