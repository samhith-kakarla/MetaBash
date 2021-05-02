import React from 'react'; 
import { Link } from 'react-router-dom'; 

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

import logo from '../mblogo.png'; 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      flexGrow: 1, 
    },
    toolbar: {
        minHeight: 50, 
    }, 
    menuLink: {
        marginTop: 10,
    }, 
    appbar: {
        backgroundColor: '#6078ea', 
    },
}));

export const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Grid
                        justify="space-between"
                        container 
                        spacing={24}
                    >
                        <Grid item>
                            <Button color="inherit" component={Link} to="/">
                                <img src={logo} 
                                    style={{ height: 50, width: 50 }}
                                />
                            </Button>
                        </Grid>
                        {/* <Typography variant="h6" className={classes.title}>
                            News
                        </Typography> */}
                        <Grid item>
                            <div>
                                <Button 
                                    color="inherit" 
                                    component={Link} 
                                    to="/join"
                                    className={classes.menuLink}
                                >
                                    JOIN!
                                </Button>
                                <Button 
                                    color="inherit" 
                                    component={Link} 
                                    to="/create"
                                    className={classes.menuLink}
                                >
                                    CREATE!
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}