import React, { useState, useContext } from 'react';  
import { Link } from 'react-router-dom'; 

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// COMPONENTS
import { Navbar } from '../components/Navbar'; 

// CONTEXT
import { BashContext } from '../context/BashContext'; 

const useStyles = makeStyles((theme) => ({
    input: {
        textAlign: 'center', 
        width: 300, 
        backgroundColor: '#91a1ee',
    }, 
    button: {
        display: 'block', 
        margin: 'auto', 
        marginTop: 30,
        width: 200
    }, 
    h1: {
        fontSize: 20, 
        marginTop: 130, 
        color: 'white',
    },
    h12: {
        marginTop: 20, 
        fontSize: 20, 
        color: 'white',
    }
}));

export const JoinRoom = () => {
    const classes = useStyles(); 
    const [code, setCode] = useState(""); 

    const { room, joinRoom, setUser } = useContext(BashContext); 

    return (
        <div style={{ backgroundColor: "#242323", height: "100vh" }}>
            <Navbar />
            <h1 className={classes.h1}>ENTER YOUR NAME:</h1>
            <TextField 
                id="filled-basic" 
                label="Name" 
                variant="filled" 
                className={classes.input} 
                onChange={(e) => setUser(e.target.value)}
            />
            <h1 className={classes.h12}>ENTER BASH CODE:</h1>
            <TextField 
                id="filled-basic" 
                label="Bash Code" 
                variant="filled" 
                className={classes.input} 
                onChange={(e) => setCode(e.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                onClick={() => {
                    joinRoom(code);
                }}
                component={Link}
                to="/bash"
            >
                JOIN!
            </Button>   
        </div>
    )
}

