import React, { useContext } from 'react'; 
import ReactTwitchEmbedVideo from "react-twitch-embed-video"; 

// CONTEXT
import { BashContext } from '../context/BashContext'; 

export const Stream = () => {
    const { room } = useContext(BashContext); 

    return (
        <ReactTwitchEmbedVideo 
            channel={room.channel} 
            layout="video" 
            theme="dark"
            height="525"
            width="700"
        />
    )
}