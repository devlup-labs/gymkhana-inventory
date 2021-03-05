/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    Gridcontainer: {
        margin: '5px',
        padding: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: '9px',
        justifyContent: 'space-between',
        width: 'fit-content'
    },
    GridcontainerAvtarContent: {
        display: 'flex',
        margin: '4px',
        marginLeft: '10px',
        marginRight: '10px'
    },
    GridcontainerAvtarMP: {
        margin: '4px',
        padding: '4px',
        marginRight: '30px'
    },
    GridcontainerAvtar: {
        width: '250px',
        height: '250px'
    }
}));

function ManageAccess(props) {
    const classes = useStyles();

    return (
        <Grid className={classes.Gridcontainer} item container>
            <Grid className={classes.GridcontainerAvtarContent} item>
                <Grid className="adminManage">
                    <Avatar item />
                </Grid>
                <Grid className={classes.GridcontainerAvtarMP}>
                    <Grid item>{props.name}</Grid>
                    <Grid item>{props.email}</Grid>
                </Grid>
            </Grid>
            <p className="adminTheme">{props.role}</p>
            <IconButton>
                <Delete item />
            </IconButton>
        </Grid>
    );
}

export default ManageAccess;
