import React, { useState, useEffect, useContext } from 'react'; 

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// COMPONENTS
import { Navbar } from '../components/Navbar'; 
import { Stream } from '../components/Stream'; 
import { Reactions } from '../components/Reactions'; 
import { VideoChat } from '../components/VideoChat'; 
import { TextChat } from '../components/TextChat'; 

// CONTEXT
import { BashContext } from '../context/BashContext'; 

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
        marginTop: 20, 
    },
    button: {
          height: 70, 
          width: 75, 
          fontSize: 40,
    }, 
    paper1: {
        height: 60, 
        textAlign: 'left', 
        paddingLeft: 40, 
        paddingTop: -15, 
        marginLeft: -60, 
        width: 450, 
    }, 
    h1: {
        fontSize: 25, 
    }
}));

export const BashRoom = () => {
    const classes = useStyles(); 
    const { room } = useContext(BashContext); 

    return (
        <div style={{ backgroundColor: '#f09067', height: '100vh' }}>
            <Navbar />
            <div style={{ height: 500, width: 1100, margin: 'auto', marginTop: 20 }}>
                <Grid container spacing={1}>
                    <Grid item xs={5}>
                        <VideoChat />
                        <TextChat />
                    </Grid>
                    <Grid item xs={7}>
                        <Stream />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}


