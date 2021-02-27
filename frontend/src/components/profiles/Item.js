import React from 'react';
import { Box, Button } from '@material-ui/core';

function Item(props) {
    const isClicked = true;
    return (
        <Box className="cards" style={{ maxwidth: '18rem' }}>
            <Box className="cardContent">
                <Box>
                    <p className="">Item Name: {this.props.itemName}</p>
                    <p className="">ID: {this.props.itemId}</p>
                </Box>
                <p className="">Requesting Date: {this.props.requestingDate}</p>
                <p className="">Due Date: {this.props.dueDate}</p>
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
                <p className="">Request Name: {this.props.requestaName}</p>
                <p className="">Email ID: {this.props.emailID}</p>
                <p className="">Contact NO.: {this.props.contact}</p>
            </Box>
        </Box>
    );
}

export default Item;
