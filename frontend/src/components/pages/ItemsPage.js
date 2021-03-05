import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import camera from './../../camera.jpg';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(10),
        marginTop: theme.spacing(20)
    },
    heading4: {
        fontWeight: 'normal',
        display: 'inline'
    },
    button: {
        '& > *': {
            marginTop: theme.spacing(5)
        }
    }
}));

function ItemsPage() {
    const classes = useStyles();
    const viewerUser = true;
    const available = true;
    const data = {
        nameOfEquipment: 'NAME OF EQUIPMENT',
        equipmentId: 'd4f8j9',
        society: 'Frame-X',
        quantity: '5',
        Description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };

    return (
        <div className={classes.root} id="item_page">
            <Grid container spacing={3} className="image">
                <Grid item xs={5} className="image">
                    <img src={camera} width="75%" />
                </Grid>

                <Divider orientation="vertical" flexItem />

                <Grid item xs={6} className="equipment">
                    <div className="heading1">
                        <h1>{data.nameOfEquipment}</h1>
                    </div>
                    <h4>
                        Equipment ID : <p className={classes.heading4}>{data.equipmentId}</p>
                    </h4>

                    <h4>
                        Belongs to : <p className={classes.heading4}>{data.society}</p>
                    </h4>
                    <h4>
                        Total Quantity : <p className={classes.heading4}>{data.quantity}</p>
                    </h4>
                    {available ? (
                        <h3 style={{ color: 'green' }}>AVAILABLE : YES</h3>
                    ) : (
                        <h3 style={{ color: 'red' }}>AVAILABLE : NO</h3>
                    )}

                    <h4>
                        DESCRIPTION : <p className={classes.heading4}>{data.Description} </p>
                    </h4>
                    {viewerUser ? (
                        available ? (
                            <div className={classes.button}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href="#contained-buttons"
                                    className="heading1">
                                    MAKE REQUEST
                                </Button>
                            </div>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                href="#contained-buttons"
                                className="heading1">
                                NOTIFY WHEN AVAILABLE
                            </Button>
                        )
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            href="#contained-buttons"
                            className="heading1">
                            EDIT EQUIPMENT DETAILS
                        </Button>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default ItemsPage;
