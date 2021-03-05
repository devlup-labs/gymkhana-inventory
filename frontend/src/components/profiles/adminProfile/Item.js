/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Button } from '@material-ui/core';

function Item(props) {
    const isClicked = true;
    return (
        <Box className="cards" style={{ maxwidth: '18rem' }}>
            <Box className="cardContent">
                <Box>
                    <p>Item Name: {props.itemName}</p>
                    <p>ID: {props.itemId}</p>
                </Box>
                <p>Requesting Date: {props.requestingDate}</p>
                <p>Due Date: {props.dueDate}</p>
            </Box>
            {isClicked === true ? (
                <Box className="buttonAdmin">
                    <Button variant="contained" color="primary">
                        Approve
                    </Button>
                    <Button variant="contained" color="primary">
                        Deny
                    </Button>
                </Box>
            ) : null}

            <Box className="cardContent">
                <p>Request Name: {props.requestaName}</p>
                <p>Email ID: {props.emailID}</p>
                <p>Contact NO.: {props.contact}</p>
            </Box>
        </Box>
    );
}

export default Item;
