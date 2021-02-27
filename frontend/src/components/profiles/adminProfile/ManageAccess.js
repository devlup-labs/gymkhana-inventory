import React from 'react'
import {Box } from '@material-ui/core'
import { Delete }from '@material-ui/icons'


function ManageAccess(props) {
    return (
        <Box className="cardContent">
            <p>Name: AB</p>
            <p>Email: ab@iitj</p>
            <p>Role: assigner</p>
            <Delete/>
        </Box>
    )
}

export default ManageAccess
