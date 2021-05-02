import React, { useEffect, useRef, useContext, useState } from 'react'; 

// UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

// CONTEXT
import { BashContext } from '../context/BashContext'; 

// FIREBASE
import firebase from '../config/firebaseConfig'; 
import 'firebase/firestore'; 
import { useCollectionData } from 'react-firebase-hooks/firestore'; 

// STYLES
const useStyles = makeStyles((theme) => ({
    paper1: {
        height: 235, 
        marginTop: 10, 
        width: 490,
        marginLeft: -60,
    }, 
    chatInput: {
        height: 20, 
        width: 250, 
    }, 
    sendButton: {
        height: 45, 
    }, 
    messageContainerStyle1: {
        width: 300, 
        height: 40, 
        maxHeight: 100, 
        backgroundColor: 'blue',
        color: 'white', 
    }, 
    messageContainerStyle2: {
        backgroundColor: 'white', 
        width: 300, 
        height: 40, 
        maxHeight: 100, 
        color: 'black', 
    },
}));

const firestore = firebase.firestore(); 

export const TextChat = () => {
    const classes = useStyles(); 
    const messagesRef = firestore.collection('messages'); 
    const query = messagesRef.orderBy('createdAt').limitToLast(25); 

    const [messages] = useCollectionData(query, { idField: 'id' }); 
    const [newMessage, setNewMessage] = useState(""); 
    const dummy = useRef(); 

    const { room, user } = useContext(BashContext); 

    const sendMessage = async (e) => {
        await messagesRef.add({
            text: newMessage, 
            createdAt: firebase.firestore.FieldValue.serverTimestamp(), 
            uid: room.code, 
            user: user, 
        }); 

        setNewMessage(""); 
        console.log("New Message Sent!"); 
    }

    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Paper elevation={3} className={classes.paper1}>
            <div style={{ 
                backgroundColor: 'lightgrey', 
                width: 470, 
                margin: 'auto', 
                height: 150, 
                marginBottom: 10,  
                overflow: 'auto', 
                padding: 10, 
            }}>
                {messages ? messages.map((message) => {
                    if (message.user === user) {
                        return (
                            <div>
                                <div style={{ textAlign: 'right', marginTop: 5, marginBottom: 5 }}>
                                    <Typography component="h6">ME</Typography>
                                </div>
                                <div style={{
                                    width: 200, 
                                    height: 20, 
                                    maxHeight: 100, 
                                    backgroundColor: '#ff7326',
                                    color: 'white', 
                                    textAlign: 'right', 
                                    paddingRight: 10, 
                                    paddingTop: 10, 
                                    borderRadius: 15,  
                                    marginTop: 10, 
                                    marginLeft: 'auto', 
                                    marginRight: 0, 
                                }}>
                                    <Typography component="subtitle1">{message.text}</Typography>
                                </div>
                                {/* <Container className={classes.messageContainerStyle1}>
                                    <Typography component="subtitle1">{message.message}</Typography>
                                </Container> */}
                            </div>
                        )
                    } else {
                        <div>
                            <div style={{ textAlign: 'left', marginTop: 5, marginBottom: 5 }}>
                                <Typography component="h6">{message.user}</Typography>
                            </div>
                            <div style={{
                                backgroundColor: '#4ce649', 
                                width: 200, 
                                height: 20, 
                                maxHeight: 100, 
                                color: 'black',
                                textAlign: 'left', 
                                paddingLeft: 10, 
                                paddingTop: 10, 
                                borderRadius: 15, 
                            }}>
                                <Typography component="subtitle1">{message.text}</Typography>
                            </div>
                            {/* <Container className={classes.messageContainerStyle2}>
                                <Typography component="subtitle1">{message.message}</Typography>
                            </Container> */}
                        </div>
                    }
                }) : ""}
                <span ref={dummy}></span>
            </div>
            <div>
                <TextField 
                    id="filled-basic"  
                    variant="filled" 
                    size="small"
                    className={classes.chatInput}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button 
                    variant="contained" 
                    size="small" 
                    color="secondary"
                    className={classes.sendButton}
                    onClick={(e) => sendMessage(e)}
                >
                    SEND
                </Button>
            </div>
        </Paper> 
    )
}