/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useRef } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef()
    const contextValue = {

        audioRef
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;
