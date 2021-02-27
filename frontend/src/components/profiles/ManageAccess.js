import React from 'react';
import { Box } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function ManageAccess(props) {
    return (
        <Box className="cardContent">
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Role: {props.role}</p>
            <Delete />
        </Box>
    );
}

export default ManageAccess;
