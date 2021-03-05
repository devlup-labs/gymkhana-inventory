import React from 'react';
import Item from './Item';
import { Avatar, Box, Button, TextField } from '@material-ui/core';
import ManageAccess from './ManageAccess';
import classes from '@material-ui/icons/Class';

function AdminProfile(props) {
    const isManageAcsess = true;
    const data = {
        items: [
            {
                itemId: 'id1',
                itemName: 'a',
                requestingDate: 'dd-mm-yy',
                dueDate: 'dd-mm-yy',
                contact: '1234556788',
                requestaName: 'qwe',
                emailID: 'a@iitj.ac.in'
            },
            {
                itemId: 'id2',
                itemName: 'abc',
                requestingDate: 'dd-mm-yy',
                dueDate: 'dd-mm-yy',
                contact: '1234556788',
                requestaName: 'qwe',
                emailID: 'a@iitj.ac.in'
            },
            {
                itemId: 'id3',
                itemName: 'abc',
                requestingDate: 'dd-mm-yy',
                dueDate: 'dd-mm-yy',
                contact: '1234556788',
                requestaName: 'qwe',
                emailID: 'a@iitj.ac.in'
            }
        ],
        manage: [
            {
                name: 'abc',
                email: 'anc@iitj.ac.in',
                role: 'assigner'
            },
            {
                name: 'ac',
                email: 'anc@iitj.ac.in',
                role: 'assigner'
            },
            {
                name: 'ab',
                email: 'anc@iitj.ac.in',
                role: 'assigner'
            },
            {
                name: 'abc',
                email: 'anc@iitj.ac.in',
                role: 'assigner'
            }
        ]
    };
    return (
        <Box className="admin">
            <Box className="adminHeader">
                <Avatar />
                <Box>
                    <h2 style={{ margin: '3px' }}>Club </h2>
                    <p style={{ margin: '3px' }}>Email ID:club@iitj.ac.in</p>
                </Box>
            </Box>
            <Box className="adminBody">
                <Box className="buttonAdmin">
                    <Button variant="contained" color="primary">
                        Manage Access
                    </Button>
                </Box>
                {isManageAcsess === true ? (
                    <Box className="cards">
                        <form className={classes.root} noValidate autoComplete="on">
                            <TextField id="standard-basic" label="Name" />
                            <TextField id="filled-basic" label="Email" />
                            <TextField id="outlined-basic" label="Role" />
                            <Button
                                className={classes.root}
                                variant="contained"
                                style={{
                                    backgroundColor: '#112d4e',
                                    color: 'white',
                                    margin: '8px'
                                }}>
                                Add
                            </Button>
                        </form>
                        {data.manage.map((card, index) => {
                            return (
                                <ManageAccess
                                    key={index}
                                    name={card.name}
                                    email={card.email}
                                    role={card.role}
                                />
                            );
                        })}
                    </Box>
                ) : null}

                <Box className="buttonAdmin">
                    <Button variant="contained" color="primary">
                        Add New Item
                    </Button>
                    <Button variant="contained" color="primary">
                        View/Edit Inventory
                    </Button>
                </Box>
                <Box className="adminBody">
                    <p>Total items: </p>
                    <h3>Pending Requests</h3>
                    {data.items.map((card) => {
                        return (
                            <Item
                                key={card.itemId}
                                itemId={card.itemId}
                                itemName={card.itemName}
                                requestingDate={card.requestingDate}
                                dueDate={card.dueDate}
                                emailID={card.emailID}
                                requestaName={card.requestaName}
                                contact={card.contact}
                            />
                        );
                    })}
                    <h3>Archive Transaction</h3>
                    {data.items.map((card) => {
                        return (
                            <Item
                                key={card.itemId}
                                itemId={card.itemId}
                                itemName={card.itemName}
                                requestingDate={card.requestingDate}
                                dueDate={card.dueDate}
                                emailID={card.emailID}
                                requestaName={card.requestaName}
                                contact={card.contact}
                            />
                        );
                    })}

                    <h3>Transaction History</h3>
                    <Box>
                        {data.items.map((card) => {
                            return (
                                <Item
                                    key={card.itemId}
                                    itemId={card.itemId}
                                    itemName={card.itemName}
                                    requestingDate={card.requestingDate}
                                    dueDate={card.dueDate}
                                    emailID={card.emailID}
                                    requestaName={card.requestaName}
                                    contact={card.contact}
                                />
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default AdminProfile;
