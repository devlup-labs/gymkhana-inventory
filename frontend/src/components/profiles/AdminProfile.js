import React from 'react'
import Item from './Item'
import { Avatar,Box,Button,TextField } from '@material-ui/core'
import ManageAccess from './ManageAccess'
import classes from'@material-ui/icons/Class'


function AdminProfile(props) {
    var isManageAcsess=true;
        return (
            <Box className='admin'>
                <Box className='adminHeader' >
                    <Avatar/>
                    <Box>
                        <h2 style={{margin:'3px'}}>Club {props.clubName}</h2>
                        <p style={{margin:'3px'}}>Email ID: {props.emailID}</p>
                    </Box>
                    
                </Box>
                <Box className='adminBody'>
                    <Box className='buttonAdmin'>
                        <Button  variant="contained" color="primary">Manage Access</Button>
                    </Box>
                    {isManageAcsess===true?(<Box className='cards'>
                        <form className={classes.root} noValidate autoComplete="on">
                            <TextField id="standard-basic" label="Name" />
                            <TextField id="filled-basic" label="Email" />
                            <TextField id="outlined-basic" label="Role" />
                            <Button className={classes.root} variant="contained" style={{backgroundColor:'#112d4e' , color:'white',margin:'8px'}}>Add</Button>                            
                        </form>
                        <ManageAccess name='name' email='email' role='assigner'/>
                        <ManageAccess name='name' email='email' role='assigner'/>
                        <ManageAccess name='name' email='email' role='assigner'/>
                        <ManageAccess name='name' email='email' role='assigner'/>
                        <ManageAccess name='name' email='email' role='assigner'/>
                    </Box>
                    ):null}
                    
                    <Box className='buttonAdmin'>
                        <Button variant="contained" color="primary">Add New Item</Button>
                        <Button variant="contained" color="primary">View/Edit Inventory</Button>
        
                    </Box>
                    <Box className="adminBody">
                        <p>Total items: {props.totalItems}</p>
                        <h3>Pending Requests</h3>
                                <Item/>
                        <h3>Archive Transaction</h3>
                        <Item/>
                        
                        <h3>Transaction History</h3>  
                        <Box className='' >
                            <Item itemName='Item Name' 
                                itemId='id'
                                requestingDate='dd-mm-yyyy' 
                                dueDate='dd-mm-yyyy' 
                                requestaName='Request Name' 
                                emailID='guest@iit.ac.in' 
                                contact='1234567890'/>
                            <Item itemName='Item Name'
                                itemId='id' 
                                requestingDate='dd-mm-yyyy' 
                                dueDate='dd-mm-yyyy' 
                                requestaName='Request Name' 
                                emailID='guest@iit.ac.in' 
                                contact='1234567890'/>
                            <Item itemName='Item Name' 
                                itemId='id'
                                requestingDate='dd-mm-yyyy' 
                                dueDate='dd-mm-yyyy' 
                                requestaName='Request Name' 
                                emailID='guest@iit.ac.in' 
                                contact='1234567890'/>
                        
                        </Box>
                        
        
                    </Box>
                </Box>
            
    
            </Box>
        );
    
  }
  

export default AdminProfile

