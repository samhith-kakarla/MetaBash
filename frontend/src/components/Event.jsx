import React from 'react'; 
import twitch from '../twitch.png'; 

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: 15, 
      textAlign: 'left', 
      backgroundColor: '#6078ea',
    },
    media: {
        height: 192,
        width: 144, 
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 16,
      color: '#e8e6e6',
      fontWeight: 'bold',
    },
    pos: {
      marginBottom: 12,
      fontWeight: 'bold',
      fontSize: 14,
    },
    button: {
        marginTop: 10, 
        color: '#6078ea', 
        backgroundColor: '#dbdef5',
        '&:hover': {
            backgroundColor: '#dbdef5',
        },
    }, 
    p: {
        color: 'white',
    }
  });

export const Event = ({ event, selectEvent }) => {
    const classes = useStyles(); 

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div style={{ verticalAlign: 'middle' }}>
                            <img src={twitch} style={{ width: 100, height: 100 }}/>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {event.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {event.game}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.p}>
                        <br />
                            {event.info}
                        </Typography>
                        <Button 
                            size="large" 
                            className={classes.button} 
                            color="primary"
                            onClick={selectEvent}
                        >
                            SELECT
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}