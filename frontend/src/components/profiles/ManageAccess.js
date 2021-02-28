import React from 'react';
import { Box } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function ManageAccess(props) {
    return (
        <Box className="cardContent">
            <p>Name: {this.props.name}</p>
            <p>Email: {this.props.email}</p>
            <p>Role: {this.props.role}</p>
            <Delete />
        </Box>
    );
}

export default ManageAccess;
