import React from 'react'; 
import { Link } from 'react-router-dom'; 

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from '../mblogo.png';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'inline-block', 
        width: 150, 
        height: 45,
        margin: 20,
        marginTop: -10,
        paddingTop: 10,
    }, 
    h1: {
        fontSize: 70, 
        color: 'white',
        marginBottom: 30,
    }, 
    h3: {
        fontSize: 20, 
        marginBottom: 75, 
        color: '#e8e6e6',
    }
}));

export const Home = () => {
    const classes = useStyles(); 

    return (
        <div style={{ backgroundColor: "#6078ea", height: "100vh" }}>
            <img src={logo} style={{ height: 250, width: 250, marginTop: 45, marginBottom: -40 }} />
            <h1 className={classes.h1}>METABASH</h1>
            <h3 className={classes.h3}>A modern viewing experience for a modern sport.</h3>
            <div style={{ textAlign: 'center' }}>
                <Button 
                    size="large" 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    component={Link}
                    to="/join"
                >
                    JOIN BASH
                </Button>
                <Button 
                    size="large" 
                    variant="contained" 
                    color="secondary" 
                    className={classes.button}
                    component={Link}
                    to="/create"
                >
                    CREATE BASH
                </Button>
            </div>
        </div>
    )
}
