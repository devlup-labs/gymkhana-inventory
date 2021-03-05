/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Grid, Divider } from '@material-ui/core';
import camera from './../../../camera.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    design: {
        margin: '4px',
        padding: '5px'
    },
    color1: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    itemStyle: {
        fontWeight: 700,
        fontSize: 20
    }
}));

function Item(props) {
    const isClicked = true;
    const classes = useStyles();
    return (
        <Grid className="cards">
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={2} lg={4} xl={6}>
                    <img src={camera} width="100%" />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={10} lg={4} spacing={10}>
                    <Grid item className={`${classes.design} ${classes.itemStyle}`}>
                        {props.itemName}
                    </Grid>
                    <Grid item className={classes.design}>
                        Equipment ID: {props.itemId}
                    </Grid>
                    <Grid item className={`${classes.design} ${classes.color1}`}>
                        {props.requestaName}
                    </Grid>
                    <Grid item className={classes.design}>
                        {props.emailID}
                    </Grid>
                    <Grid item className={classes.design}>
                        Issues on: {props.requestingDate}
                    </Grid>
                    <Grid item className={`${classes.design} ${classes.color1}`}>
                        Return Date: {props.dueDate}
                    </Grid>
                    <Grid item className={`buttonAdmin ${classes.design}`}>
                        {isClicked === true ? (
                            <Button variant="contained" color="primary">
                                View Request
                            </Button>
                        ) : null}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Item;
