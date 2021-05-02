import React, { useEffect, useRef, useState, useContext } from 'react'; 
import Peer from "simple-peer";
import io from "socket.io-client"; 

// CONTEXT 
import { BashContext } from '../context/BashContext'; 

export const VideoChat = () => {
    const [peers, setPeers] = useState([]); 
    const socketRef = useRef(); 
    const userVideo = useRef(); 
    const peersRef = useRef([]); 
    const { room } = useContext(BashContext); 

    useEffect(() => {
        socketRef.current = io.connect("/"); 
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            userVideo.current.srcObject = stream;
            
            socketRef.current.emit("join room", room.code); 

            socketRef.current.on("all users", (users) => {
                const peers = []; 
                
                users.forEach((userID) => {
                    const peer = createPeer(userID, socketRef.current.id, stream); 
                    peersRef.current.push({ peerID: userID, peer: peer }); 
                    peers.push(peer); 
                }); 

                setPeers(peers); 
            }); 

            socketRef.current.on("user joined", (payload) => {
                const peer = addPeer(payload.signal, payload.callerID, stream); 

                peersRef.current.push({ peerID: payload.callerID, peer: peer }); 

                setPeers((users) => [...users, peer]); 
            }); 

            socketRef.current.on("receiving returned signal", (payload) => {
                const item = peersRef.current.find((peer) => peer.peerID === payload.id);
                
                item.peer.signal(payload.signal);
            });
        }); 
    }, []); 

    const createPeer = (userToSignal, callerID, stream) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream,
        });

        peer.on("signal", (signal) => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal }); 
        });

        return peer;
    }

    const addPeer = (incomingSignal, callerID, stream) => {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        });

        peer.on("signal", (signal) => {
            socketRef.current.emit("returning signal", { signal, callerID }); 
        });

        peer.signal(incomingSignal);

        return peer;
    }

    return (
        <div style={{
            backgroundColor: 'black', 
            width: 490, 
            height: 285, 
            marginLeft: -60, 
        }}>
            
        </div>
    )
}
