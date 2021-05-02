import React, { useEffect, useState } from 'react'; 

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export const Reaction = ({ reaction }) => {
    const classes = useStyles();

    const [count, setCount] = useState(0); 
    const [selectedReaction, setSelectedReaction] = useState(""); 

    // useEffect(() => { 
    //   setInterval(() => {
    //     count > 0 && setTimeout(() => setCount(count - 1), 1000); 
    //   }); 
    // }, []); 

    const regularStyle = {
      visibility: "visible",
      opacity: 1,
      transition: "opacity 0.2s linear",
    }

    const fadedStyle = {
      visibility: "hidden",
      opacity: 0,
      transition: "visibility 0s 0.2s, opacity 0.2s linear"
    }

    // style={count == 0 ? fadedStyle : regularStyle}

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button 
                    className={classes.button}
                    onClick={() => {
                        setSelectedReaction("😃")
                    }}
                >
                    😃
                </Button>
                <Button 
                    className={classes.button}
                    onClick={() => {
                        setSelectedReaction("🤬")
                    }}
                >
                    🤬
                </Button>
                <Button 
                    className={classes.button}
                    onClick={() => {
                        setSelectedReaction("😲")
                    }}
                >
                    😲
                </Button>
                <Button 
                    className={classes.button}
                    onClick={() => {
                        setSelectedReaction("😰")
                    }}
                >
                    😰
                </Button>
                <Button 
                    className={classes.button}
                    onClick={() => {
                        setSelectedReaction("🎮")
                    }}
                >
                    🎮
                </Button>
                <Button 
                    className={classes.button}
                    onClick={() => {
                        setSelectedReaction("💯")
                    }}
                >
                    💯
                </Button>
                <Button 
                    className={classes.button}
                    onClick={() => {
                        setSelectedReaction("🎯")
                    }}
                >
                    🎯
                </Button>
                <Button 
                    className={classes.button}
                    onClick={() => {
                        setSelectedReaction("🏆")
                    }}
                >
                    🏆
                </Button>
            </ButtonGroup>
        </div>
    )
}