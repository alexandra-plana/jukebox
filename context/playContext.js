import React from "react";

const PlayContext=React.createContext({Token:''});
export const PlayProvider =({children}) =>{
    const [Token, setToken] = React.useState('');
    return (
        <PlayContext.Provider value={{}}>
            {children}
        </PlayContext.Provider>
    )
    
}
export const usePlayContext = () => React.useContext(PlayContext);
