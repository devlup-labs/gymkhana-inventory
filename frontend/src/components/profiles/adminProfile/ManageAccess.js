import React from 'react'
import {Box } from '@material-ui/core'
import { Delete }from '@material-ui/icons'


function ManageAccess(props) {
    return (
        <Box className="cardContent">
            <p>Name: </p>
            <p>Email: </p>
            <p>Role: </p>
            <Delete/>
        </Box>
    )
}

export default ManageAccess
