import React, { useState, useEffect, useContext } from 'react'; 
import { Link } from 'react-router-dom'; 

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// COMPONENTS
import { Navbar } from '../components/Navbar'; 
import { Event } from '../components/Event'; 

// CONTEXT
import { BashContext } from '../context/BashContext'; 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper1: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: 10, 
      height: 350, 
      maxHeight: 350, 
      overflow: 'auto', 
    },
    paper2: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 10, 
        height: 420, 
        maxHeight: 420, 
        overflow: 'auto', 
    },
    button: {
        marginTop: 40, 
    }
}));

export const CreateRoom = () => {
    const classes = useStyles(); 
    const { createRoom } = useContext(BashContext); 

    const [newRoom, setNewRoom] = useState({
        host: "", 
        channel: "", 
    }); 
    const [events, setEvents] = useState([]); 
    const [selectedEvent, setSelectedEvent] = useState({}); 

    const getEvents = () => {
        fetch('http://127.0.0.1:8000/api/events/').then((response) => response.json()).then((data) => {
            setEvents(data); 
            console.log("Events recieved success"); 
        })
    }

    useEffect(() => {
        getEvents(); 
    }, []); 

    return (
        <div style={{ backgroundColor: "#242323", height: "100vh" }}>
            <Navbar />
            <div style={{ height: 500, width: 900, margin: 'auto', marginTop: 40 }}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper1} elevation={3}>
                        <h1 style={{ fontSize: 18, color: 'black' }}>ENTER NAME: </h1>
                        <TextField 
                            id="filled-basic" 
                            label="Name" 
                            variant="filled" 
                            onChange={(e) => setNewRoom({
                                ...newRoom, 
                                host: e.target.value
                            })}
                        />
                        <h1 style={{ fontSize: 18, color: 'black' }}>PICK EVENT: ➡️</h1>
                        <div style={{ 
                            backgroundColor: '#91a1ee', 
                            width: 190, 
                            height: 90, 
                            margin: 'auto', 
                            textAlign: 'left', 
                            padding: 10, 
                            color: 'black', 
                            fontWeight: 'bold',
                        }}>
                            {selectedEvent ? selectedEvent.name : ""}
                        </div>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            size="large"
                            className={classes.button}
                            onClick={() => {
                                createRoom(newRoom); 
                                console.log(newRoom); 
                            }}
                            component={Link}
                            to="/bash"
                        >
                            CREATE BASH!
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper2} elevation={3}>
                        {events ? events.map((event) => (
                            <Event event={event} selectEvent={() => { 
                                setSelectedEvent(event); 
                                setNewRoom({ ...newRoom, channel: event.channel }); 
                            }} />
                        )) : ""}
                    </Paper>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}