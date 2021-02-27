import React from 'react'
import { Box ,Button} from '@material-ui/core'
import '../../App.css'


function Item (props) {
    var isClicked=true;
        return (
            <Box className='cards' style={{maxwidth: '18rem'}}>
                <Box className="cardContent">
                    <Box>
                        <p className="">Item Name: {props.itemName}</p>
                        <p className="">ID: {props.itemId}</p>
                    </Box>
                    <p className="">Requesting Date: {props.requestingDate}</p>
                    <p className="">Due Date: {props.dueDate}</p>
                </Box>
                {isClicked===true?(<Box className='buttonAdmin'>
                    <Button variant="contained" color="primary">Approve</Button>
                    <Button variant="contained" color="primary">Deny</Button>    
                </Box>):null}
                
                <Box className="cardContent">
    
                    <p className="">Request Name: {props.requestaName}</p>
                    <p className="">Email ID: {props.emailID}</p>
                    <p className="">Contact NO.: {props.contact}</p>
                </Box>  
                
            </Box>
    
    
    
        );
    
  }
  


export default Item;
