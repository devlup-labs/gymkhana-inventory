import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import camera from './../../camera.jpg';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(5),
        marginTop: theme.spacing(10)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.primary
    },
    paper1: {
        justifyContent: 'center',
        textAlign: 'center',
        color: theme.palette.text.primary,
        objectFit: 'cover'
    },
    button: {
        '& > *': {
            marginTop: theme.spacing(5),
            display: 'flex'
        }
    }
}));

function ItemsPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <img src={camera} width="100%" />
                </Grid>

                <Divider orientation="vertical" flexItem />

                <Grid item xs={6}>
                    <h1>NAME OF EQUIPMENT</h1>
                    <h4>Equipment ID: d4n5c6</h4>
                    <h4>Belongs to : Frame-X</h4>
                    <h4>Total Quantity : 5</h4>
                    <h3>AVAILABLE : YES</h3>
                    <h4>
                        DESCRIPTION :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </h4>
                    <Grid container spacing={3}>
                        <Grid item xs={4} className={classes.button}>
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                MAKE REQUEST
                            </Button>
                        </Grid>
                        <Grid item xs={4} className={classes.button}>
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                NOTIFY WHEN AVAILABLE
                            </Button>
                        </Grid>
                        <Grid item xs={4} className={classes.button}>
                            <Button variant="contained" color="primary" href="#contained-buttons">
                                EDIT EQUIPMENT DETAILS
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ItemsPage;
