import React, { createContext, useState } from 'react'; 

import firebase from '../config/firebaseConfig'; 

export const BashContext = createContext(); 

export const BashContextProvider = (props) => {
    const [room, setRoom] = useState({}); 
    const [user, setUser] = useState(""); 

    const joinRoom = (code) => {
        fetch(`http://127.0.0.1:8000/api/join/${code}`).then((response) => response.json()).then(
            (data) => {
                setRoom(data); 
                console.log("Joined room successfully"); 
            }
        ); 
    }

    const createRoom = (room) => {
        try {
            fetch('http://127.0.0.1:8000/api/create/', {
                method: 'POST', 
                headers: {
                    'Content-type': 'application/json', 
                }, 
                body: JSON.stringify(room), 
            }).then((response) => response.json()).then((data) => {
                setRoom(data); 
                console.log(data); 
                console.log("Room created :)"); 
            }); 
        } catch (error) {
            console.log(error); 
            console.log("Room not created :(")
        }
    }

    return (
        <BashContext.Provider value={{ room, joinRoom, createRoom, user, setUser }}>
            { props.children }
        </BashContext.Provider>
    )
}