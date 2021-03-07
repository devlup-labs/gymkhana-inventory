import React, { useState } from 'react';
import Item from './Item';
import { Avatar, Box, Button, TextField, Grid } from '@material-ui/core';
import ManageAccess from './ManageAccess';
import classes from '@material-ui/icons/Class';

function AdminProfile() {
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
    const [toggleManageAccess, setToggleManageAccess] = useState(false);
    return (
        <Grid item container xs={12}>
            <Grid className="adminHeader" item lg={3} sm={12}>
                <Avatar />
                <Box>
                    <h2 style={{ margin: '3px' }}>Name: Club </h2>
                    <p style={{ margin: '3px' }}>Email: club@iitj.ac.in</p>
                </Box>
                <Box className="buttonAdmin">
                    <Button variant="contained" color="primary">
                        Edit Profile
                    </Button>
                </Box>
            </Grid>
            <Grid className="adminBody" item lg={9} sm={12}>
                <Box className="buttonAdmin">
                    <Button
                        onClick={() => setToggleManageAccess(!toggleManageAccess)}
                        variant="contained"
                        color="primary">
                        Manage Access
                    </Button>
                    <Button variant="contained" color="primary">
                        Add New Item
                    </Button>
                    <Button variant="contained" color="primary">
                        View/Edit Inventory
                    </Button>
                    <Button variant="contained" color="primary">
                        Invite
                    </Button>
                </Box>
                {toggleManageAccess ? (
                    <Box>
                        <form className={classes.root} noValidate autoComplete="on">
                            <TextField id="standard-basic" label="Name" />
                            <TextField id="filled-basic" label="Email" />
                            <TextField id="outlined-basic" label="Role" />
                            <Button
                                className={classes.root}
                                variant="contained"
                                style={{
                                    backgroundColor: '#3f72af',
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

                <Box className="adminBody">
                    <h2 className="adminTheme">Pending Requests</h2>
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
                    <Box>
                        <h2 className="adminTheme">Active Transaction</h2>
                        <Box className="buttonAdmin">
                            <Button variant="contained" color="primary">
                                Extension Request
                            </Button>
                        </Box>
                    </Box>
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

                    <h2 className="adminTheme">Transaction History</h2>
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
            </Grid>
        </Grid>
    );
}

export default AdminProfile;
